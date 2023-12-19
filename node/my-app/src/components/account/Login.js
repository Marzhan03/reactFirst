import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


  


const Login = () => {

  const [tokens, setTokens] = useState({}); // Состояние для хранения токенов
  const [login, setLogin] = useState(''); // Состояние для хранения логина
  const [password, setPassword] = useState(''); // Состояние для хранения пароля

  // Функция для обработки входа пользователя
  const handleLogin = async () => {
    try {
      // Здесь можно отправить запрос на сервер для входа пользователя
      const response = await axios.post('http://127.0.0.1:8000/api/token/', {
        username: login,
        password: password
      });
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      // Сохраняем токены в состоянии
      setTokens({
        access: response.data.access,
        refresh: response.data.refresh
      });

      // Теперь у вас есть доступ к токенам access и refresh для использования в запросах
      // Например, для отправки токена access в заголовке Authorization
    //   axios.get('http://127.0.0.1:8000/api/token/verify/', {
    //     headers: {
    //       'Authorization': `Bearer ${response.data.access}`
    //     }
    //   });
    
    } catch (error) {
      console.error('Ошибка входа:', error);
    }
  };

  return (
    <div>
      <Row>
        <Col md={12}>
          <input
            className='mt-5 mb-2'
            type='text'
            placeholder='Логин пользователя'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </Col>
        <Col md={12}>
          <input
            type='text'
            className='mb-2'
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
        <Col md={12}>
          <button type='button' onClick={handleLogin}>
            Войти
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
