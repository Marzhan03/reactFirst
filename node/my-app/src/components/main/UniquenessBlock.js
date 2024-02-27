import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderListThree from './headerListThree';
import Footer from '../Footer'
import graph1Image from '../../assets/images/graph_1.png';
import graph1ArrowImage from '../../assets/images/graph_1_arrow.png';
import Image from 'react-bootstrap/Image';
import '../../assets/css/graph1.css';


const UniquenessBlock = () => {
    return (
        <>
            <Row style={{ position: 'relative' }}>
                <h1 className='my-4 py-2'>Почему наше решение уникально?</h1>
                <div className='d-flex justify-content-between align-items-center text-end'>
                    <div>

                    </div>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.50049" cy="7.50189" r="7.5" fill="#EB5652"/>
                    </svg>
                    <Image className='img-fluid' width={150} height={150} src={graph1ArrowImage} />
                </div>
                <Col className="" lg={6} md={6} sm={12}>
                    <Image className='img-fluid' src={graph1Image} alt="Graph1" />
                </Col>
                <Col className="d-flex flex-column justify-content-center" lg={6} md={6} sm={12}>
                    <div className='text-graph1 mb-4'>
                        Вы получите 
                        <span className='block-graph1-container text-graph1-blue'>
                            &nbsp;Персональные отчеты
                        </span>
                    </div>
                    <div className='d-flex flex-column'>
                        <p>Lorem ipsum dolor sit amet consectetur. Risus pellentesque cursus id pellentesque tempor eget.</p>
                        <p>Ut ultrices eu diam elementum nunc. Dignissim pharetra ut non viverra semper nisi egestas.</p>
                        <p>Habitant facilisi vitae habitant facilisi dictum euismod.</p>
                    </div>
                    <div className='text-end'>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.9995" cy="12.0019" r="12" fill="#47DAAC"/>
                        </svg>
                    </div>
                </Col>
            </Row>
        </>

    )
}

export default UniquenessBlock;
