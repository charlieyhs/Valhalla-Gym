import { useState, useMemo, useCallback } from 'react';
import { Snackbar, Alert } from '@mui/material';
import PropTypes from 'prop-types';
import { AlertContext } from '../contexts/AlertContext';


export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({ 
        open: false, 
        message: "",
        severity: "success"
    });

    const showAlert = useCallback((message, severity = "success") => {
        setAlert({ open: true, message, severity });
    }, []);

    const hideAlert = useCallback(() => {
        setAlert(prev => ({ ...prev, open: false }));
    }, []);


    const contextValue = useMemo(() => ({
        showAlert,
        hideAlert
    }), [showAlert, hideAlert]);

    return (
        <AlertContext.Provider value={contextValue}>
            {children}
            <Snackbar
                open={alert.open}
                autoHideDuration={3000}
                onClose={hideAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                <Alert onClose={hideAlert} severity={alert.severity}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </AlertContext.Provider>
    );
};

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AlertProvider;