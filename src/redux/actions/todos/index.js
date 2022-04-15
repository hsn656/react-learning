export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

export const removeTask = (payload) => {
  return {
    type: REMOVE_TASK,
    payload,
  };
};
