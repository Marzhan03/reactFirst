import React from 'react'
import styles from '../../assets/css/main.module.css';
import MainNavbar from './MainNavbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
    return (
        <div className={`container-fluid ${styles.background}`}>
            <Row className="justify-content-center mx-4">
                <Col md={6} >
                    <Row>
                        <Col md={12}>
                            <div><MainNavbar /></div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    )
}

export default Main;