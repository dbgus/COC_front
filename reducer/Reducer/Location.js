import Axios from "axios";
import { API_HOST } from "react-native-dotenv";

const POST_MY_LOCATION = "POST_MY_LOCATION";
const POST_MY_LOCATION_SUCCESS = "POST_MY_LOCATION_SUCCESS";
const POST_MY_LOCATION_FAILURE = "POST_MY_LOCATION_FAILURE";
const SAVE_MY_LOCATION = "SAVE_MY_LOCATION";
export const postMyLocation = () => ({ type: POST_MY_LOCATION });
export const postMyLocationSuccess = () => ({ type: POST_MY_LOCATION_SUCCESS });
export const postMyLocationFailure = () => ({ type: POST_MY_LOCATION_FAILURE });
export const saveMyLoaction = (data) => ({ type: SAVE_MY_LOCATION, data });

const initialState = {
  location: {
    status: "init",
    currentLoc: {
      latitude: 1,
      longitude: 1,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_MY_LOCATION:
      return {
        ...state,
        status: "loading",
      };
    case POST_MY_LOCATION_SUCCESS:
      return {
        ...state,
      };
    case POST_MY_LOCATION_FAILURE:
      return {
        ...state,
      };
    case SAVE_MY_LOCATION:
      return {
        ...state,
        currentLoc: action.data,
      };
    default:
      return state;
  }
};
export const postMyLoactionRequest = (data) => (dispatch) => {
  dispatch(postMyLocation());
  Axios.post(`${API_HOST}/location`, data)
    .then((res) => {
      dispatch(postMyLocationSuccess());
    })
    .catch(() => {
      dispatch(postMyLocationFailure());
    });
};

export const saveMyLoactionReqeust = (data) => (dispatch) => {
  dispatch(saveMyLoaction(data));
};
