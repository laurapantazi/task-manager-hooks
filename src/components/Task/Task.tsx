import { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import { Task as TaskType } from '../../types/Task';
import { deleteTask, toggleTask } from '../../store/actions/index';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { TaskForm } from '../TaskForm/TaskForm';

type Props = {
  task: TaskType;
  onTaskDelete: () => void;
};
const Task = ({ task, onTaskDelete }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleFinishTask = (value: boolean) => {
    if (task.id) dispatch(toggleTask(task.id, value));
  };
  const handleDeleteTask = (id: number) => {
    if (id) {
      dispatch(deleteTask(id));
      onTaskDelete();
    }
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const listItemStyling = {
    color: task.completed ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.8)',
  };

  return (
    <>
      <ListItem
        button
        selected={true}
        secondaryAction={
          <>
            <IconButton edge="end" onClick={(e) => setOpenModal(true)} aria-label="edit" sx={{ m: 1 }}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" onClick={(e) => handleDeleteTask(task.id)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </>
        }
      >
        <ListItemAvatar>
          <Checkbox checked={task.completed} onChange={(e) => handleFinishTask(e.target.checked)} color="success" />
        </ListItemAvatar>
        <ListItemText
          primary={task.title}
          secondary={task.priority}
          primaryTypographyProps={{ style: listItemStyling }}
          secondaryTypographyProps={{ style: listItemStyling }}
        />
      </ListItem>
      <TaskForm taskToEdit={task} openModal={openModal} onModalClose={handleClose} />
    </>
  );
};

export default memo(Task);

Task.propTypes = {
  task: PropTypes.object,
  onTaskDelete: PropTypes.func,
};
