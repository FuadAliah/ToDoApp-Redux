import { ADD_TASK, REMOVE_TASK } from "../Types/Types";

export const ADD_TASK_INFO = (name, date) => {
  const action = {
    type: ADD_TASK,
    name,
    date,
  };
  return action;
};

export const REMOVE_TASK_INFO = (id) => {
  const action = {
    type: REMOVE_TASK,
    id,
  };
  return action;
};