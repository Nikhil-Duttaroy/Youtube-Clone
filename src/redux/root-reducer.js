import { combineReducers } from "redux";
import { authReducer } from './auth/auth.reducer';
import { videosReducer } from './videos/videos.reducer';

const RootReducer = combineReducers({
  auth: authReducer,
  homeVideos:videosReducer
});

export default RootReducer
