const initialState = {
  user: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/setUser":
      return {
        ...state,
        user: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
}
