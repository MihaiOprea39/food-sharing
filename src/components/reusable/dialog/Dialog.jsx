import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FoodShareDialog({title, visible = false, children = 'To subscribe to this website, please enter your email.', onClose, onConfirm}) {
    return (
        <Dialog open={visible} onClose={() => onClose()} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary" className="mb-1">
                    Cancel
                </Button>
                <Button onClick={onConfirm} color="primary" className="ml-2 mb-1">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}
