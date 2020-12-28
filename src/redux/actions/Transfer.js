import Axios from 'axios';
import qs from 'qs';
import {API_URL} from '@env';

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

const GETTRANSFERWEEK = (data) => {
  return {
    type: 'GETTRANSFERWEEK',
    payload: data,
  };
};

const GETTRANSFERMONTH = (data) => {
  return {
    type: 'GETTRANSFERMONTH',
    payload: data,
  };
};

const GETTRANSFERDAY = (data) => {
  return {
    type: 'GETTRANSFERDAY',
    payload: data,
  };
};

const GETTRANSFERHISTORY = (data) => {
  return {
    type: 'GETTRANSFERHISTORY',
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
    dispatch(TRANSFERREQUEST())
    return Axios({
      method: 'GET',
      url: `http://3.88.220.160:8000/api/v1/transfer?page=${fields.page}&&limit=${fields.limit}`,
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

export const GetTransferWeek = (fields) => {
  return (dispatch) => {
    dispatch(TRANSFERREQUEST())
    return Axios({
      method: 'GET',
      url: `http://3.88.220.160:8000/api/v1/transfer/week`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const getTrWeek = res.data.data;
        dispatch(GETTRANSFERWEEK(getTrWeek));
      })
      .catch((err) => {
        const message = err.message;
        console.log(message);
      });
  };
};

export const GetTransferMonth = (fields) => {
  return (dispatch) => {
    dispatch(TRANSFERREQUEST())
    return Axios({
      method: 'GET',
      url: `http://3.88.220.160:8000/api/v1/transfer/month`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const getTrMonth = res.data.data;
        dispatch(GETTRANSFERMONTH(getTrMonth));
      })
      .catch((err) => {
        const message = err.message;
        console.log(message);
      });
  };
};

export const GetTransferDay = (fields) => {
  return (dispatch) => {
    dispatch(TRANSFERREQUEST())
    return Axios({
      method: 'GET',
      url: `http://3.88.220.160:8000/api/v1/transfer/today`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const getTrDay = res.data.data;
        dispatch(GETTRANSFERDAY(getTrDay));
      })
      .catch((err) => {
        const message = err.message;
        console.log(message);
      });
  };
};

export const GetTransferHistory = (fields) => {
  return (dispatch) => {
    dispatch(TRANSFERREQUEST())
    return Axios({
      method: 'GET',
      url: `http://3.88.220.160:8000/api/v1/transfer`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const getTrHr = res.data.data;
        dispatch(GETTRANSFERHISTORY(getTrHr));
      })
      .catch((err) => {
        const message = err.message;
        console.log(message);
      });
  };
};

export const PostTransfer = (fields, navigation) => {
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
        const data = res.data;
        dispatch(POSTTRANSFER('TrSuccess'));
        navigation.push('TrSuccess');
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TRANSFERERROR(message));
        navigation.push('TrFailed');
      });
  };
};
