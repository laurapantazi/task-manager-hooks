import { Task, PRIORITY } from '../../types/Task';

export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_TASKS = 'GET_TASKS';
export const SET_TASKS = 'SET_TASKS';

export type NewTask = {
  title: string;
  priority?: typeof PRIORITY[keyof typeof PRIORITY];
};

export type ActionTypes =
  | { type: typeof GET_TASKS }
  | { type: typeof SET_TASKS; tasks: Task[] }
  | {
      type: typeof ADD_TASK;
      task: Task;
    }
  | { type: typeof TOGGLE_TASK; payload: { id: number; completed: boolean } }
  | {
      type: typeof EDIT_TASK;
      task: Task;
    }
  | { type: typeof DELETE_TASK; id: number };
