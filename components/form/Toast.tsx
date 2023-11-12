import { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { ToastT } from 'types/form/Toast.types';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  }
)

export const Toast = ({open, onClose, severity, message}: ToastT) => {
  return (
    <Snackbar open={open} onClose={onClose}>
      <Alert severity={severity} sx={{ width: '100%' }}>{message}</Alert>
    </Snackbar>
  )
}