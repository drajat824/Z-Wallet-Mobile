const initialState = {
  loading: false,
};

const Auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        loginError: undefined,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload,
        loginError: undefined,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        loginError: action.payload,
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
        data: action.payload,
        registerError: undefined,
      };

    case 'REGISTER_PIN_SUCCESS':
      return {
        ...state,
        loading: false,
        registerPin: action.payload,
      };

    case 'REGISTER_ERROR':
      return {
        ...state,
        loading: false,
        registerError: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: undefined,
        loginError: undefined,
        registerError: undefined,
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
