// store/reducers/index.js
import { combineReducers } from 'redux';
import loginReducer from './loginReducer'; // Импорт вашего редюсера авторизации

const rootReducer = combineReducers({
  loginRed: loginReducer, // Добавление редюсера авторизации в корневой редюсер
  // Другие редюсеры, если они есть
});

export default rootReducer;
