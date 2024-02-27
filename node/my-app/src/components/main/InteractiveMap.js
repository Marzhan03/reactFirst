import React from 'react'
import mapImage from '../../assets/images/map.png';
import mapAvatarImage from '../../assets/images/map-avatar.png';
import '../../assets/css/map.css';


const InteractiveMap = () => {
    return (
        <>
            <div className='my-4'>
                <h3 className='fw-bold text-center'>Отзывы пользователей</h3>
                <p className='text-center'>Нам очень важно мнение каждого участника нашего теста, мы рады каждому отзыву!</p>
            </div>
            <div className='my-5 map-card-container'>
                <img style={{ position: 'relative' }} className='img-fluid' src={mapImage}/>
                <div className='map-card p-3'>
                    <div className='d-flex align-items-center mb-2'>
                        <img className='me-2' height={40} width={40} src={mapAvatarImage} />
                        <div className='d-flex flex-column'>
                            <span className='text-dark fw-bold'>Finlay Stark</span>
                            <span className='text-secondary'>Web Developer</span>
                        </div>
                    </div>
                    <div className='d-flex'>
                        “Сайт для профориентации - это просто замечательно! С помощью тестов я наконец-то понял, в какой сфере мне лучше всего развиваться”
                    </div>
                </div>
            </div>
        </>
    )
}

export default InteractiveMap;
