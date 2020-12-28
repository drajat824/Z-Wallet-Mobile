import Axios from 'axios';
import {API_URL} from '@env';
import jwt_decode from 'jwt-decode';

const TopupRequest = () => {
  return {
    type: 'TOPUP_REQUEST',
  };
};

const TopupSuccess = (data) => {
  return {
    type: 'TOPUP_SUCCESS',
    payload: data,
  };
};

const TopupDeleteSuccess = (data) => {
  return {
    type: 'TOPUP_DELETE_SUCCESS',
    payload: data,
  };
};

const TopupError = (error) => {
  return {
    type: 'TOPUP_ERROR',
    payload: error,
  };
};

export const GetTopup = (fields) => {
  return (dispatch) => {
    dispatch(TopupRequest());
    return Axios({
      method: 'GET',
      url: `${API_URL}/topup`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch(TopupSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TopupError(message));
      });
  };
};

//Admin

export const DeleteTopup = (fields) => {
  return (dispatch) => {
    dispatch(TopupRequest());
    return Axios({
      method: 'delete',
      url: `${API_URL}/topup/${fields.id}`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch(TopupDeleteSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TopupError(message));
      });
  };
};
