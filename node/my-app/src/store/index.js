// store/index.js
import { createStore } from 'redux';
import rootReducer from '../reducers'; // Подключение корневого редюсера

const store = createStore(rootReducer); // Создание хранилища с корневым редюсером

export default store;
