import React from 'react';

import { Button, DialogActions, DialogTitle, Dialog }  from '@mui/material';

function ModalTemplate(props) {
    console.log(props);
    
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };
    return (
        <Dialog onClose={handleClose} open={open}
        fullWidth
        // maxWidth
        >
            <DialogTitle align='center' fontWeight="bold" >{props.title}</DialogTitle>
            
            {props.children}

            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}


export default ModalTemplate;