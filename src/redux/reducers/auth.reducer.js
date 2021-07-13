import {
  LOAD_PROFILE,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../ActionTypes"

const initialState = {
  accessToken: sessionStorage.getItem("ytc-access-token")
    ? sessionStorage.getItem("ytc-access-token")
    : null,
  user: sessionStorage.getItem("ytc-user")
    ? JSON.parse(sessionStorage.getItem("ytc-user"))
    : null,
  loading: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE:
      return {
        ...state,
        user: payload,
      };

    case LOG_OUT:
      return {
        ...state,
        accessToken: null,
        user: null,
      };
    default:
      return state;
  }
};
