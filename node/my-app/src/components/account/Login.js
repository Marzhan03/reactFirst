import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoginNavbar from './LoginNavbar';
import style from '../../assets/css/loginStudent.module.css';
import qyzImage from '../../assets/images/qyz.png'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Circles } from 'react-loader-spinner';
import { Puff} from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { login as performLogin } from '../../actions/actions';

const Login = () => {
  const [login, setLogin] = useState(''); // Состояние для хранения логина
  const [password, setPassword] = useState(''); // Состояние для хранения пароля
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
    const dispatch = useDispatch();
//   const loggedIn = useSelector(state => state.loginRed.loggedIn);
//   const tokens = useSelector(state => state.loginRed.tokens);

  // Функция для обработки входа пользователя
  const goToProf = async () => {
    debugger
  }


  const handleLogin = async (login, password) => {
    try {
      await dispatch(performLogin(login, password));
      // Дополнительные действия после успешного входа
    } catch (error) {
      console.error('Ошибка входа:', error);
      // Обработка ошибок аутентификации
    }
  

//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//         const response = await axios.post(
//           "http://localhost:8000/api/token/",
//           { 
//             username: login,
//             password: password
//           }

//         );
//           // Сохранение токенов в localStorage
//         localStorage.setItem('access_token', response.data.access);
//         localStorage.setItem('refresh_token', response.data.refresh);
      
  
//       } catch (error) {
//         console.error('Ошибка входа:', error);

//         if (error.response && error.response.status === 401) {
//           setError('Неправильные учетные данные. Пожалуйста, проверьте имя пользователя и пароль.');
//         } else {
//           setError('Что-то пошло не так. Попробуйте еще раз позже.'); // Общее сообщение об ошибке
//         }
//       } finally {
//         setLoading(false); // Скрыть спиннер после выполнения запроса
//       }
    // axios.post(
    //     "http://localhost:8000/api/token/",
    //     { 
    //         username: login,
    //         password: password
    //     }

    // ).then(async (response) => {
    //     let token = await response.data;

    // })
    
    // // dispatch(loginUser(login, password))
    // // console.log(loggedIn)
    // // console.log(tokens)
  };

  return (
    <div className={`container-fluid ${style.back}`}>
        <Row className="justify-content-center mx-4">
            <Col md={6} >
                <Row>
                <Col md={12}>
                    <div><LoginNavbar/></div>
                </Col>
                <Col className={`p-4 ${style.header}`} md={12}>
                    <Row className=''>
                        <Col sm={12} md={6} className={style.backgroundImage}>
                            <Row>
                              
                                <div className={`d-flex flex-column ${style.headerContent}`}>
                                    <span className={`my-4 ${style.headerTitle}`}>Вы профориентатор?</span>
                                    <span className={`${style.headerSubTitle}`}>Если вы являетесь студентом, учащимся или обычным человеком, то перейдите по кнопке ниже</span>
                                    <div>
                                        <Button onClick={goToProf}
                                            className={`rounded-pill mt-4 btn-light ${style.headerButton}`}
                                            ><FontAwesomeIcon className="me-2" icon={faAngleLeft} />Профориентатору</Button>
                                    </div>
                                </div>
                                <div className={``}>
                                    <Image style={{ width: '100%', height: '100%' }} src={qyzImage}/>
                                </div>
                            
                            </Row>
                        </Col>
                       
                        <div className="col-md-6 col-12 d-flex flex-column ">
                            <div className={`d-flex flex-column mt-5 ${style.loginText}`}>
                                <span className="mb-1">С возвращением, </span> 
                                <span className={`mb-3 ${style.loginStudent}`}>Студент!</span>
                                <span className={`mb-3 fw-bold ${style.login} `} >Вход</span>
                                
                            </div>
                            {error && (
                                <div className={`alert alert-danger ${style.errorContainer}`} role="alert">
                                    {error}
                                </div>
                                )}
                            <div className={`mb-3 ${style.loginDiv}`}>
                                <span>Введите свое имя или почту</span>
                                <input
                                    className='mt-2 form-control'
                                    type='text'
                                    placeholder='Логин пользователя'
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                />
                            </div>
                            <div className={style.loginDiv}>
                                <span>Введите пароль</span>
                                <input
                                    type='text'
                                    className='my-2 form-control'
                                    placeholder='Пароль'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <span className={`${style.forgotPassword}`}>Забыли пароль?</span>
                            </div>
                        
                            <Button 
                                className={`${style.loginButton}`}
                                onClick={handleLogin}
                                disabled={loading} // Отключить кнопку во время загрузки
                            >
                                 {loading ? ( // Если loading === true, отображаем спиннер вместо текста
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Circles
                                     Circlespe="Puff"
                                        color="#00BFFF"
                                        height={20}
                                        width={20}
                                        timeout={3000}
                                    />
                                    </div>
                                ) : (
                                    'Войти'
                                )}
                            </Button>
                        </div>
                    </Row>
                    
                </Col>
                </Row>
            </Col>
        </Row>
    </div>
  );
};

export default Login;
