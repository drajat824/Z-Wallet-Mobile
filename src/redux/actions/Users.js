import Axios from 'axios';
import qs from 'qs';
import {ToastAndroid} from 'react-native';
import {API_URL} from '@env';

const ProfileRequest = () => {
  return {
    type: 'ProfileRequest',
  };
};

const PROFILEERROR = (error) => {
  return {
    type: 'PROFILEERROR',
    payload: error,
  };
};

const GETPROFILE = (data) => {
  return {
    type: 'GETPROFILE',
    payload: data,
  };
};

const GETPROFILETRANSFER = (data) => {
  return {
    type: 'GETPROFILETRANSFER',
    payload: data,
  };
};

const SETPHOTO = (data) => {
  return {
    type: 'SETPHOTO',
    payload: data,
  };
};

const GETPROFILENAME = (data) => {
  return {
    type: 'GETPROFILENAME',
    payload: data,
  };
};

const PATCHPROFILE = (data) => {
  return {
    type: 'PATCHPROFILE',
    payload: data,
  };
};

export const ProfileLogout = () => {
  return {
    type: 'PROFILELOGOUT',
  };
};

export const GetProfile = (fields) => {
  return (dispatch) => {
    return Axios({
      method: 'GET',
      url: `${API_URL}/profile/detail`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const myData = res.data;
        dispatch(GETPROFILE(myData));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(PROFILEERROR(message));
      });
  };
};

export const GetProfileName = (fields) => {
  return (dispatch) => {
    dispatch(ProfileRequest());

    return Axios({
      method: 'GET',
      url: `${API_URL}/profile/search?name=${fields.name}`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const dataName = res.data.data;
        dispatch(GETPROFILENAME(dataName));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(GETPROFILENAME(""));
      });
  };
};

export const GetProfileId = (fields) => {
  return (dispatch) => {
    dispatch(ProfileRequest());

    return Axios({
      method: 'GET',
      url: `${API_URL}/profile/id/${fields.id}`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const myData = res.data;
        dispatch(GETPROFILE(myData));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(PROFILEERROR(message));
      });
  };
};

export const GetProfileTransfer = (fields) => {
  return (dispatch) => {
    dispatch(ProfileRequest());

    return Axios({
      method: 'GET',
      url: `${API_URL}/profile/id/${fields.id}`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const dataTr = res.data;
        dispatch(GETPROFILETRANSFER(dataTr));
      })
      .catch((err) => {
        dispatch(PROFILEERROR(err.message));
      });
  };
};

export const PatchProfile = (fields) => {
  return (dispatch) => {
    dispatch(ProfileRequest());

    return Axios({
      method: 'PATCH',
      url: `${API_URL}/profile`,
      data: qs.stringify({
        password: fields.password,
        pin: fields.pin,
        device_token: fields.device_token
      }),
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const dataChange = res.data;
        dispatch(PATCHPROFILE(dataChange));
        ToastAndroid.show('Change Success', ToastAndroid.SHORT);
      })
      .catch((err) => {
        const message = err.message;
        dispatch(PROFILEERROR(message));
        ToastAndroid.show('Change Error', ToastAndroid.SHORT);
      });
  };
};

export const setImage = (fields) => {
  return (dispatch) => {
    dispatch(ProfileRequest());

    Axios.patch(`${API_URL}/upload`, fields.data, {
      headers: {
        'content-type': 'multipart/form-data',
        auth: fields.token,
      },
    })
      .then((res) => {
        const dataImage = res.data;
        dispatch(SETPHOTO(dataImage));
        ToastAndroid.show('Success', ToastAndroid.SHORT);
      })
      .catch((err) => {
        dispatch(PROFILEERROR(err.message));
        ToastAndroid.show('Failed', ToastAndroid.SHORT);
        console.log(err);
      });
  };
};

export const cekPin = (fields) => {
  return (dispatch) => {
    return Axios({
      method: 'GET',
      url: `${API_URL}/profile/cekpin`,
      data: qs.stringify({
        id: fields.id,
        pin: fields.pin,
      }),
      headers: {
        auth: fields.token,
      },
    })
      .then((result) => {
        const data = result.data.data;
        alert('p');
      })
      .catch((err) => {
        dispatch(PROFILEERROR(err.message));
        console.log(fields.token);
      });
  };
};

export const LogoutDevice = (fields) => {
  return (dispatch) => { 
  Axios({
    method: 'PATCH',
    data: qs.stringify({
      device_token: ""
    }),
    headers: {
      auth: fields.token,
    },
    url: `${API_URL}/profile`,
  })
    .then((res) => {
      console.log('Success logout')
    })
    .catch((err) => {
      console.log(err.message)
    });
  }}