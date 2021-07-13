import { combineReducers } from "redux";
import { authReducer } from './reducers/auth.reducer';

const RootReducer = combineReducers({
  auth: authReducer,
});

export default RootReducer
