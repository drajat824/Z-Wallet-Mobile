const initialState = {
  data: [],
  loading: false,
};

const Users = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ProfileRequest':
      return {
        ...state,
        loading: true,
      };
    case 'PROFILEERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        error: action.payload,
      };

    case 'PROFILELOGOUT':
      return {
        ...state,
        loading: false,
        isLogin: false,
        myData: '',
        _persist: {
          rehydrated: true,
          version: -1,
        },
      };
    case 'GETPROFILE':
      return {
        ...state,
        loading: false,
        isLogin: true,
        myData: action.payload,
      };
    case 'GETPROFILETRANSFER':
      return {
        ...state,
        loading: false,
        isLogin: true,
        dataTr: action.payload,
      };
    case 'SETPHOTO':
      return {
        ...state,
        loading: false,
        isLogin: true,
        dataImage: action.payload,
      };
    case 'PATCHPROFILE':
      return {
        ...state,
        loading: false,
        isLogin: true,
        dataChange: action.payload,
      };
    case 'GETPROFILENAME':
      return {
        ...state,
        loading: false,
        isLogin: true,
        dataName: action.payload,
      };
    default:
      return state;
  }
};
export default Users;
