const initialState = {
  data: [],
  loading: false,
};

const Transfer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TRANSFERREQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GETTRANSFER':
      return {
        ...state,
        loading: false,
        isLogin: true,
        getTr: action.payload,
      };
    case 'POSTTRANSFER':
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload,
      };
    case 'TRANSFERERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        error: action.payload,
      };

    case 'TRANSFERLOGOUT':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        _persist: {
          rehydrated: true,
          version: -1,
        },
      };
    default:
      return state;
  }
};
export default Transfer;
