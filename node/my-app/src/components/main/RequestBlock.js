import React from 'react'
import mapImage from '../../assets/images/map.png';
import mapAvatarImage from '../../assets/images/map-avatar.png';
import requestImage from '../../assets/images/request-image.png';
import '../../assets/css/requestBlock.css';


const RequestBlock = () => {
    return (
        <div className='request-container'>
            <h3 className='fw-bold text-header'>Раскройте потенциал через правильный выбор</h3>
            <div className='image-container align-self-end'>
                <svg className='request-image-circle' width="407" height="407" viewBox="0 0 407 407" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="203.5" cy="203.5" r="203.5" fill="#EAF8FC"/>
                </svg>

                <img className='request-image' src={requestImage} />
            </div>
            <div className='row bg-request'>
                <div className='col-12 col-md-6 offset-md-3'>
                    <ul className='text-light d-flex flex-column justify-content-center'>
                        <li>Доступ к тестированию для сотрудников</li>
                        <li>Дашборд с отчетом по результатам тестирования</li>
                        <li>100 инвайтов, со скидкой в 50%</li>
                        <li>Побробный личный отчет каждого сотрудника</li>
                    </ul>
                </div>
                <div className='col-12 col-md-3 d-flex align-items-center'>
                    <button className='btn btn-request align-self-center'>Оставить заявку</button>
                </div>
            </div>
        </div>
    )
}

export default RequestBlock;
