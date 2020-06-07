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
  
  location : {
    status: "init",
    currentLoc: null,
    polyLine: [],
  }
  
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
      const line = state.location.polyLine
      line.push({latitude: action.data.latitude, longitude: action.data.longitude})
      
      // console.log(line)
      // console.log(state.polyLine.push({latitude: action.data.latitude, longitude: action.data.longitude}))
      // console.log(line)
      return {
        ...state,
        location : {
          currentLoc: action.data,
          polyLine: line
        }
      };
    default:
      return state;
  }
};
export const postMyLoactionRequest = (data) => (dispatch) => {
  // dispatch(postMyLocation());
  // const config = {
  //   headers: { 'Content-type': 'application/json', token: data.token },
  // }
  dispatch(saveMyLoaction(data));

  // Axios.post(`${API_HOST}/location`, data, config)
  //   .then((res) => {
  //     dispatch(postMyLocationSuccess());
  //   })
  //   .catch((e) => {
  //     dispatch(postMyLocationFailure());
  //   });
};

