const initialState = {
  getTrHr: [],
  getTr: [],
  loading: false,
};

const Transfer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TRANSFERREQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GETTRANSFERREQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GETTRANSFER':
      return {
        ...state,
        loading: false,
        getTr: action.payload,
      };
    case 'GETTRANSFERWEEK':
      return {
        ...state,
        loading: false,
        getTrWeek: action.payload,
      };
    case 'GETTRANSFERMONTH':
      return {
        ...state,
        loading: false,
        getTrMonth: action.payload,
      };
    case 'GETTRANSFERDAY':
      return {
        ...state,
        loading: false,
        getTrDay: action.payload,
      };
    case 'GETTRANSFERHISTORY':
      return {
        ...state,
        loading: false,
        getTrHr: action.payload,
      };
    case 'POSTTRANSFER':
      return {
        ...state,
        loading: false,
        postTr: action.payload,
      };
    case 'TRANSFERERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case 'TRANSFERLOGOUT':
      return {
        getTr: ''
      };
    default:
      return state;
  }
};
export default Transfer;
