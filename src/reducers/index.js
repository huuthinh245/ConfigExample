import { combineReducers } from 'redux';
import loginReducer from '~/containers/Auth/reducer';

const rootReducer = combineReducers({
  auth: loginReducer,
});

export default rootReducer;
