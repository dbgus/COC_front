import Axios from "axios";
import { AsyncStorage } from "react-native";

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAULURE";

export const login = () => ({ type: LOGIN });
export const loginSuccess = (token) => ({ type: LOGIN_SUCCESS, token });
export const loginFailure = () => ({ type: LOGIN_FAILURE });

const initialState = {
  status: "init",
  tokne: null,
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
    default:
      return state;
  }
};

export function loginRequest(accountId, password) {
  return (dispatch) => {
    dispatch(login());
    Axios.post("http://61.97.187.57:3000/user/login", {
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
            await AsyncStorage.removeItem('token')
          };
          removeToken();
          dispatch(login())
    }
}
export function AutoLoginRequest(token) {
  return (dispatch) => {
    dispatch(loginSuccess(token));
  };
}
