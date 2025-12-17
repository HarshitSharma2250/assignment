import { ADD_TASK } from "./ActionType"











export const AddTask = (task) => {
    return {
      type: ADD_TASK,
      payload: task,
    };
  };



