import './style.js';
import { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import PropTypes from 'prop-types';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertSnackbar({ open, setOpen }: Props) {
  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackbarClose}>
      <Alert severity="success" onClose={handleSnackbarClose} sx={{ width: '100%' }}>
        Task successfully deleted
      </Alert>
    </Snackbar>
  );
}

AlertSnackbar.propTypes = {
  task: PropTypes.object,
  onTaskDelete: PropTypes.func,
};
