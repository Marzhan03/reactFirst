import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/footer.css';
import instaImage from '../assets/images/insta.png'
import telegramImage from '../assets/images/telegram.png'
import vkImage from '../assets/images/vk.png'
import youtubeImage from '../assets/images/youtube.png'

const Footer = () => {
    return (
        <div className="container">
            <Row>
                <Col lg={12}>
                    <Row>
                        <Col lg={6}>
                            <div className='p-25'>
                                <h2 className='text-white'>TANU PRO</h2>
                                <p className='text-white'>Описание или лицензия, что обычно пишут</p>
                                <div className='d-flex align-items-center'>
                                    <a href="#"><img className='img mx-1' src={instaImage} width="50" height="50" /></a>
                                    <a href="#"><img className='img mx-1' src={telegramImage} width="40" height="40" /></a>
                                    <a href="#"><img className='img mx-1' src={vkImage} width="40" height="40" /></a>
                                    <a href="#"><img className='img mx-1' src={youtubeImage} width="40" height="40" /></a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='d-flex justify-content-around text-white py-25'>
                                <div className='d-flex flex-column'>
                                    <p><b>О нас</b></p>
                                    <p>Создатели</p>
                                    <p>Почта</p>
                                    <p>Карьера</p>
                                    <p>Поддержка</p>
                                </div>
                                <div className='d-flex flex-column'>
                                    <p><b>Подробная информация</b></p>
                                    <p>Блог</p>
                                    <p>Лицензия</p>
                                    <p>Правила</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;
