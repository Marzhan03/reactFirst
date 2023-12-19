import axios from 'axios';

// Экшен-константа для успешного входа
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// Экшен для запроса на сервер для входа пользователя
export const loginUser = (login, password) => {
  return async (dispatch) => {
    try {
      const data = new FormData();
      data.append('username', login);
      data.append('password', password);

      const response = await axios.post('https://fastapi-production-fffa.up.railway.app/auth/users/tokens', data);

      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);

      // Отправка типа экшена и данных в редюсер
      dispatch({ type: LOGIN_SUCCESS, payload: access_token });
    } catch (error) {
      // Обработка ошибок, если нужно
      console.error('Ошибка входа:', error);
    }
  };
};
