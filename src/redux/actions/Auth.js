import Axios from 'axios';
import qs from 'qs';
import {ToastAndroid} from 'react-native';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';

//Login

const AuthLoginRequest = () => {
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

export const AuthLogin = (fields, navigation) => {
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
        const login = () => {
          messaging()
            .getToken()
            .then((token) => {
              Axios({
                method: 'PATCH',
                url: `${API_URL}/profile/token`,
                data: qs.stringify({
                  device: token,
                  email: fields.email,
                }),
              })
                .then((result) => {
                  const data = res.data;
                  dispatch(AuthLoginSuccess(data.data));
                  navigation.push('Dashboard');
                })
                .catch((err) => {
                  console.log(err);
                });
            });
        };

        login();
      })
      .catch((err) => {
        const message = err.message;
        dispatch(AuthLoginError(message));
      });
  };
};

export const AuthRegister = (fields, navigation) => {
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
        navigation.push('Pin');
      })
      .catch((err) => {
        const message = err.message;
        dispatch(AuthRegisterError(message));
      });
  };
};

export const AuthRegisterPin = (fields, navigation) => {
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
        const data = res.data;
        AuthRegisterPinSuccess(data);
        navigation.push('Success');
      })
      .catch((err) => {
        ToastAndroid.show('Create Pin Error', ToastAndroid.SHORT);
      });
  };
};

export const LogoutDevice = (fields) => {
  return (dispatch) => {
    Axios({
      method: 'PATCH',
      data: qs.stringify({
        device_token: '',
      }),
      headers: {
        auth: fields.token,
      },
      url: `${API_URL}/profile`,
    })
      .then((res) => {
        console.log('Success logout');
      })
      .catch((err) => {
        console.log(err.message);
        console.log(fields.token);
      });
  };
};
