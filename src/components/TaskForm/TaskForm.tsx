import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.js';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Task as TaskType, PRIORITY } from '../../types/Task';
import { addTask, editTask } from '../../store/actions/index';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

type Props = {
  taskToEdit?: TaskType;
  openModal: boolean;
  onModalClose: (id?: number | undefined, title?: string) => void;
};
export const TaskForm = ({ taskToEdit, openModal, onModalClose }: Props) => {
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(addTask({ title, priority }));
    setTitle('');
    onModalClose();
  };

  useEffect(() => {
    if (title.trim().length === 0 || priority.trim().length === 0) setIsButtonDisabled(true);
    else setIsButtonDisabled(false);
  }, [title, priority]);

  const handleSave = () => {
    if (taskToEdit && taskToEdit.id && taskToEdit.title) {
      dispatch(editTask({ id: taskToEdit.id, title: title, completed: taskToEdit.completed, priority: priority }));
    }
    setTitle('');
    onModalClose();
  };

  const handleSubmit = () => {
    return taskToEdit ? handleSave() : handleCreate();
  };

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setPriority(taskToEdit.priority);
    }
  }, [taskToEdit]);

  return (
    <Dialog open={openModal} onClose={() => onModalClose()} fullWidth maxWidth="sm">
      <DialogTitle>{taskToEdit ? 'Edit task' : 'Create new task'}</DialogTitle>
      <Box sx={{ m: 1 }} />
      <DialogContent>
        <TextField id="task-title" label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
        <Box sx={{ m: 3 }} />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Priority</InputLabel>
          <Select
            labelId="select-priority"
            id="select-priority"
            value={priority}
            label="Priority"
            onChange={(e) => setPriority(e.target.value as string)}
          >
            <MenuItem value={PRIORITY.LOW}>{PRIORITY.LOW}</MenuItem>
            <MenuItem value={PRIORITY.MEDIUM}>{PRIORITY.MEDIUM}</MenuItem>
            <MenuItem value={PRIORITY.HIGH}>{PRIORITY.HIGH}</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ m: 3 }} />
        <DialogActions>
          <Button variant="outlined" onClick={(e) => onModalClose()}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit} disabled={isButtonDisabled}>
            {taskToEdit ? 'Save' : 'Create'}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

TaskForm.propTypes = {
  taskToEdit: PropTypes.object,
  openModal: PropTypes.bool,
  onModalClose: PropTypes.func,
};
