import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logoImage from '../../assets/images/logo.png';
import styles from '../../assets/css/main.module.css';
import style from '../../assets/css/mainnavbar.module.css';
import styler from '../../assets/css/loginnavbar.module.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const MainNavbar = () => {
    return (
        <Row>
            <Col className='d-flex justify-content-center align-items-center' lg={6} md={12} sm={12}>
                    <div className='d-flex justify-content-center align-items-center me-5'>
                        <Image src={logoImage} style={{ width: '50px', height: '50px' }} alt="React Logo" className={styles.logo_png} />
                        <div className={`${styler.logo_title}`}>TANU PRO</div>
                    </div>
                    <Link className={style.navLeftLink} to="/">Главная</Link>
                    <Link className={style.navLeftLink} to="/">FAQ</Link>
                    <Link className={style.navLeftLink} to="/">Новости</Link>
            </Col>
            <Col className='d-flex justify-content-center align-items-center' lg={6} md={12} sm={12}>
                <div className={`d-flex justify-content-end ${styles.navRight}`}>
                    <Link className={style.navLink} to="/">Семье</Link>
                    <Link className={style.navLink} to="/">Школам</Link>
                    <Link className={style.navLink} to="/">Бизнес</Link>
                    <Button className={`${styles.loginButton} rounded-pill px-5`}>Войти</Button>
                </div>
            </Col>
        </Row>
    );
};

export default MainNavbar;