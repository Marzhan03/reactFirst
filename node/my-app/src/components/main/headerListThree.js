import React from 'react';
import manImage from '../../assets/images/man.png';
import dropdownCard from '../../assets/images/dropdownCardImg1.png';
import dropdownButton from '../../assets/images/dropdownButton.png';
import Image from 'react-bootstrap/Image';
import styles from '../../assets/css/main.module.css';
import style from '../../assets/css/man.module.css';

const HeaderListThree = () => {
    return (
        <>
            <div className={`container-fluid ${styles.background}`}>
                <div className="d-flex justify-content-center align-items-start vh-100">
                    <div className="text-center mt-2">
                        <h1>Кому мы помогаем</h1>
                        <p className="w-75 mx-auto">
                            Выявляем направления для развития, подходящие вашему типу мышления и природным
                            особенностям мозга. Выбирайте то, в чем будете лучшими!
                        </p>
                        <div className=''>
                            <div className={style.circleBackground}>
                                <Image src={manImage} className={`img-fluid ${style.circleImage}`} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`d-flex flex-column ${style.dropdownCard}`}>
                    <div className={`d-flex justify-content-between`}>   
                    <div className={'p-4'}><Image src={dropdownCard} className={style.customWidth} /></div>
                    <span>Семье</span>
                    <div><Image src={dropdownButton} className={style.customSet} /></div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <span>
                            Даём продвинутый инструмент для оценки и развития команд, помогающий крупными компаниями и малым бизнесом
                        </span>

                    </div>
                </div >
            </div>

        </>
    );
};

export default HeaderListThree;