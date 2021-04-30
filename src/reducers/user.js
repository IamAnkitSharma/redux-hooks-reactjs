const intialState = {
  name: "",
  isLoading: false,
};
const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_RANDOM_USER":
      return {
        ...state,
        name: action.payload,
        isLoading: false,
      };
    default:
      return {};
  }
};

export default userReducer;
