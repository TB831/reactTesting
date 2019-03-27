import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';

const rootReducers = combineReducers({
  comments: commentsReducer
})

export default rootReducers;