import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import qs from 'qs';
import {ToastAndroid} from 'react-native';
import {API_URL} from '@env';

//Login

const AuthLoginRequest = ({navigation}) => {
  return {
    type: 'LOGIN_REQUEST',
  };
};

const AuthLoginSuccess = (data) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: data,
  };
};

const AuthLoginError = (error) => {
  return {
    type: 'LOGIN_ERROR',
    payload: error,
  };
};

//Register

const AuthRegisterRequest = () => {
  return {
    type: 'REGISTER_REQUEST',
  };
};

const AuthRegisterSuccess = (data) => {
  return {
    type: 'REGISTER_SUCCESS',
    payload: data,
  };
};

const AuthRegisterPinSuccess = (data) => {
  return {
    type: 'REGISTER_PIN_SUCCESS',
    payload: data,
  };
};

const AuthRegisterError = (error) => {
  return {
    type: 'REGISTER_ERROR',
    payload: error,
  };
};

//Logout

export const AuthLogout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const AuthLogin = (fields) => {
  return (dispatch) => {
    return Axios({
      method: 'post',
      data: qs.stringify({
        email: fields.email,
        password: fields.password,
      }),
      url: `${API_URL}/login`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch(AuthLoginSuccess(data.data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(AuthLoginError(message));
        ToastAndroid.show('Email/Password Salah', ToastAndroid.SHORT);
        console.log(err)
      });
  };
};

export const AuthRegister = (fields) => {
  return (dispatch) => {
    dispatch(AuthRegisterRequest());
    return Axios({
      method: 'post',
      data: qs.stringify({
        name: fields.name,
        email: fields.email,
        password: fields.password,
      }),
      url: `${API_URL}/register`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch(AuthRegisterSuccess(data.data));
        dispatch(AuthLogout());
      })
      .catch((err) => {
        const message = err.message;
        dispatch(AuthRegisterError(message));
        dispatch(AuthLogout());
        ToastAndroid.show('Register Error', ToastAndroid.SHORT);
      });
  };
};

export const AuthRegisterPin = (fields) => {
  return (dispatch) => {
    dispatch(AuthRegisterRequest());
    return Axios({
      method: 'patch',
      data: qs.stringify({
        email: fields.email,
        pin: fields.pin,
      }),
      url: `${API_URL}/register/pin`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
      .then((res) => {
        ToastAndroid.show('Create Pin Success', ToastAndroid.SHORT);
      })
      .catch((err) => {
        ToastAndroid.show('Create Pin Error', ToastAndroid.SHORT);
      });
  };
};
