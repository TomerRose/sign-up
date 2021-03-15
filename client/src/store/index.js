const initialState = {
  currentUserName: "",
};

const rootReduser = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case "SET_USER_NAME":
        return {
          ...state,
          currentUserName: action.userName,
        };
      default:
        break;
    }
  }
  return state;
};

const setUserName = (userName) => {
  return { type: "SET_USER_NAME", userName };
};

export default rootReduser;
export { setUserName };
