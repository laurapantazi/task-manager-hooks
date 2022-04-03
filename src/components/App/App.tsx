import { useState } from 'react';
import './style.js';
import { TaskForm } from '../TaskForm/TaskForm';
import Tasks from '../Tasks/Tasks';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Typography from '@mui/material/Typography';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box
      component="div"
      style={{
        margin: '2rem',
      }}
    >
      <Typography variant="h3" gutterBottom component="div">
        <PlaylistAddCheckIcon fontSize="large" /> Todo app
      </Typography>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item textAlign='center'>
          <Button onClick={(e) => setOpenModal(true)} variant="outlined" size="large" style={{marginBottom: '2rem'}} startIcon={<AddBoxIcon />}>Create task</Button>
          <Tasks />
          <TaskForm openModal={openModal} onModalClose={() => setOpenModal(false)} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
