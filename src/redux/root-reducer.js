import { combineReducers } from "redux";
import { authReducer } from './auth/auth.reducer';
import { selectedVideoReducer, videosReducer } from './videos/videos.reducer';
import { channelDetailsReducer } from './channel/channel.reducers';
import { commentsListReducer } from './comments/comments.reducer';

const RootReducer = combineReducers({
  auth: authReducer,
  homeVideos: videosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentsList: commentsListReducer,
});

export default RootReducer
