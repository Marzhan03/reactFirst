// actions.js
import axios from 'axios';

export const login = (login, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/token/",
        { 
          username: login,
          password: password
        }
      );

      dispatch(setTokens(response.data.access, response.data.refresh));

      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
    } catch (error) {
      console.error('Ошибка входа:', error);
      // Обработка ошибок аутентификации, если это необходимо
    } finally {
      // Дополнительные действия, если необходимо
    }
  };
};

export const setTokens = (accessToken, refreshToken) => ({
  type: 'SET_TOKENS',
  accessToken,
  refreshToken,
});
