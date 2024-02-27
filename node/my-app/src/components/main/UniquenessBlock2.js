import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderListThree from './headerListThree';
import Footer from '../Footer'
import graph1Image from '../../assets/images/graph_1.png';
import graph1ArrowImage from '../../assets/images/graph_1_arrow.png';
import Image from 'react-bootstrap/Image';
import '../../assets/css/graph1.css';


const UniquenessBlock2 = () => {
    return (
        <>
            <Row style={{ position: 'relative' }}>
                <Col className="" lg={6} md={6} sm={12}>
                </Col>
                <Col className="d-flex flex-column justify-content-center" lg={6} md={6} sm={12}>
                    <div className='d-flex flex-column'>
                        <></>AI под контролем опытных профориентологов определит
                    </div>
                </Col>
            </Row>
        </>

    )
}

export default UniquenessBlock2;
