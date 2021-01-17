
const authReducer = (state, action) => {
  switch (action.type) {
    // Global
    case 'login':
      return {
        ...state,
        isAuth: true,
      };
    case 'logout':
      return {
        ...state,
        isAuth: false,
      };
    case 'login_fail':
      return {
        ...state,
        isAuth: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default authReducer;