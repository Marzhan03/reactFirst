import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import graph from '../../assets/images/graph_1.png';
import analys from '../../assets/images/analys.jpg';
import user from '../../assets/images/user.svg';
import menu from '../../assets/images/menu.svg';
import block from '../../assets/images/block.svg';
import style from '../../assets/css/bodyOne.module.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const BodyOne = () => {
    return (
        <Row className={`py-5`}>
            <div className={`d-flex justify-content-start  ${style.back}`}>
                <span style={{ fontSize: '36px', fontWeight: 600 }}>Почему наше решение уникально?</span>
            </div>
            <Col md={12} className={`d-flex justify-content-start  ${style.back}`}>
                <Col sm={12} md={6}>
                    <div>
                        <Row>
                            <div className={`d-flex justify-content-start `}>
                                <Image style={{ width: '500px', height: "400px" }} src={graph} alt="React Logo" className='px-1 py-3'></Image>
                            </div>
                        </Row>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className={`${style.bodyContentFirst}`}>
                        <Row>
                            <div className={`py-4`}>
                                <span style={{ color: 'black', fontSize: '32px', fontWeight: 600 }}> Вы получите </span>
                                <span style={{ color: '#393DA1', fontSize: '32px', fontWeight: 600 }}>Персональные отчеты</span>
                            </div>
                            <div>
                                <p><span style={{ color: '#646565', fontSize: '18px', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Risus pellentesque
                                    cursus id pellentesque tempor eget. </span></p>

                                <p><span style={{ color: '#646565', fontSize: '18px', fontWeight: 400 }}>Ut ultrices eu diam elementum nunc. Dignissim pharetra ut non
                                    viverra semper nisi egestas. </span></p>
                                <p><span style={{ color: '#646565', fontSize: '18px', fontWeight: 400 }}>
                                    Habitant facilisi vitae habitant facilisi dictum euismod.</span></p>
                            </div>
                        </Row>
                    </div>
                </Col>
            </Col>
            <Col md={12} className={`d-flex justify-content-start  `}>
                <Col sm={12} md={6}>
                    <div className={`${style.bodyContentFirst}`}>
                        <Row>
                            <div className={``}>
                                <span style={{ color: '#393DA1', fontSize: '32px', fontWeight: 600 }}> AI </span>
                                <span style={{ color: 'black', fontSize: '32px', fontWeight: 600 }}>под контролем опытных профориентологов определит</span>
                            </div>
                            <Col md={2}>
                                <div className={style.bodyCircle}>
                                    <Image src={menu} alt="React Logo" className='px-2 py-2'></Image>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div>
                                    <p><span style={{ color: '#646565', fontSize: '14px', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Risus pellentesque
                                        cursus id pellentesque tempor eget. </span></p>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={style.bodyCircle}>
                                    <Image src={block} alt="React Logo" className='px-2 py-2'></Image>
                                </div>

                            </Col>
                            <Col md={10}>
                                <div>
                                    <p><span style={{ color: '#646565', fontSize: '14px', fontWeight: 400 }}>
                                        Habitant facilisi vitae habitant facilisi dictum euismod.</span></p>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={style.bodyCircle}>
                                    <Image src={user} alt="React Logo" className='px-1 py-2'></Image>
                                </div>

                            </Col>
                            <Col md={10}>
                                <div>
                                    <p><span style={{ color: '#646565', fontSize: '14px', fontWeight: 400 }}>
                                        Habitant facilisi vitae habitant facilisi dictum euismod.</span></p>
                                </div>

                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div >
                        <Row>
                            <div className={`d-flex justify-content-center `}>
                                <Image style={{ width: '500px', height: "300px" }} src={analys} alt="React Logo" ></Image>
                            </div>
                        </Row>
                    </div>
                </Col>
            </Col>
        </Row>

    );
};

export default BodyOne;