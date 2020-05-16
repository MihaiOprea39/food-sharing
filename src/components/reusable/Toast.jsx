import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 900,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function FoodShareToast({visible, severity = 'success', message, onClose}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Snackbar
                open={visible}
                autoHideDuration={5000}
                onClose={onClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            >
                <Alert onClose={onClose} severity={severity} className="p3">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
