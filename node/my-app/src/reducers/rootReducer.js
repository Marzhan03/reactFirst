// rootReducer.js
import { combineReducers } from 'redux';
import tokenReducer from './reducers';

const rootReducer = combineReducers({
  tokens: tokenReducer,
  // Другие редукторы, если есть
});

export default rootReducer;
