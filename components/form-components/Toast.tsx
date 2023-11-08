import { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface Props {
    open: boolean,
    onClose: () => void,
    severity: AlertProps['severity'],
    message?: string | undefined,
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Toast = ({open, onClose, severity, message}: Props) => {
    return (
        <Snackbar open={open} onClose={onClose}>
            <Alert severity={severity} sx={{ width: '100%' }}>{message}</Alert>
        </Snackbar>
    );
}