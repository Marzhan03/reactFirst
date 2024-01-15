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
import { Puff } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { createRoot } from 'react-dom/client'
import { login as performLogin } from '../../actions/actions';
import '../../assets/css/loginStudent.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const LoginStud = () => {
    const [login, setLogin] = useState(''); // Состояние для хранения логина
    const [password, setPassword] = useState(''); // Состояние для хранения пароля
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    //   const loggedIn = useSelector(state => state.loginRed.loggedIn);
    //   const tokens = useSelector(state => state.loginRed.tokens);

    const navigate = useNavigate();

    // Функция для обработки входа пользователя
    const goToProf = async () => {
        navigate('/login_prof');
    }


    const handleLogin = async () => {

        try {
            await dispatch(performLogin(login, password));
            // Дополнительные действия после успешного входа
        } catch (error) {
            console.error('Ошибка входа:', error);
            // Обработка ошибок аутентификации
        }


    };

    return (
        <div className={`login-container container-fluid ${style.back}`}>
            <Row className="justify-content-center mx-4">
                <Col md={6} >
                    <Row>
                        <Col md={12}>
                            <div><LoginNavbar /></div>
                        </Col>
                            <motion.div
                            initial={{ opacity: 1, translateX: -60 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            exit={{ opacity: 0, translateX: -50 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            key="LoginStud"
                            style={{ opacity: 1, translateX: 0 }} 
                            >
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
                                                    <Image style={{ width: '100%', height: '100%' }} src={qyzImage} />
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
                            </motion.div>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default LoginStud;
