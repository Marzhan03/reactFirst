import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logoImage from '../../assets/images/logo.png';
import style from '../../assets/css/bodyOne.module.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const BodyOne = () => {
    return (
        <Row>
            <Col md={6}>
                <div>
                    <Row>
                    <div>
                        ghgcjgh
                    </div>
                    </Row>
                </div>
            </Col>
            <Col md={6}>
                <div>
                    <Row>
                        <div className={`${style.bodyContentFirst}`}>
                            <span>Вы получите</span> 
                            <span>Персональные отчеты</span>

                            <p><span>Lorem ipsum dolor sit amet consectetur. Risus pellentesque 
                                cursus id pellentesque tempor eget. </span></p>

                            <p><span>Ut ultrices eu diam elementum nunc. Dignissim pharetra ut non 
                                viverra semper nisi egestas. </span></p>
                            <p><span>
                                Habitant facilisi vitae habitant facilisi dictum euismod.</span></p>
                        </div>
                    </Row>
                </div>
            </Col>
        </Row>
      
    );
};

export default BodyOne;