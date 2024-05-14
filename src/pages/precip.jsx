import React, { useState, useRef } from 'react';
//import { useNavigate } from 'react-router-dom';
import './Prescription.css';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import precription from '../images/half.png';
import { useReactToPrint } from "react-to-print";


const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))



const Precip = () => {

    const [openPopup, setOpenPopup] = useState(false);
    const conponentPDF = useRef();
    const classes = useStyles();

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };
    const handleSave = async () => {

    };

    const generatePDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "Userdata",
        pageStyle: '@page { size: A4; }'
        // onAfterPrint:()=>alert("Data saved in PDF")
    });

    return (
        <div>
            <button onClick={handleOpenPopup}>hello</button>

            <Dialog
                open={openPopup}
                maxWidth="200"
                classes={{ paper: classes.dialogWrapper }}
                 
            >
                <DialogTitle className={classes.dialogTitle}>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                            Your Prescription
                        </Typography>
                        <Button color="secondary" onClick={handleClosePopup}>
                            <CloseIcon />
                        </Button>
                    </div>
                </DialogTitle>
                <DialogContent dividers >

                    <div
                        style={{
                            position: 'relative',
                            // maxWidth: '210mm',
                            // maxHeight: '297mm',
                            overflow: 'hidden', // Hide the scroll bars
                        }}

                    >
                        <div ref={conponentPDF} style={{ width: '100%' }}>
                            <img
                                src={precription}
                                alt="A4 Size Image"
                                style={{ width: '100%', height: 'auto', maxWidth: '210mm', maxHeight: '297mm' }}
                            />
                            </div>
                        <div style={{ marginTop: '20px' }}>
                            <Button variant="contained" color="primary" onClick={generatePDF}>
                                Save
                            </Button>
                        </div>
                    </div>

                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Precip;