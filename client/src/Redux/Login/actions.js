import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from "./actionTypes";
import { runLogoutTimer } from "./reducer";
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom'

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
    .post("http://localhost:9002/login", { "email": email, "password": password }, { withCredentials: true })
    .then((res) => {
      console.log(res.headers)
      if (res.data) {
        Cookies.set('jayjwt',res.data.token,{ expires: 1 });
        dispatch(loginSuccess(res.data.user)); //fix here
        window.location.href = "/"
      }
      else {
        dispatch(loginFailure("Invalid Credentials"))
      }
      runLogoutTimer(dispatch, (expireIn * 1000));
      // dispatch(authenticateUser(email, password, res.data.users));
    })
    .catch((err) => dispatch(loginFailure("Somthing went wrong")));
};




