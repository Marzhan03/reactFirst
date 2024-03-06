import React from 'react';
import Image from 'react-bootstrap/Image';
import qyz2Image from '../../assets/images/qyz2.png';
import style from '../../assets/css/man.module.css';
import DoughnutChart from './Donut'
import ExpandableCard from './CardsAroundDonut'
import Col from 'react-bootstrap/Col';
import yellowpigtailIcon from '../../assets/images/yellowpigtail.svg';
import greenpigtailIcon from '../../assets/images/greenpigtail.svg';
import redpigtailIcon from '../../assets/images/redpigtail.svg';
import bluepigtailIcon from '../../assets/images/bluepigtail.svg';


const HeaderListThree = () => {
    return (
        <>
        <Col >
            <div style={{marginBottom: -138}}>
                <div className="d-flex flex-column justify-content-center align-items-center ">
                    <div className="d-flex flex-column text-center mt-5 justify-content-center" style={{ marginBottom: '150px' }}>
                        <h1>Кому мы помогаем</h1>
                        <p className="d-flex flex-column">
                            Выявляем направления для развития, подходящие вашему типу мышления и природным
                        <span>особенностям мозга. Выбирайте то, в чем будете лучшими!</span>
                        </p>
                    </div>
                    <div className='d-flex flex-column  justify-content-center'>
                        <div><DoughnutChart/></div>
                        <Image style={{zIndex: 3, width: '485px', height: '753px', marginTop: '-790px', marginLeft: '140px' }} src={qyz2Image} />
                        <div className={style.circleBackground}></div>
                        <div><img src={yellowpigtailIcon} style={{ marginTop: -1480, marginLeft: 50 }}/></div>
                        <div><img src={greenpigtailIcon} style={{ marginTop: -1600, marginLeft: 525 }}/></div>
                        <div><img src={redpigtailIcon} style={{ marginTop: -510, marginLeft: -85 }}/></div>
                        <div><img src={bluepigtailIcon} style={{ marginTop: -450, marginLeft: 650 }}/></div>
                    </div>
                </div>
            </div>
            <div> <ExpandableCard/></div>
        </Col>
        </>
    );
};

export default HeaderListThree;
