import { ListItemIcon, ListItemText, ListItem } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { useState, useEffect } from 'react';

export default function ApiStatus({ api, name }) {
    const [reachable, setReachable] = useState(false);
    const [firstTried, setfirstTried] = useState(false);
    const handleVerify = () => {
        setReachable(true);
    }

    useEffect(() => {
        if (!firstTried) {
            api.isApiReachable(handleVerify);
            setfirstTried(true);
        }
    }, [api, firstTried]);


    return (
        <ListItem>
            <ListItemIcon>
                {reachable && <CheckIcon style={{ color: green[500] }} />} {!reachable && <CloseIcon style={{ color: red[500] }} />}
            </ListItemIcon>
            <ListItemText primary={name} />
        </ListItem>
    );
}