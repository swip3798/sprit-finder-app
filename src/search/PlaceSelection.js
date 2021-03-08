import React from 'react';
import { Menu, MenuItem, ListItemIcon, Icon } from '@material-ui/core';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HouseIcon from '@material-ui/icons/House';

export default function SimpleMenu(props) {

    const handleItemClick = (_, index) => {
        if (props.onPlaceSelected) {
            props.onPlaceSelected(props.places[index]);
        }
        props.onClose();
    };
    let items = [];

    props.places.forEach((place, index) => {
        let icon;
        switch (place.type) {
            case "city":
                icon = <LocationCityIcon fontSize="small" />;
                break;
            case "house":
                icon = <HouseIcon fontSize="small" />;
                break;
            case "street":
                icon = <Icon className="fas fa-road" fontSize="small" />
                break;
            default:
                icon = <LocationOnIcon fontSize="small" />
                break;
        }
        const item = <MenuItem onClick={(event) => {handleItemClick(event, index)}} key={place.id}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            {place.getPlaceString()}
        </MenuItem>
        items.push(item);
    });

    return (
        <div>
            <Menu
                id="simple-menu"
                anchorEl={props.anchor}
                keepMounted
                open={props.opened}
                onClose={props.onClose}
            >
                {items}
            </Menu>
        </div>
    );
}
