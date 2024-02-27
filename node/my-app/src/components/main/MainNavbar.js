import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logoImage from '../../assets/images/logo.png';
import styles from '../../assets/css/main.module.css'; 
import style from '../../assets/css/mainnavbar.module.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const MainNavbar = () => {
    return (
        <Row>
            <div className={styles.navbar}>
            <Col md={6}>
                    <div>
                    <Row>
                        <Col md={4}>
                        <div className={styles.navLeft}>
                            <div><Image src={logoImage} alt="React Logo" className={styles.logo_png} /></div>
                            <div className={styles.logo_title}>TANU PRO</div>
                        </div>
                        </Col>
                    
                        <Col className='d-flex justify-content-center align-items-center' md={8}>
                            <div  className={`d-flex justify-content-end ${styles.navBarLink}`} >
                                <Link className={style.navLink} to="/">Главная</Link>
                                <Link className={style.navLink} to="/">FAQ</Link>
                                <Link className={style.navLink} to="/">Новости</Link>
                            </div>
                        </Col>
                    </Row>
                    </div>
            </Col>
            <Col className='d-flex justify-content-center align-items-center' md={6}>
            <div className={`d-flex justify-content-end ${styles.navRight}`}>
                <Link className={style.navLink} to="/">Семье</Link>
                <Link className={style.navLink} to="/">Школам</Link>
                <Link className={style.navLink} to="/">Бизнес</Link>
                <Button className={`${style.loginButton}`} >Войти</Button>
            </div>
            </Col>
        </div>
        </Row>
    );
};

export default MainNavbar;