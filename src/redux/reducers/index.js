import {combineReducers} from 'redux';
import Auth from './Auth';
import Topup from './Topup';
import Users from './Users';
import Transfer from './Transfer';

const reducers = combineReducers({
  Auth,
  Topup,
  Users,
  Transfer,
});

export default reducers;
