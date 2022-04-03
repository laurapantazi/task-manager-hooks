import { takeLatest } from 'redux-saga/effects';
import { handleGetTasks, handleDeleteTask, handleAddTask, handleEditTask, handleToggleTask } from './tasks';
import * as actions from '../constants/ActionTypes';

export function* rootSaga() {
  yield takeLatest(actions.GET_TASKS, handleGetTasks);
  yield takeLatest(actions.DELETE_TASK, handleDeleteTask);
  yield takeLatest(actions.ADD_TASK, handleAddTask);
  yield takeLatest(actions.EDIT_TASK, handleEditTask);
  yield takeLatest(actions.TOGGLE_TASK, handleToggleTask);
}
