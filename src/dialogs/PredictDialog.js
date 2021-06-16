import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, makeStyles, CircularProgress, DialogActions, Button, Chip, Typography } from '@material-ui/core';
import { ComposedChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import PredictionApi from '../apis/predict/PredictionApi';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

import "./PredictDialog.css";

const useStyles = makeStyles((theme) => ({
    root: {
        opacity: 0.1,
    },
    chart: {
        overflow: "hidden",
        width: "100%",
        height: "300px"
    },
    dialog: {
        width: "100%"
    },
    trendChip: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: `calc(100% - ${theme.spacing(2)}px)`
    },
    progress: {
        position: "absolute",
        top: "calc(50% - 20px)",
        left: "calc(50% - 20px)"
    },
    credit: {
        fontSize: "0.9em",
        fontStyle: "italic",
        margin: theme.spacing(1),
        width:`calc(100%% - ${theme.spacing(2)}px)`,
        textAlign: "center"
    }
}));

const FuelTypeNames = {
    e5: "Super E5",
    e10: "Super E10",
    diesel: "Diesel"
}

const predictApi = new PredictionApi();

export default function PredictDialog({ onClose, open, stations, location, mainFuelType }) {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [upwardTrend, setUpwardTrend] = useState([])


    const handleClose = () => {
        onClose();
    };

    const handlePrediction = (prediction) => {
        setLoading(false);
        setData(prediction.getRechartsData());
        let trends = prediction.isCurrentUpwardTrend();
        setUpwardTrend(trends[mainFuelType]);
    }

    useEffect(() => {
        if (open) {
            setLoading(true);
            let uuids = [];
            stations.forEach(station => {
                uuids.push(station.id);
            });
            predictApi.predictWithPerlman(location[0], location[1], uuids, handlePrediction);
        }
    }, [open, stations, location]);

    const labelFormatter = (label) => {
        return label + " Uhr";
    }

    const valueFormatter = (value, name, props) => {
        return value.toFixed(2) + "€";
    }

    const currentHour = new Date().getHours();

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} className={classes.dialog}>
            <DialogTitle id="simple-dialog-title">Preisvorhersage in dieser Region</DialogTitle>
            {loading && <CircularProgress className={classes.progress} />}
            <div className={loading && classes.root}>
                <div className={classes.chart}>
                    <ResponsiveContainer>
                        <ComposedChart data={data} margin={{ top: 5, right: 15, left: 5, bottom: 5 }} >
                            <Legend verticalAlign="top" height={42} />
                            <Line type="monotone" dataKey={mainFuelType} stroke="#2196f3" name={FuelTypeNames[mainFuelType]} dot={true} />
                            <ReferenceLine x={currentHour + ":00"} stroke="red" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="name" />
                            <YAxis domain={['dataMin', 'dataMax']} label={{ value: "Preis", position: "insideLeft", angle: -90 }} tickFormatter={valueFormatter} />
                            <Tooltip labelFormatter={labelFormatter} formatter={valueFormatter} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
                {upwardTrend &&
                    <Chip
                        label="Spritpreise steigen"
                        icon={<TrendingUpIcon />}
                        className={classes.trendChip}
                    />
                }
                {!upwardTrend &&
                    <Chip
                        label="Spritpreise sinken"
                        icon={<TrendingDownIcon />}
                        className={classes.trendChip}
                    />
                }
                <Typography component="div" className={classes.credit}>Vorhersage wird ermöglicht durch die historischen Daten von <a href="https://dev.azure.com/tankerkoenig/_git/tankerkoenig-data" rel="noopener nofollow noreferrer" target="_blank">Tankerkönig</a><br/> (Unter der <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" rel="noopener nofollow noreferrer" target="_blank">CC-BY-NC-SA-4.0</a>-Lizenz)</Typography>
            </div>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Schließen
                </Button>
            </DialogActions>
        </Dialog>
    );
}