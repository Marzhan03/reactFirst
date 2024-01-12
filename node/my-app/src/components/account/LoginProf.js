import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoginNavbar from './LoginNavbar';
import style from '../../assets/css/loginStudent.module.css';
import loginImage from '../../assets/images/login.png'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../actions/loginActions.js'
import { useNavigate } from 'react-router-dom';
import '../../assets/css/loginStudent.css';


const LoginProf = () => {
    const [login, setLogin] = useState(''); // Состояние для хранения логина
    const [password, setPassword] = useState(''); // Состояние для хранения пароля

    //   const dispatch = useDispatch();
    //   const loggedIn = useSelector(state => state.loginRed.loggedIn);
    //   const tokens = useSelector(state => state.loginRed.tokens);

    const navigate = useNavigate();

    // Функция для обработки входа пользователя
    const goToProf = async () => {
        navigate('/login');
    }

    const handleLogin = async () => {
        // dispatch(loginUser(login, password))
        // // console.log(loggedIn)
        // console.log(tokens)
    };

    return (
        <div className={`login-container container-fluid ${style.back}`}>
            <Row className="justify-content-center mx-4">
                <Col md={6} >
                    <Row>
                        <Col md={12}>
                            <div><LoginNavbar /></div>
                        </Col>
                        <Col className={`p-4 ${style.header}`} md={12}>
                            <Row className=''>
                                <Col sm={12} md={6}>
                                    <Row>
                                        <div className=" d-flex flex-column ">
                                            <div className={`d-flex flex-column mt-5 ${style.loginText}`}>
                                                <span className="mb-1">С возвращением, </span>
                                                <span className={`mb-3 ${style.loginStudent}`}>Профориентатор!</span>
                                                <span className={`mb-3 fw-bold ${style.login} `} >Вход</span>
                                            </div>
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
                                            >Войти</Button>
                                        </div>
                                    </Row>
                                </Col>
                                <Col sm={12} md={6} className={style.backgroundImage}>
                                    <Row>

                                        <div className={`d-flex flex-column ${style.loginContent}`}>
                                            <span className={`my-4 ${style.headerTitle}`}>Вы не профориентатор?</span>
                                            <span className={`${style.headerSubTitle}`}>Если вы являетесь студентом, учащимся или обычным человеком, то перейдите по кнопке ниже </span>

                                        </div>

                                        <div className={`d-flex ${style.logContent}`}>
                                            <Col md={8}>
                                                <Image className={` ${style.profImage}`} src={loginImage} />
                                            </Col>
                                            <Col md={4}>
                                                <Button onClick={goToProf}
                                                    className={`rounded-pill mt-4 btn-light ${style.profButton}`}
                                                ><FontAwesomeIcon className="me-2" icon={faAngleLeft} />Студенту</Button>
                                            </Col>

                                        </div>


                                    </Row>
                                </Col>


                            </Row>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default LoginProf;
