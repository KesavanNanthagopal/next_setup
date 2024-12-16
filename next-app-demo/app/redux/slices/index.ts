// redux/slices/index.js
import { combineReducers } from 'redux';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  data: userReducer,
});

export default rootReducer;
