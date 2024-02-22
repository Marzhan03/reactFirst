import React from 'react'
import styles from '../../assets/css/main.module.css';
import MainNavbar from './MainNavbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderListThree from './headerListThree';
import Footer from '../Footer'


const Main = () => {
    return (
        <>
            <div className={`container-fluid background`}>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <div><MainNavbar /></div>
                        <div><HeaderListThree /></div>
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
