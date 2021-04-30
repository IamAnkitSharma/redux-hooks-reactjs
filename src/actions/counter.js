export const increment = (value = 1) => {
  return {
    type: "INCREMENT",
    payload: value,
  };
};
export const decrement = (value = 1) => {
  return {
    type: "DECREMENT",
    payload: value,
  };
};
