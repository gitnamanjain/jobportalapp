import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";
import { runLogoutTimer, saveTokenInLocalStorage } from "./reducer";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (currentUser) => {
  return {
    type: LOGIN_SUCCESS,
    payload: currentUser,
  };
};

const loginFailure = (errorMsg) => {
  return {
    type: LOGIN_FAILURE,
    payload: errorMsg,
  };
};

export const logout = () => {
  localStorage.removeItem('persist');
  return {
    type: LOGOUT,
  };
};

export const makeLoginRequest = ({ email, password }) => (dispatch) => {
  dispatch(loginRequest())
  const expireIn = 3600;
  axios
    .post("http://localhost:9002/login", { "email": email, "password": password })
    .then((res) => {
      console.log(res.data)
      if (res.data) {
        dispatch(loginSuccess(email));
      }
      else {
        dispatch(loginFailure("Invalid Credentials"))
      }
      runLogoutTimer(dispatch, (expireIn * 1000));
      // dispatch(authenticateUser(email, password, res.data.users));
    })
    .catch((err) => dispatch(loginFailure("Somthing went wrong")));
};

const authenticateUser = (email, password, usersData) => (dispatch) => {
  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].email === email && usersData[i].password === password) {
      dispatch(loginSuccess(usersData[i]));
      return;
    } else {
      if (usersData[i].email === email && usersData[i].password !== password) {
        alert("wrong password");
        dispatch(loginFailure("Wrong password"));
        return;
      }
    }
  }

  alert("User Does Not Exist");
  dispatch(loginFailure("User Does Not Exist"));
};


