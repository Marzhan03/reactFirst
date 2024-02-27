import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import avatar from '../../assets/images/avatar.png';
import portfel from '../../assets/images/portfel.png';
import profil from '../../assets/images/prof.png';
import consultation from '../../assets/images/consultation.png';
import style from '../../assets/css/mainHeader.module.css';
import lamp from '../../assets/images/lamp.png';
import intersect from '../../assets/images/Intersect.png';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const Header = () => {
    return (
        <Row>
            <div style={{marginTop: '300px'}} className='row d-md-none'>
                dnfdsj
                <Col className='d-flex justify-content-center align-items-center' xs={12}>
                    <div className={`d-flex justify-content-end ${style.circleContainer}`}>
                        <div className={style.intersectImg}>
                            {/* <Image src={intersect} alt="React Logo" height={200} width={200}></Image> */}
                        </div>
                        <div className={style.headerCircleBack}></div>
                        <div className={`${style.headerCommentOne}`}>
                            <Row>
                                <Col md={4}>
                                    <div className={style.headerCircleCommentOne}>
                                        <Image src={portfel} alt="React Logo" className='mx-1 my-2' height={50} width={60}></Image>
                                    </div>
                                </Col>
                                <Col className='' md={8}>
                                    <span className='mx-2' style={{ color: '#393DA1', fontSize: '36px', fontWeight: 700 }}>600+</span>
                                    <p><span style={{ color: 'black', fontSize: '20px', fontWeight: 500 }}>профессий</span></p>
                                </Col>
                            </Row>
                        </div>
                        <div className={style.headerCommentTwo}>
                            <div className={style.headerCircleCommentTwo}>
                                <Image src={avatar} height={60} width={70} alt="React Logo" className='px-1 py-0'></Image>
                            </div>
                            <span className='mx-5' style={{ color: '#393DA1', fontSize: '36px', fontWeight: 700 }}>150к</span>
                            <p><span style={{ color: 'black', fontSize: '20px', fontWeight: 500 }}>отзывов от людей</span></p>
                        </div >
                    </div>
                </Col>
            </div>
            <div className={`d-none d-md-flex justify-content-end ${style.headerContent}`}>
                <Col xs={10} md={6} className="order-xs-2">
                    <div>
                        <Row>
                            <div className={`d-flex justify-content-start ${style.headerTitle}`}> Пройди тест и узнай свою идеальную профессию!</div>
                            <div className={`d-flex justify-content-start ${style.headerDescription}`}>Мы предоставляем надежный и научно обоснованный тест,
                                который поможет людям лучше понять себя и принять информированные решения о своей карьере.</div>

                            <div>
                                <Button className={`d-flex justify-content-start rounded-pill px-5 py-3 ${style.headerButton}`}>
                                    Записаться
                                </Button>
                            </div>
                        </Row>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center d-none d-md-block' xs={10} md={6}>
                    <div className={`d-flex justify-content-end ${style.circleContainer}`}>
                        <div className={style.intersectImg}>
                            <Image src={intersect} alt="React Logo" height={500} width={400}></Image>
                        </div>
                        <div className={`${style.headerCommentOne}`}>
                            <Row>
                                <Col md={4}>
                                    <div className={style.headerCircleCommentOne}>
                                        <Image src={portfel} alt="React Logo" className='mx-1 my-2' height={50} width={60}></Image>
                                    </div>
                                </Col>
                                <Col className='' md={8}>
                                    <span className='mx-2' style={{ color: '#393DA1', fontSize: '36px', fontWeight: 700 }}>600+</span>
                                    <p><span style={{ color: 'black', fontSize: '20px', fontWeight: 500 }}>профессий</span></p>
                                </Col>
                            </Row>
                        </div>
                        <div className={style.headerCircleBack}></div>
                        <div className={style.headerCommentTwo}>
                            <div className={style.headerCircleCommentTwo}>
                                <Image src={avatar} height={60} width={70} alt="React Logo" className='px-1 py-0'></Image>
                            </div>
                            <span className='mx-5' style={{ color: '#393DA1', fontSize: '36px', fontWeight: 700 }}>150к</span>
                            <p><span style={{ color: 'black', fontSize: '20px', fontWeight: 500 }}>отзывов от людей</span></p>
                        </div >
                    </div>
                </Col>
            </div>
            <Col >
                <div className={`${style.headerFooter}`}>
                    <Row>
                        <Col md={4}>
                            <Row>
                                <Col md={4}>
                                    <div className={style.headerFooterImg}>
                                        <Image src={lamp} className='mx-3' alt="React Logo" height={40} width={40}></Image>
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <div className={`${style.headerFooterContent}`}>
                                        <span style={{ color: 'white', fontSize: '22px', fontWeight: 700, marginBottom: '20px' }}>Определение талантов</span>
                                        <p><span style={{ color: 'white', fontSize: '14px', fontWeight: 400 }}>Научная методология определения сильных сторон личности CliffonStrenght34 на русском,
                                            казахском и английском языках</span></p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Row>
                                <Col md={4}>
                                    <div className={style.headerFooterImg}>
                                        <Image src={profil} className='mx-3 ' alt="React Logo" height={40} width={40}></Image>
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <div className={`${style.headerFooterContent}`}>
                                        <span style={{ color: 'white', fontSize: '22px', fontWeight: 700, marginBottom: '20px' }}>Подбор профессии</span>
                                        <p><span style={{ color: 'white', fontSize: '14px', fontWeight: 400 }}>Дадим рекомендации которые помогут для выстраивания
                                            вектора профессионального развития и покажем подходящие профессии</span></p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Row>
                                <Col md={4}>
                                    <div className={style.headerFooterImg}>
                                        <Image src={consultation} className='mx-3' alt="React Logo" height={40} width={40}></Image>
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <div className={`${style.headerFooterContent}`}>
                                        <span style={{ color: 'white', fontSize: '22px', fontWeight: 700, marginBottom: '20px' }}>Консультация экспертов</span>
                                        <p><span style={{ color: 'white', fontSize: '14px', fontWeight: 400 }}>Поможем разобраться в себе, своих целях и желаниях,
                                            принять и использовать свой формат мышления для гармонии и счастья</span></p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default Header;