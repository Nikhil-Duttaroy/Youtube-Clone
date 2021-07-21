import { HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SELECTED_VIDEO_FAILURE } from "../ActionTypes"
import request from './../../api';
import { HOME_VIDEOS_FAILURE, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from './../ActionTypes';

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 10,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAILURE,
      payload: error.message,
    });
  }
};



export const getVideosByCategory = (category) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 10,
        pageToken: getState().homeVideos.nextPageToken,
        q:category,
        type:"video"
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: category,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAILURE,
      payload: error.message,
    });
  }
};



export const getVideoById=(id) => async(dispatch) => {

  try {
      dispatch({
        type:SELECTED_VIDEO_REQUEST
      });

     const {data} = await request('/videos',{
        params:{
          part:'statistics,snippet',
          id:id
        }
      })

      dispatch({
        type: SELECTED_VIDEO_SUCCESS,
        payload:data.items[0]
      });



  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SELECTED_VIDEO_FAILURE,
      payload:error.message
    });


  }
}