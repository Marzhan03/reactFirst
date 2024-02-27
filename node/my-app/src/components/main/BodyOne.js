import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import graph from '../../assets/images/graph_1.png';
import analys from '../../assets/images/analys.jpg';
import vector from '../../assets/images/vectortwo.png';
import circle from '../../assets/images/circle.png';
import user from '../../assets/images/user.svg';
import menu from '../../assets/images/menu.svg';
import block from '../../assets/images/block.svg';
import style from '../../assets/css/bodyOne.module.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const BodyOne = () => {
    return (
        <Row className={`py-5  `}>
            <Col xs={12} md={12} className='d-none d-md-block mb-5'>
                <div className={`d-flex justify-content-start `}>
                    <span style={{ fontSize: '36px', fontWeight: 600 }}>Почему наше решение уникально?</span>
                </div>
            </Col>
            <Col xs={12} md={12} className={`d-flex justify-content-start `}>
                <Row>
                    <Col xs={12} md={6} className='d-none d-md-block'>
                        <div>
                            <div className={`d-flex justify-content-start `}>
                               <div className={style.rectangleOne}></div>
                               <div className={style.rectangleTwo}></div>
                                <Image style={{ zIndex:1, width: '500px', height: "400px" }} src={graph} alt="React Logo" className='px-1 py-3'></Image>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='offset-xs-1'>
                        <div className={`${style.bodyContentFirst}`}>
                            <div className='d-none d-md-block' >
                                <Image className={style.vector} src={vector}></Image>
                                <div className={style.circleOne}> </div>
                                <div className={style.circleThree}> </div>
                                <div className={style.circleFour}> </div>
                                <div className={style.circleTwo}> </div>    
                            </div>
                            <div className={`py-4 `}>
                                <span className={style.text} style={{color: 'black', fontSize: '32px', fontWeight: 600 }}> Вы получите </span>
                                <span className={style.text} style={{color: '#393DA1', fontSize: '32px', fontWeight: 600 }}>Персональные отчеты</span>

                            </div>
                            <div>
                                <p><span style={{ color: '#646565', fontSize: '18px', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Risus pellentesque
                                    cursus id pellentesque tempor eget. </span></p>

                                <p><span style={{ color: '#646565', fontSize: '18px', fontWeight: 400 }}>Ut ultrices eu diam elementum nunc. Dignissim pharetra ut non
                                    viverra semper nisi egestas. </span></p>
                                <p><span style={{ color: '#646565', fontSize: '18px', fontWeight: 400 }}>
                                    Habitant facilisi vitae habitant facilisi dictum euismod.</span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} sm={12} md={6} className='row d-md-none mb-3'>
                        <div >
                            <div className={`d-flex justify-content-center `}>
                                <Image style={{ width: '300px', height: "200px" }} src={analys} alt="React Logo" ></Image>
                            </div>
                        </div>
                    </Col>
            <Col xs={12} md={12} className={`d-flex justify-content-start mt-5`}>
                <Row>
                    <Col xs={12} sm={12} md={6} >
                        <Row>
                            <div className={`${style.bodyContentFirst}`}>
                                    <Image  className={style.circle} src={circle}></Image>
                                <span className={style.text} style={{  color: '#393DA1', fontSize: '32px', fontWeight: 600 }}> AI </span>
                                <span className={style.text} style={{ color: 'black', fontSize: '32px', fontWeight: 600 }} >под контролем опытных профориентологов определит</span>
                                <Row className='mt-4 mb-2'>
                                    <Col xs={2} md={2}>
                                        <div className={style.bodyCircle}>
                                            <Image src={menu} alt="React Logo" className='px-2 py-2'></Image>
                                        </div>
                                    </Col>
                                    <Col xs={10} md={10}>
                                        <div>
                                            <p><span  style={{ color: '#646565', fontSize: '14px', fontWeight: 400 }}>Lorem ipsum dolor sit amet consectetur. Risus pellentesque
                                                cursus id pellentesque tempor eget. </span></p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mb-2'>
                                    <Col xs={2} md={2} >
                                        <div className={style.bodyCircle}>
                                            <Image src={block} alt="React Logo" className='px-2 py-2'></Image>
                                        </div>

                                    </Col>
                                    <Col xs={10} md={10}>
                                        <div>
                                            <p><span style={{ color: '#646565', fontSize: '14px', fontWeight: 400 }}>
                                                Habitant facilisi vitae habitant facilisi dictum euismod.</span></p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mb-2'>
                                    <Col xs={2} md={2}>
                                        <div className={style.bodyCircle}>
                                            <Image src={user} alt="React Logo" className='px-1 py-2'></Image>
                                        </div>

                                    </Col>
                                    <Col xs={10} md={10}>
                                        <div>
                                            <p><span style={{ color: '#646565', fontSize: '14px', fontWeight: 400 }}>
                                                Habitant facilisi vitae habitant facilisi dictum euismod.</span></p>
                                        </div>

                                    </Col>
                                </Row>
                            </div>
                        </Row>

                    </Col>
                    <Col xs={12} sm={12} md={6} className=' d-none d-md-block'>
                        <div >
                            <div className={`d-flex justify-content-center `}>
                                <Image style={{ width: '500px', height: "300px" }} src={analys} alt="React Logo" ></Image>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>

    );
};

export default BodyOne;