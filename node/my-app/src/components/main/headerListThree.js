import React from 'react';
import Image from 'react-bootstrap/Image';
import qyz2Image from '../../assets/images/qyz2.png';
import dropdownCard from '../../assets/images/dropdownCardImg1.png';
import dropdownButton from '../../assets/images/dropdownButton.png';
import styles from '../../assets/css/main.module.css';
import style from '../../assets/css/man.module.css';
import DoughnutChart from './Donut'
import Col from 'react-bootstrap/Col';


const HeaderListThree = () => {
    return (
        <>
        <Col >
            <div >
                <div className="d-flex flex-column justify-content-center align-items-center ">
                    <div className="d-flex flex-column text-center mt-2 justify-content-center">

                        <h1>Кому мы помогаем</h1>

                        <p className="w-75 mx-auto">
                            Выявляем направления для развития, подходящие вашему типу мышления и природным
                            особенностям мозга. Выбирайте то, в чем будете лучшими!
                        </p>
                    </div>
                    <div className='d-flex flex-column  justify-content-center mt-3'>
                        <div style={{ width: '600px', height: '600px', }}><DoughnutChart /></div>
                        <Image style={{zIndex:3, marginBottom:'50px', width: '400px', height: '600px', marginTop: '-620px', marginLeft: '100px' }} src={qyz2Image} />
                        
                        <div className={style.circleBackground}></div>

                    </div>
                </div>
            </div>
            {/* </div> */}

            {/* <div className={`d-flex flex-column ${style.dropdownCard}`}>
                <div className={`d-flex justify-content-between `}>
                    <div className={'p-3'}><Image src={dropdownCard} className={style.customWidth} /></div>
                    <span className={`align-self-center ${style.boldText}`}>Семье</span>
                    <div className={'p-2'}><Image src={dropdownButton} className={style.customSet} /></div>
                </div>

                <div className='px-3 mt-0'>
                    Даём продвинутый инструмент для оценки и развития команд, помогающий крупными компаниями и малым бизнесом
                </div>
            </div> */}
            </Col>
        </>
    );
};

export default HeaderListThree;
