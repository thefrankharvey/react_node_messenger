import { combineReducers } from 'redux';
import dogReducer from './dogReducer';
// import user from './user';

export default combineReducers({
  dog_data: dogReducer
  // user_data: user
});
