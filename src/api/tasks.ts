import axios from 'axios'
import { Task } from '../types/Task'

const TASKS_ENDPOINT = `${process.env.REACT_APP_TASKS_API}/tasks`

export const getTasks = async () => {
  return await axios.get(TASKS_ENDPOINT)
}

export const getTask = async (taskId: string) => {
  return await axios.get(`${TASKS_ENDPOINT}/${taskId}`)
}

export const postTask = async (task: Task) => {
  return await axios.post(`${TASKS_ENDPOINT}`, task)
}

export const deleteTask = async (taskId: number) => {
  return await axios.delete(`${TASKS_ENDPOINT}/${taskId}`)
}

export const editTask = async (task: Task) => {
  return await axios.patch(`${TASKS_ENDPOINT}/${task.id}`, task)
}