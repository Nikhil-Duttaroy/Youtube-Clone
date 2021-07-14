import { combineReducers } from "redux";
import { authReducer } from './auth/auth.reducer';

const RootReducer = combineReducers({
  auth: authReducer,
});

export default RootReducer
