import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, fade, makeStyles, CssBaseline, Container, Fab, Select, MenuItem, FormControl, FormHelperText, IconButton, Snackbar, Backdrop, CircularProgress, Chip } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import RefreshIcon from '@material-ui/icons/Refresh';
import TankMap from './map/TankMap';
import Api from './apis/tankerkoenig/Api';
import SearchBar from './search/Searchbar';
import PlaceApi from './apis/photon/PlaceApi';
import Sidebar from './Sidebar';
import FullscreenDialog from './dialogs/FullscreenDialog';
import ThirdPartyLibrary from './dialogs/ThirdPartyLibrary';
import Imprint from './dialogs/Imprint';
import PrivacyNotice from './dialogs/PrivacyNotice';
import CloseIcon from '@material-ui/icons/Close';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PredictDialog from './dialogs/PredictDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    selectForm: {
        position: 'fixed',
        up: theme.spacing(2),
        left: theme.spacing(2),
        marginTop: '10px',
        padding: '3px',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.9),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 1.0),
        },
        marginLeft: 0,
        width: 'auto',
        color: fade(theme.palette.common.white, 0.15),
    },
    select: {
        color: theme.palette.common.black,
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(2),
    },
    refreshFab: {
        position: 'fixed',
        top: theme.spacing(9),
        right: theme.spacing(7),
    },
    predictFab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        left: theme.spacing(2),
    },
    searchInThisArea:{
        position: 'fixed',
        [theme.breakpoints.up('sm')]: {
            top: theme.spacing(9),
        },
        bottom: theme.spacing(3),
        left: `calc(50% - ${theme.spacing(25)/2}px)`,
        backgroundColor: "#ffffffff",
        width: theme.spacing(25),
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"
    },
    versionText: {
        position: 'fixed',
        bottom: theme.spacing(0),
        left: theme.spacing(0),
        fontSize: '11px',
        color: theme.palette.common.black,
        zIndex: 10,
        backgroundColor: fade(theme.palette.common.white, 0.50),
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    link: {
        paddingRight: '5px',
        paddingLeft: '5px',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const saveLocation = (location) => {
    window.localStorage.setItem("lastSearchedLocation", JSON.stringify(location));
}

const loadLocation = () => {
    let locationString = window.localStorage.getItem("lastSearchedLocation");
    if (locationString !== null) {
        return JSON.parse(locationString);
    } else {
        return [49.0, 8.402];
    }
}

export default function App(props) {
    // Set state
    const classes = useStyles();
    const [center, setCenter] = useState(loadLocation());
    const [map, setMap] = useState(null);
    const [stations, setStations] = useState([]);
    const [mainFuelType, setMainFuelType] = useState("e5");
    const [isLocated, setIsLocated] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);
    const [tpOpen, setTpOpen] = useState(false);
    const [ipOpen, setIpOpen] = useState(false);
    const [prOpen, setPrOpen] = useState(false);
    const [predictOpen, setPredictOpen] = useState(false);
    const [notification, setNotification] = useState(false);
    const [notificationMess, setNotificationMess] = useState('');
    const [loading, setLoading] = useState(false);

    const tankApi = new Api(props.apiKey);
    const placeApi = new PlaceApi();

    // Event handler

    const callbackStations = (data) => {
        setStations(data.slice(0, props.maxStations));
    }

    const setNewCenter = (location) => {
        setCenter(location);
        saveLocation(location);
        map._setViewWasCalled = true;
        map.setView(location, 13);
        setIsLocated(true);
        console.log(location)
        tankApi.searchByLocation(location[0], location[1], 10, callbackStations);
    }
    const resolveGeolocation = (location) => {
        setLoading(false);
        setNewCenter([location.coords.latitude, location.coords.longitude]);
    }

    const refreshTankData = () => {
        if (isLocated) {
            tankApi.searchByLocation(center[0], center[1], 10, callbackStations);
        }
    }

    const handleGeolocationError = (geolocationError) => {
        console.log(geolocationError.message);
        setLoading(false);
        switch (geolocationError.code) {
            case 1:
                setNotificationMess("Keine Berechtigung für den Standort");
                setNotification(true);
                break;
            case 2:
                setNotificationMess("Standort konnte nicht ermittelt werden");
                setNotification(true);
                break;
            case 3:
                setLoading(true);
                navigator.geolocation.getCurrentPosition(resolveGeolocation, handleGeolocationError);
                break;
            default:
                break;
        }
    }

    const requestLocation = () => {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(resolveGeolocation, handleGeolocationError, { enableHighAccuracy: true, timeout: 5000 });
    }
    const handlePlaceSelected = (place) => {
        setNewCenter([place.lat, place.lng]);
    }

    const handleMainFuelTypeChange = (event) => {
        setMainFuelType(event.target.value);
    }

    const handlePositionChange = (location) => {
        setNewCenter([location.lat, location.lng]);
    }

    const handleMapCreate = (map, it) => {
        setMap(map);
    }

    const handleMenuClose = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMenuOpened(false);
    }

    const handleAreaSearch = () => {
        let location = map.getCenter();
        setNewCenter([location.lat, location.lng]);
    }

    const handleNotification = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setNotification(false);
    }

    const handleLocalStorageClear = (event) => {
        event.preventDefault();
        window.localStorage.clear();
        setNotificationMess("Lokaler Speicher wurde geleert!");
        setNotification(true);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false} disableGutters={true} className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {setMenuOpened(true)}}>
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            SpritFinder
                        </Typography>
                        <SearchBar onPlaceSelected={handlePlaceSelected} />
                    </Toolbar>
                </AppBar>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={notification}
                    autoHideDuration={6000}
                    onClose={handleNotification}
                    message={notificationMess}
                    action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleNotification}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                />
                <Backdrop className={classes.backdrop} open={loading} >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <FullscreenDialog open={tpOpen} onClose={() => {setTpOpen(false)}} ContentComponent={ThirdPartyLibrary} title="Open-Source-Bibliotheken" />
                <FullscreenDialog open={ipOpen} onClose={() => {setIpOpen(false)}} ContentComponent={Imprint} title="Impressum" />
                <FullscreenDialog open={prOpen} onClose={() => {setPrOpen(false)}} ContentComponent={PrivacyNotice} title="Datenschutzerklärung" onLocalStorageClear={handleLocalStorageClear} />
                <PredictDialog open={predictOpen} onClose={() => {setPredictOpen(false)}} stations={stations} location={center} mainFuelType={mainFuelType} />
                <TankMap center={center} whenCreated={handleMapCreate} stations={stations} onPositionChanged={handlePositionChange} mainFuelType={mainFuelType} isLocated={isLocated} />
                <Fab color="secondary" aria-label="Lokalisieren" onClick={requestLocation} className={classes.fab}>
                    <GpsFixedIcon />
                </Fab>
                <Chip label="In diesem Bereich suchen" className={classes.searchInThisArea} onClick={handleAreaSearch} />
                {isLocated &&
                    <Fab color="primary" aria-label="Aktualisieren" onClick={refreshTankData} className={classes.refreshFab}>
                        <RefreshIcon />
                    </Fab>
                }
                {isLocated &&
                    <Fab color="primary" aria-label="Vorhersage" onClick={() => {setPredictOpen(true)}} className={classes.predictFab}>
                        <TrendingUpIcon />
                    </Fab>
                }
                <FormControl className={classes.selectForm}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={mainFuelType}
                        onChange={handleMainFuelTypeChange}
                        className={classes.select}
                    >
                        <MenuItem value={"e5"}>Super E5</MenuItem>
                        <MenuItem value={"e10"}>Super E10</MenuItem>
                        <MenuItem value={"diesel"}>Diesel</MenuItem>
                    </Select>
                    <FormHelperText className={classes.select}>Gewünschte Spritsorte</FormHelperText>
                </FormControl>
                <div className={classes.versionText}>
                    Version: v{props.version}
                </div>
                <Sidebar opened={menuOpened} onClose={handleMenuClose} tankApi={tankApi} placeApi={placeApi} onTpOpen={() => {setTpOpen(true)}} onIpOpen={() => {setIpOpen(true)}} onPrOpen={() => {setPrOpen(true)}} />
            </Container>
        </React.Fragment>
    );
}