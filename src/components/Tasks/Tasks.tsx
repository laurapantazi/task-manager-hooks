import './style.js';
import { useState, useEffect } from 'react';
import { State } from '../../store/reducers/index';
import { Task } from '../Task/Task';
import List from '@mui/material/List';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../store/actions/index';
import { Task as TaskType } from '../../types/Task';
import AlertSnackbar from './AlertSnackbar';
import Box from '@mui/material/Box';

export default function Tasks() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const allTasks: TaskType[] = useSelector((state: State) => state.tasks);

  return (
    <Box display="flex" flexDirection="column" style={{ width: '80vw' }} alignItems="center" justifyContent="center">
      <AlertSnackbar open={open} setOpen={setOpen} />
      {allTasks && allTasks.length > 0 ? (
        allTasks.map((task) => (
          <List sx={{ width: '100%', maxWidth: 1200 }} key={task.id}>
            <Task onTaskDelete={() => setOpen(true)} task={task} />
          </List>
        ))
      ) : (
        <h3>No tasks for today!</h3>
      )}
    </Box>
  );
}
