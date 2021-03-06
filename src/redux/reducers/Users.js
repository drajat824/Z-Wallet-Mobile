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
        data: [],
        error: action.payload,
      };
    case 'GETPROFILE':
      return {
        ...state,
        loading: false,
        myData: action.payload,
      };
    case 'GETPROFILETRANSFER':
      return {
        ...state,
        loading: false,
        dataTr: action.payload,
      };
    case 'SETPHOTO':
      return {
        ...state,
        loading: false,
        dataImage: action.payload,
      };
    case 'PATCHPROFILE':
      return {
        ...state,
        loading: false,
        dataChange: action.payload,
        error: undefined,
      };
    case 'GETPROFILENAME':
      return {
        ...state,
        loading: false,
        dataName: action.payload,
      };
      case 'PROFILELOGOUT':
      return {
        myData: ''
      };
    default:
      return state;
  }
};
export default Users;
