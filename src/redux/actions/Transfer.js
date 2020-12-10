import Axios from 'axios';
import qs from 'qs';
import {API_URL} from '@env';
import {ToastAndroid} from 'react-native';

const TRANSFERREQUEST = () => {
  return {
    type: 'TRANSFERREQUEST',
  };
};

const TRANSFERERROR = (error) => {
  return {
    type: 'TRANSFERERROR',
    payload: error,
  };
};

const GETTRANSFER = (data) => {
  return {
    type: 'GETTRANSFER',
    payload: data,
  };
};

const POSTTRANSFER = (data) => {
  return {
    type: 'POSTTRANSFER',
    payload: data,
  };
};

export const TransferLogout = () => {
  return {
    type: 'TRANSFERLOGOUT',
  };
};

export const GetTransfer = (fields) => {
  return (dispatch) => {
    dispatch(TRANSFERREQUEST());
    return Axios({
      method: 'GET',
      url: `${API_URL}/transfer`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const getTr = res.data.data;
        dispatch(GETTRANSFER(getTr));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TRANSFERERROR(message));
      });
  };
};

export const PostTransfer = (fields) => {
  return (dispatch) => {
    dispatch(TRANSFERREQUEST());
    return Axios({
      method: 'POST',
      data: qs.stringify({
        id_receiver: fields.id_receiver,
        amount: fields.amount,
        notes: fields.notes,
      }),
      url: `${API_URL}/transfer`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const data = res.data.data;
        dispatch(POSTTRANSFER(data));
        ToastAndroid.show('Success', ToastAndroid.SHORT);
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TRANSFERERROR(message));
        ToastAndroid.show('Failed', ToastAndroid.SHORT);
      });
  };
};
