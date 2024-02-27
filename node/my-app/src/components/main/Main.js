import React from 'react'
import styles from '../../assets/css/main.module.css';
import MainNavbar from './MainNavbar';
import UniquenessBlock from './UniquenessBlock';
import UniquenessBlock2 from './UniquenessBlock2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderListThree from './headerListThree';
import Footer from '../Footer'
import CarouselBlock from './CarouselBlock';
import InteractiveMap from './InteractiveMap';
import RequestBlock from './RequestBlock';
import BodyOne from './BodyOne';
import Header from './Header';


const Main = () => {
    return (
        <>
            <div className={`container-fluid`}>
                <Row className="justify-content-center">
                    <Col md={12} className={`  ${styles.background}`}>
                        <Row className="justify-content-center">
                            <Col md={10} className={`  ${styles.background}`}>
                                <MainNavbar />
                                <Header />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={10} className=''>
                        <BodyOne />
                    </Col>
                    <Col md={12} className={`${styles.background}`}>
                        <Row className="justify-content-center">
                            <Col md={10} className={`  ${styles.background}`}>
                                <HeaderListThree />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className='mx-0 px-0 '>
                        <CarouselBlock />
                    </Col>
                    <Col md={10} className=''>
                        <InteractiveMap />
                        <RequestBlock />
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col style={{ background: "#393DA1" }} md={12}>
                        <Footer />
                    </Col>
                </Row>
            </div>
        </>

    )
}

export default Main;
