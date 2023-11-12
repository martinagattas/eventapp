import { AlertProps } from '@mui/material/Alert';

export type ToastT = {
  open: boolean,
  onClose: () => void,
  severity: AlertProps['severity'],
  message?: string | undefined
}