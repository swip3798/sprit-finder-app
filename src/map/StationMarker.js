import React from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import { Button, Table, TableBody, TableCell, TableContainer, TableRow, makeStyles, Icon } from '@material-ui/core';
import { iconNormal } from '../img/Icons';
import GoogleMapsLink from '../apis/mapslinks/MapLinkCreator';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(1),
        color: theme.palette.common.white + "!important",
    }
}))

export default function StationMarker(props) {
    const classes = useStyles();
    let mainFuelPriceTag;
    switch (props.mainFuelType) {
        case "diesel":
            mainFuelPriceTag = props.station.diesel;
            break;
        case "e10":
            mainFuelPriceTag = props.station.e10;
            break;
        default:
            mainFuelPriceTag = props.station.e5;
            break;
    }

    const linkIcon = <Icon className="fas fa-external-link-alt" fontSize="small" />
    const googleLink = new GoogleMapsLink(props.station.lat, props.station.lng);

    return (
        <Marker position={[props.station.lat, props.station.lng]} key={props.station.id} icon={iconNormal} >
            <Popup>
                <TableContainer>
                    <Table aria-label="simple table" size="small" >
                        <TableBody>
                            <TableRow key="Name">
                                <TableCell component="th" scope="row">Name</TableCell>
                                <TableCell align="left">{props.station.name}</TableCell>
                            </TableRow>
                            <TableRow key="Straße">
                                <TableCell component="th" scope="row">Straße</TableCell>
                                <TableCell align="left">{props.station.street + " " + props.station.houseNumber}</TableCell>
                            </TableRow>
                            <TableRow key="Ort">
                                <TableCell component="th" scope="row">Ort</TableCell>
                                <TableCell align="left">{props.station.postCode + " " + props.station.place}</TableCell>
                            </TableRow>
                            <TableRow key="Diesel">
                                <TableCell component="th" scope="row">Diesel</TableCell>
                                <TableCell align="left">{props.station.diesel ? props.station.diesel + "€" : "Nicht verfügbar"}</TableCell>
                            </TableRow>
                            <TableRow key="Super">
                                <TableCell component="th" scope="row">Super</TableCell>
                                <TableCell align="left">{props.station.e5 ? props.station.e5 + "€" : "Nicht verfügbar"}</TableCell>
                            </TableRow>
                            <TableRow key="Super E10">
                                <TableCell component="th" scope="row">Super E10</TableCell>
                                <TableCell align="left">{props.station.e10 ? props.station.e10 + "€" : "Nicht verfügbar"}</TableCell>
                            </TableRow>
                            <TableRow key="Ist Offen">
                                <TableCell component="th" scope="row">Ist Offen</TableCell>
                                <TableCell align="left">{props.station.isOpen ? "Ja" : "Nein"}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    component="a"
                    endIcon={linkIcon}
                    href={googleLink.getUrl()}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    In Google Maps öffnen
                </Button>
            </Popup>
            <Tooltip direction="bottom" offset={[-15, 23]} opacity={1} permanent>
                {mainFuelPriceTag}€
            </Tooltip>
        </Marker>
    );
}