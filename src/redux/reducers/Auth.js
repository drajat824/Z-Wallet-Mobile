const initialState = {
  data: [],
  loading: false,
};

const Auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        error: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload,
      };

    case 'REGISTER_PIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload,
      };

    case 'REGISTER_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        error: action,
      };
    case 'LOGOUT':
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

export default Auth;
