import { combineReducers } from "redux";
import { authReducer } from './auth/auth.reducer';
import {
  selectedVideoReducer,
  videosReducer,
  relatedVideoReducer,
  searchedVideosReducer,
  subscriptionsChannelReducer,
  channelVideosReducer,
} from "./videos/videos.reducer";
import {
  channelDetailsReducer,
} from "./channel/channel.reducers";
import { commentsListReducer } from './comments/comments.reducer';

const RootReducer = combineReducers({
  auth: authReducer,
  homeVideos: videosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentsList: commentsListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
  channelVideos:channelVideosReducer
});

export default RootReducer
