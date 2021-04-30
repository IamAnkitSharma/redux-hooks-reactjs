import axios from "axios";

export const getRandomUser = () => {
  return (dispatch) => {
    dispatch({
      type:"LOADING"
    })
    axios.get("https://randomuser.me/api/").then((user) => {
      dispatch({
        type: "GET_RANDOM_USER",
        payload: JSON.stringify(user),
      });
    });
  };
};
