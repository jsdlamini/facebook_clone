export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        //The following code means : Return whatever( ...state ) the state of the state is, BUT in addition update the user variable to action.user
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
