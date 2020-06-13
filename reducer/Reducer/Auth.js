import Axios from "axios";
import { AsyncStorage } from "react-native";
import { API_HOST } from "react-native-dotenv";
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAULURE";
const SAVE_PUSH_TOKEN = "SAVE_PUSH_TOKEN";

export const login = () => ({ type: LOGIN });
export const loginSuccess = (token) => ({ type: LOGIN_SUCCESS, token });
export const loginFailure = () => ({ type: LOGIN_FAILURE });
export const savePushToken = (token) => ({ type: SAVE_PUSH_TOKEN, token });

const initialState = {
  status: "init",
  token: null,
  pushToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        status: "loading",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        status: "success",
        token: action.token,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        status: "failue",
      };
    case "SAVE_PUSH_TOKEN":
      return {
        ...state,
        pushToken: action.token,
      };
    default:
      return state;
  }
};

export function loginRequest(accountId, password) {
  return (dispatch) => {
    dispatch(login());
    Axios.post(`${API_HOST}/user/login`, {
      accountId,
      password,
    }).then((res) => {
      dispatch(loginSuccess(res.data.token));
      const saveToken = async (token) => {
        await AsyncStorage.setItem("token", token);
      };
      saveToken(res.data.token);
    });
  };
}
export function logoutRequest() {
  return (dispatch) => {
    const removeToken = async () => {
      await AsyncStorage.removeItem("token");
    };
    removeToken();
    dispatch(login());
  };
}
export function AutoLoginRequest(token) {
  return (dispatch) => {
    dispatch(loginSuccess(token));
  };
}

export function savePushTokenRequest(token) {
  return (dispatch) => {
    const saveToken = async (token) => {
      await AsyncStorage.setItem("pushToken", token);
    };
    saveToken(token);
  };
}
