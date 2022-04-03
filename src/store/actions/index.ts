import * as actions from '../constants/ActionTypes';
import { Task } from '../../types/Task';
type NewTask = {
  title: string;
  priority?: string;
};

export const getTasks = (): actions.ActionTypes => ({
  type: actions.GET_TASKS,
});

export const setTasks = (tasks: Task[]): actions.ActionTypes => ({
  type: actions.SET_TASKS,
  tasks,
});

export const addTask = (task: NewTask): actions.ActionTypes => ({
  type: actions.ADD_TASK,
  task: {
    ...task,
    id: new Date().getTime() + Math.random(),
    priority: task.priority || 'Low',
    completed: false,
  },
});

export const toggleTask = (id: number, completed: boolean): actions.ActionTypes => ({
  type: actions.TOGGLE_TASK,
  payload: {
    id,
    completed,
  },
});

export const deleteTask = (id: number): actions.ActionTypes => ({
  type: actions.DELETE_TASK,
  id,
});

export const editTask = (task: Task): actions.ActionTypes => ({
  type: actions.EDIT_TASK,
  task,
});
