import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['Users', 'Transfer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  let persistor = persistStore(store);
  return {store, persistor};
};
