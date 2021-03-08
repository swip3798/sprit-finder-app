import { Drawer, List, ListItemIcon, ListItem, Divider, ListItemText, makeStyles } from '@material-ui/core';
import { LogoIconBlack } from './img/LogoIcon';
import SubjectIcon from '@material-ui/icons/Subject';
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import React, { } from 'react';
import ApiStatus from './ApiStatus';

const useStyles = makeStyles({
    list: {
        width: 300,
    },
    title: {
        height: 64,
    }
});

export default function Sidebar({ opened, onClose, tankApi, placeApi, onTpOpen, onIpOpen, onPrOpen }) {
    const classes = useStyles();

    return (
        <Drawer anchor='left' open={opened} onClose={onClose} >
            <List className={classes.list} component="nav" aria-label="main">
                <ListItem className={classes.title}>
                    <ListItemIcon>
                        <LogoIconBlack />
                    </ListItemIcon>
                    <ListItemText primary="SpritFinder" />
                </ListItem>
                <Divider />
                <ListItem button component="a" href="https://github.com/swip3798/sprit-finder" target="_blank" rel="noopener noreferrer">
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary="Github" />
                </ListItem>
                <ListItem button onClick={onTpOpen}>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Open-Source-Bibliotheken" />
                </ListItem>
                <ListItem button onClick={onIpOpen}>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Impressum" />
                </ListItem>
                <ListItem button onClick={onPrOpen}>
                    <ListItemIcon>
                        <SubjectIcon />
                    </ListItemIcon>
                    <ListItemText primary="Datenschutzerklärung" />
                </ListItem>
            </List>
            
            <List component="nav" aria-label="secondary" className={classes.list}>
                <ListItem className={classes.title}>
                    <ListItemText primary="Ereichbarkeit der externen Dienste" />
                </ListItem>
                <Divider />
                <ApiStatus name="Tankerkönig-API" api={tankApi} />
                <ApiStatus name="Photon-API" api={placeApi} />
            </List>

        </Drawer>
    );
}