import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logoImage from '../../assets/images/logo.png';
import styles from '../../assets/css/main.module.css';
import mainNavbarStyles from '../../assets/css/mainnavbar.module.css';
import styler from '../../assets/css/loginnavbar.module.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';

const MainNavbar = () => {
    const navigate = useNavigate();

    const handleLogin = async () => {
        navigate('/login');
    };

    return (
        // <Row>
        <Row className={``}>
            <Col className={`d-flex justify-content-center align-items-center py-3`} lg={6} md={12} sm={12}>
                <div className='d-flex justify-content-center align-items-center me-5'>
                    <Image src={logoImage} style={{ width: '50px', height: '50px' }} alt="React Logo" className={styles.logo_png} />
                    <div className={`${styler.logo_title}`}>TANU PRO</div>
                </div>
                <Link className={mainNavbarStyles.navLeftLink} to="/">Главная</Link>
                <Link className={mainNavbarStyles.navLeftLink} to="/">FAQ</Link>
                <Link className={mainNavbarStyles.navLeftLink} to="/">Новости</Link>
            </Col>
            <Col className='d-flex justify-content-center align-items-center py-3' lg={6} md={12} sm={12}>
                <div className={`d-flex justify-content-end ${styles.navRight}`}>
                    <Link className={mainNavbarStyles.navLink} to="/">Семье</Link>
                    <Link className={mainNavbarStyles.navLink} to="/">Школам</Link>
                    <Link className={mainNavbarStyles.navLink} to="/">Бизнес</Link>
                    <Button onClick={handleLogin} className={`${styles.loginButton} rounded-pill px-5`}>Войти</Button>
                </div>
            </Col>
        </Row>
    );
};

export default MainNavbar;