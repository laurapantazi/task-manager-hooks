import * as actions from '../constants/ActionTypes';
import { Task } from '../../types/Task';

const initialState: Task[] = [];

const tasks = (state: Task[] = initialState, action: actions.ActionTypes) => {
  switch (action.type) {
    case actions.GET_TASKS:
      return state;
    case actions.SET_TASKS:
      return action.tasks;
    case actions.ADD_TASK:
      return [...state, action.task];
    case actions.TOGGLE_TASK: {
      const { id, completed } = action.payload;
      return state.map((task) => (task.id === id ? { ...task, completed: completed } : task));
    }
    case actions.DELETE_TASK:
      return state.filter((task) => task.id !== action.id);
    case actions.EDIT_TASK: {
      const {id, title, priority, completed} = action.task
      return state.map((task) =>
        task.id === id
          ? {
              ...task,
              id,
              title,
              priority,
              completed,
            }
          : task
      );
    }
    default:
      return state;
  }
};

export default tasks;
