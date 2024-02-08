import React from 'react';
import Image from 'react-bootstrap/Image';
import qyz2Image from '../../assets/images/qyz2.png';
import dropdownCard from '../../assets/images/dropdownCardImg1.png';
import dropdownButton from '../../assets/images/dropdownButton.png';
import styles from '../../assets/css/main.module.css';
import style from '../../assets/css/man.module.css';

const HeaderListThree = () => {
    return (
        <>
            <div className={`${styles.background}`}>
                <div className="d-flex justify-content-center align-items-start vh-100">
                    <div className="text-center mt-2 justify-content-center">
                        <div class= {`${style.doughnutContainer}`}>
                            
                            <div className='p-1'><div class={`${style.doughnut}`}></div></div>
                            <div className='p-1'><div class={`${style.doughnutTwo}`}></div></div>
                            <div className='p-1'><div class={`${style.doughnutOne}`}></div></div>
                            <div className='p-1'><div class={`${style.doughnutThree}`}></div></div>
                        </div>
                        <div>
                            <div className='p-1'><div class={`${style.circleBackground}`}></div></div>
                            <div className='p-1'><div class={`${style.circleImage}`}>
                            <Image style={{ width: '60%', height: '100%' }} src={qyz2Image} /></div></div>
                            
                        <h1>Кому мы помогаем</h1></div>
                        
                        <p className="w-75 mx-auto">
                            Выявляем направления для развития, подходящие вашему типу мышления и природным
                            особенностям мозга. Выбирайте то, в чем будете лучшими!
                        </p>
                        {/* <div className={style.circleBackground}> */}
                            {/* <Image src={manImage} className={`img-fluid ${style.circleImage}`} /> */}
                        </div>
                    </div>
                </div>
            {/* </div> */}

            <div className={`d-flex flex-column ${style.dropdownCard}`}>
                <div className={`d-flex justify-content-between `}>
                    <div className={'p-3'}><Image src={dropdownCard} className={style.customWidth} /></div>
                    <span className={`align-self-center ${style.boldText}`}>Семье</span>
                    <div className={'p-2'}><Image src={dropdownButton} className={style.customSet} /></div>
                </div>

                <div className='px-3 mt-0'>
                    Даём продвинутый инструмент для оценки и развития команд, помогающий крупными компаниями и малым бизнесом
                </div>
            </div>
        </>
    );
};

export default HeaderListThree;
