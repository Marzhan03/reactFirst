import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logoImage from '../../assets/images/logo.png';
import dropdown from '../../assets/images/dropdown.png';
import styles from '../../assets/css/main.module.css';
import mainNavbarStyles from '../../assets/css/mainnavbar.module.css';
import styler from '../../assets/css/loginnavbar.module.css';
import Row from 'react-bootstrap/esm/Row';
import { Col, Button, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MainNavbar = () => {
    const navigate = useNavigate();

    const handleLogin = async () => {
        navigate('/login');
    };

    return (
        // <Row>

        <Row >
            <div className='d-flex  mt-3 mb-5 d-md-none '>
                <div className={`d-flex justify-content-start `}>
                    <Dropdown>
                        <Dropdown.Toggle className={mainNavbarStyles.transparentDropdownToggle} >
                            <Image src={dropdown} alt="Dropdown Icon" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{backgroundColor: '#EAF8FC'}}>
                            {/* Здесь поместите ваши дополнительные ссылки */}
                            <Dropdown.Item href="#home">Главная </Dropdown.Item>
                            <Dropdown.Item href="#home">FAQ</Dropdown.Item>
                            <Dropdown.Item href="#home">Новости</Dropdown.Item>
                            <Dropdown.Item href="#home">Семье</Dropdown.Item>
                            <Dropdown.Item href="#home">Школам</Dropdown.Item>
                            <Dropdown.Item href="#home">Бизнес</Dropdown.Item>
                            <Dropdown.Item>
                                <Button variant="primary">Войти</Button>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='d-flex justify-content-center align-items-center  me-5'>
                    <Image src={logoImage} style={{ width: '50px', height: '50px', marginRight:'10px' }} alt="React Logo" className={styles.logo_png} />
                    <div className={`${styler.logo_title}`}>TANU PRO</div>
                </div>


            </div>
            <div className='d-none d-md-flex'>
                <Col className={`d-flex justify-content-center align-items-center py-3`} lg={6} md={12} sm={12}>
                    <div className='d-flex justify-content-center align-items-center me-5'>
                        <Image src={logoImage} style={{ width: '50px', height: '50px', marginLeft:'-100px' , marginRight:'10px'}} alt="React Logo"  />
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
            </div>
        </Row>
    );
};

export default MainNavbar;