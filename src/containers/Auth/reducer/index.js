import * as types from '../constrants';

const initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return state;
    case types.LOGIN_SUCCESS:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};

export default authReducer;
