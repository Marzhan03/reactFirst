import React from 'react'
import styles from '../../assets/css/main.module.css';
import MainNavbar from './MainNavbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderListThree from './headerListThree';


const Main = () => {
    return (
        <><div className={`container-fluid ${styles.background}`}>
            <Row className="justify-content-center mx-4">
                <Col md={10}>
                    <Row>
                        <Col lg={12}>
                            <div><MainNavbar /></div>
                            <div><HeaderListThree/></div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        </>

    )
}

export default Main;