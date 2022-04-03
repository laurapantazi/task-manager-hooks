import { setTasks } from '../actions';
import { call, put } from 'redux-saga/effects';
import * as taskApiRequest from '../../api/tasks';

const getTasks = () => {
  return taskApiRequest.getTasks();
};
export function* handleGetTasks() {
  try {
    const response: ReturnType<typeof getTasks> = yield call(getTasks);
    const { data } = yield response;
    yield put(setTasks(data));
  } catch (e) {
    console.log('error saga request ', e);
  }
}
export function* handleDeleteTask(action: any) {
  try {
    yield call(taskApiRequest.deleteTask, action.id);
  } catch (e) {
    console.log('error saga request ', e);
  }
}
export function* handleAddTask(action: any) {
  try {
    yield call(taskApiRequest.postTask, action.task);
  } catch (e) {
    console.log('error saga request ', e);
  }
}
export function* handleEditTask(action: any) {
  try {
    yield call(taskApiRequest.editTask, action.task);
  } catch (e) {
    console.log('error saga request ', e);
  }
}
export function* handleToggleTask(action: any) {
  try {
    yield call(taskApiRequest.editTask, action.payload);
  } catch (e) {
    console.log('error saga request ', e);
  }
}
