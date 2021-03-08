import React, { useState } from 'react';
import { makeStyles, fade, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import PlaceApi from '../apis/photon/PlaceApi';
import PlaceSelection from './PlaceSelection';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: 'auto',
    },
    inputRoot: {
        color: 'inherit',
        width: `calc(100% - ${theme.spacing(6)}px)`,
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
        transition: theme.transitions.create('width'),
        width: '10ch',
        '&:focus': {
            width: '22ch',
        },
    },
    menuButton: {
        marginLeft: theme.spacing(0),
    },
    clearButton: {
        position: 'absolute',
        right: theme.spacing(1),
        backgroundColor: "#eee2",
        '&:hover': {
            backgroundColor: "#eee4",
        },
    },
    invisible: {
        opacity: 0.0,
    },
    icon: {
        opacity:1.0
    }
}));

export default function Searchbar(props) {
    const classes = useStyles();
    const inputRef = React.useRef();
    const [open, setOpen] = useState(false);
    const [searchVal, setSearchVal] = useState("");
    const [options, setOptions] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);

    const api = new PlaceApi();

    const placeCallback = (places) => {
        setOptions(places);
        setOpen(true);
    }

    const handleTyping = (event) => {
        setSearchVal(event.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        api.searchByText(searchVal, placeCallback);
        setAnchorEl(event.currentTarget);
    }

    const handleClear = (event) => {
        event.preventDefault();
        setSearchVal("");
    }

    const onPlaceSelected = (place) => {
        setSearchVal(place.getPlaceString());
        props.onPlaceSelected(place);
    }

    return (
        <form className={classes.search} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="search"
                onClick={handleSubmit}
            >
                <SearchIcon />
            </IconButton>
            <InputBase
                placeholder="Suchen…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputRef={inputRef}
                inputProps={{ 'aria-label': 'search' }}
                value={searchVal}
                onChange={handleTyping}
            />
            <IconButton
                edge="start"
                className={classes.clearButton}
                color="inherit"
                aria-label="clear"
                onClick={handleClear}
                disabled={!Boolean(searchVal)}
            >
                {Boolean(searchVal) && <ClearIcon className={classes.icon} />}
                {!Boolean(searchVal) && <ClearIcon className={classes.invisible} />}
            </IconButton>

            <PlaceSelection places={options} opened={open} anchor={anchorEl} onClose={handleClose} onPlaceSelected={onPlaceSelected} />
        </form>
    );
}