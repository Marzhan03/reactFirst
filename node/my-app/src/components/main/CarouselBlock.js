import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import HeaderListThree from './headerListThree';
import Footer from '../Footer'
import carouselImage1 from '../../assets/images/carousel_img1.jpg';
import carouselItemBook from '../../assets/images/carousel-item-book.png';
import carouselItemBook2 from '../../assets/images/carousel-item-book2.png';
import carouselImage1Img from '../../assets/images/carousel_img1_img.png';
import carouselImage2Img from '../../assets/images/carousel_img2_img.png';
import carouselImage3Img from '../../assets/images/carousel_img3_img.png';
import Image from 'react-bootstrap/Image';
import '../../assets/css/carousel.css';
import PrevIcon from './carousel/PrevIcon'
import NextIcon from './carousel/NextIcon'


const CarouselBlock = () => {
    return (
        <div className='row'>
            <div className='col-12'>
                <Carousel interval={null} prevIcon={<PrevIcon />} nextIcon={<NextIcon />}>
                    <Carousel.Item>
                        <img style={{  }} width="100%" height={500} alt="900x500" src={carouselImage1} />
                        <div className='carousel-image-absolute'>
                            <div className='d-flex flex-column mx-5'>
                                <h2 className='text-dark font-weight-700'>
                                    Я - <span className='text-carousel-blue'>БАБУР АДИЛЬХАН</span><br />CEO TANU.AI
                                </h2>
                                <p className='text-dark'>“Благодаря нашей платформе я узнал особенности своих ведущих талантов:”</p>
                                <div className='row'>
                                    <div className='col-4 d-flex align-items-center bg-active-subitem px-3 mb-2'>
                                        <span className='pe-4'>1</span>
                                        <div className='d-flex flex-column'>
                                            <span className='fw-bold'>Achiever</span>
                                            <span>Достижения</span>
                                        </div>
                                    </div>
                                    <div className='col-8 mb-2'>
                                        <div className='d-flex align-items-center carousel-item-card'>
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="68" y="68" width="68" height="68" rx="24" transform="rotate(-180 68 68)" fill="#2ED6A3" fill-opacity="0.15" />
                                                <path d="M25.5856 33.4141C25.9606 33.7891 26.4693 33.9997 26.9996 33.9997C27.5299 33.9997 28.0385 33.7891 28.4136 33.4141L31.9996 29.8281V43.0001C31.9996 43.5306 32.2103 44.0393 32.5854 44.4143C32.9604 44.7894 33.4692 45.0001 33.9996 45.0001C34.53 45.0001 35.0387 44.7894 35.4138 44.4143C35.7889 44.0393 35.9996 43.5306 35.9996 43.0001V29.8281L39.5856 33.4141C39.9628 33.7784 40.468 33.98 40.9924 33.9755C41.5168 33.9709 42.0184 33.7606 42.3892 33.3898C42.76 33.0189 42.9704 32.5173 42.9749 31.9929C42.9795 31.4685 42.7779 30.9633 42.4136 30.5861L35.4136 23.5861C35.0385 23.2112 34.5299 23.0005 33.9996 23.0005C33.4693 23.0005 32.9606 23.2112 32.5856 23.5861L25.5856 30.5861C25.2106 30.9612 25 31.4698 25 32.0001C25 32.5304 25.2106 33.0391 25.5856 33.4141Z" fill="#00A389" />
                                            </svg>
                                            <div className='d-flex flex-column'>
                                                <span className='fw-bold text-dark'>Сильные стороны</span>
                                                <span className='text-dark text-subitem'>Способность работать над проектом до достижения идеального результата, несмотря на возникающие трудности</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-4 d-flex align-items-center bg-subitem px-3 mb-2'>
                                        <span className='pe-4'>2</span>
                                        <div className='d-flex flex-column'>
                                            <span className='fw-bold'>Focus</span>
                                            <span>Сфокусированность</span>
                                        </div>
                                    </div>
                                    <div className='col-8 mb-2'>
                                        <div className='d-flex align-items-center carousel-item-card'>
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="68" y="68" width="68" height="68" rx="24" transform="rotate(-180 68 68)" fill="#FF5B5B" fill-opacity="0.15" />
                                                <path d="M25.5856 37.4139L32.5856 44.4139C32.9606 44.7889 33.4693 44.9995 33.9996 44.9995C34.5299 44.9995 35.0385 44.7889 35.4136 44.4139L42.4136 37.4139C42.7779 37.0367 42.9795 36.5315 42.9749 36.0071C42.9704 35.4827 42.76 34.9811 42.3892 34.6103C42.0184 34.2395 41.5168 34.0291 40.9924 34.0246C40.468 34.02 39.9628 34.2216 39.5856 34.5859L35.9996 38.1719V24.9999C35.9996 24.4695 35.7889 23.9608 35.4138 23.5857C35.0387 23.2107 34.53 22.9999 33.9996 22.9999C33.4692 22.9999 32.9604 23.2107 32.5854 23.5857C32.2103 23.9608 31.9996 24.4695 31.9996 24.9999V38.1719L28.4136 34.5859C28.0364 34.2216 27.5312 34.02 27.0068 34.0246C26.4824 34.0291 25.9808 34.2395 25.61 34.6103C25.2391 34.9811 25.0288 35.4827 25.0242 36.0071C25.0197 36.5315 25.2213 37.0367 25.5856 37.4139Z" fill="#FF5B5B" />
                                            </svg>
                                            <div className='d-flex flex-column'>
                                                <span className='fw-bold text-dark'>Подводные камни</span>
                                                <span className='text-dark text-subitem'>Ваши основные силы в этой области связаны с упорством, целеустремленностью. Однако, это может привести к перегрузке работой и как следствие к усталости и стрессу.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-4 d-flex align-items-center bg-subitem-warning px-3 mb-2'>
                                        <span className='pe-4'>3</span>
                                        <div className='d-flex flex-column'>
                                            <span className='fw-bold'>Competition</span>
                                            <span>Конкуренция</span>
                                        </div>
                                    </div>
                                    <div className='col-8 mb-2'>
                                        <div className='d-flex align-items-center carousel-item-card'>
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="68" y="68" width="68" height="68" rx="24" transform="rotate(-180 68 68)" fill="#5B76FF" fill-opacity="0.15" />
                                                <path d="M46 23.25H38C37.2027 23.2506 36.4184 23.4518 35.7194 23.8352C35.0204 24.2186 34.4291 24.7718 34 25.4438C33.5709 24.7718 32.9796 24.2186 32.2806 23.8352C31.5816 23.4518 30.7973 23.2506 30 23.25H22C21.5359 23.25 21.0908 23.4344 20.7626 23.7626C20.4344 24.0908 20.25 24.5359 20.25 25V41C20.25 41.4641 20.4344 41.9092 20.7626 42.2374C21.0908 42.5656 21.5359 42.75 22 42.75H30C30.862 42.75 31.6886 43.0924 32.2981 43.7019C32.9076 44.3114 33.25 45.138 33.25 46C33.25 46.1989 33.329 46.3897 33.4697 46.5303C33.6103 46.671 33.8011 46.75 34 46.75C34.1989 46.75 34.3897 46.671 34.5303 46.5303C34.671 46.3897 34.75 46.1989 34.75 46C34.75 45.138 35.0924 44.3114 35.7019 43.7019C36.3114 43.0924 37.138 42.75 38 42.75H46C46.4641 42.75 46.9092 42.5656 47.2374 42.2374C47.5656 41.9092 47.75 41.4641 47.75 41V25C47.75 24.5359 47.5656 24.0908 47.2374 23.7626C46.9092 23.4344 46.4641 23.25 46 23.25ZM30 41.25H22C21.9337 41.25 21.8701 41.2237 21.8232 41.1768C21.7763 41.1299 21.75 41.0663 21.75 41V25C21.75 24.9337 21.7763 24.8701 21.8232 24.8232C21.8701 24.7763 21.9337 24.75 22 24.75H30C30.862 24.75 31.6886 25.0924 32.2981 25.7019C32.9076 26.3114 33.25 27.138 33.25 28V42.5387C32.3709 41.7101 31.2081 41.249 30 41.25ZM46.25 41C46.25 41.0663 46.2237 41.1299 46.1768 41.1768C46.1299 41.2237 46.0663 41.25 46 41.25H38C36.7917 41.2495 35.629 41.711 34.75 42.54V28C34.75 27.138 35.0924 26.3114 35.7019 25.7019C36.3114 25.0924 37.138 24.75 38 24.75H46C46.0663 24.75 46.1299 24.7763 46.1768 24.8232C46.2237 24.8701 46.25 24.9337 46.25 25V41ZM43.75 29C43.75 29.1989 43.671 29.3897 43.5303 29.5303C43.3897 29.671 43.1989 29.75 43 29.75H38C37.8011 29.75 37.6103 29.671 37.4697 29.5303C37.329 29.3897 37.25 29.1989 37.25 29C37.25 28.8011 37.329 28.6103 37.4697 28.4697C37.6103 28.329 37.8011 28.25 38 28.25H43C43.1989 28.25 43.3897 28.329 43.5303 28.4697C43.671 28.6103 43.75 28.8011 43.75 29ZM43.75 33C43.75 33.1989 43.671 33.3897 43.5303 33.5303C43.3897 33.671 43.1989 33.75 43 33.75H38C37.8011 33.75 37.6103 33.671 37.4697 33.5303C37.329 33.3897 37.25 33.1989 37.25 33C37.25 32.8011 37.329 32.6103 37.4697 32.4697C37.6103 32.329 37.8011 32.25 38 32.25H43C43.1989 32.25 43.3897 32.329 43.5303 32.4697C43.671 32.6103 43.75 32.8011 43.75 33ZM43.75 37C43.75 37.1989 43.671 37.3897 43.5303 37.5303C43.3897 37.671 43.1989 37.75 43 37.75H38C37.8011 37.75 37.6103 37.671 37.4697 37.5303C37.329 37.3897 37.25 37.1989 37.25 37C37.25 36.8011 37.329 36.6103 37.4697 36.4697C37.6103 36.329 37.8011 36.25 38 36.25H43C43.1989 36.25 43.3897 36.329 43.5303 36.4697C43.671 36.6103 43.75 36.8011 43.75 37Z" fill="#273189" />
                                            </svg>

                                            <div className='d-flex flex-column'>
                                                <span className='fw-bold text-dark'>Рекомендованные книги</span>
                                                <span className='text-dark text-subitem'>
                                                    <div className='d-flex justify-content-around'>
                                                        <div className='d-flex'>
                                                            <img src={carouselItemBook} width={30}/>
                                                            <div className='d-flex flex-column ms-1'>
                                                                <span>Спроси маму</span>
                                                                <span className='text-secondary'>Роберт Фитцпатрик</span>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <img src={carouselItemBook2} width={30}/>
                                                            <div className='d-flex flex-column ms-1'>
                                                                <span>Спроси маму</span>
                                                                <span className='text-secondary'>Роберт Фитцпатрик</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className='img-fluid' width={'30%'} alt="900x500" src={carouselImage1Img} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ position: 'relative' }} width="100%" height={500} alt="900x500" src={carouselImage1} />
                        <div className='carousel-image-absolute'>
                            <div className='d-flex flex-column mx-5'>
                                <h2 className='text-dark font-weight-700'>
                                    Я - <span className='text-carousel-blue'>АЛЕКС ЕВДОКИМОВ</span><br />CPO TANU.AI
                                </h2>
                                <p className='text-dark'>“Наш проект помог мне узнать о себе такие вещи как: “</p>
                                <div className='row'>
                                    <div className='col-12 mb-2'>
                                        <div className='d-flex align-items-center carousel-item-card'>
                                            
                                            <div className='d-flex flex-column'>
                                                <span className='fw-bold text-dark'>Input + Relator + Self-Assurance </span>
                                                <span className='text-dark text-subitem'>Эта комбинация позволяет вам активно собирать информацию, налаживать тесные связи с окружающими и уверенно действовать. Вы умеете открывать для себя новое и уверенно идти к своей цели.</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='col-12 mb-2'>
                                        <div className='d-flex align-items-center carousel-item-card'>
                                            <div className='d-flex flex-column'>
                                                <span className='fw-bold text-dark'>Learner + Responsibility + Achiever</span>
                                                <span className='text-dark text-subitem'>Благодаря этой комбинации вы всегда стремитесь к новым знаниям и навыкам, ответственно подходите к выполнению задач и постоянно стремитесь к достижениям. Вы никогда не останавливаетесь на достигнутом, всегда идёте вперёд.</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='col-12 mb-2'>
                                        <div className='d-flex align-items-center carousel-item-card'>
                                            <div className='d-flex flex-column'>
                                                <span className='fw-bold text-dark'>Connectedness + Focus + Activator</span>
                                                <span className='text-dark text-subitem'>
                                                Такая комбинация позволяет вам видеть связи между людьми и событиями, сосредоточиваться на ключевых задачах и быстро переходить к действию. Вы умеете видеть общую картину и быстро принимать решения.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className='img-fluid' width={'30%'} alt="900x500" src={carouselImage2Img} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ position: 'relative' }} width="100%" height={500} alt="900x500" src={carouselImage1} />
                        <div className='carousel-image-absolute'>
                            <div className='d-flex flex-column mx-5'>
                                <h2 className='text-dark font-weight-700'>
                                    Я - <span className='text-carousel-blue'>КАБДИЕВ АСЕТ</span><br />CTO TANU.AI
                                </h2>
                                <p className='text-dark'>“3 профессии, которые мне подобрали специалисты”</p>
                                <div className='row'>
                                    <div className='col-8 mb-2'>
                                        <div className='d-flex align-items-center carousel-item-card'>
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="68" y="68" width="68" height="68" rx="24" transform="rotate(-180 68 68)" fill="#2ED6A3" fill-opacity="0.15" />
                                                <path d="M25.5856 33.4141C25.9606 33.7891 26.4693 33.9997 26.9996 33.9997C27.5299 33.9997 28.0385 33.7891 28.4136 33.4141L31.9996 29.8281V43.0001C31.9996 43.5306 32.2103 44.0393 32.5854 44.4143C32.9604 44.7894 33.4692 45.0001 33.9996 45.0001C34.53 45.0001 35.0387 44.7894 35.4138 44.4143C35.7889 44.0393 35.9996 43.5306 35.9996 43.0001V29.8281L39.5856 33.4141C39.9628 33.7784 40.468 33.98 40.9924 33.9755C41.5168 33.9709 42.0184 33.7606 42.3892 33.3898C42.76 33.0189 42.9704 32.5173 42.9749 31.9929C42.9795 31.4685 42.7779 30.9633 42.4136 30.5861L35.4136 23.5861C35.0385 23.2112 34.5299 23.0005 33.9996 23.0005C33.4693 23.0005 32.9606 23.2112 32.5856 23.5861L25.5856 30.5861C25.2106 30.9612 25 31.4698 25 32.0001C25 32.5304 25.2106 33.0391 25.5856 33.4141Z" fill="#00A389" />
                                            </svg>
                                            <div className='d-flex flex-column'>
                                                <span className='fw-bold text-dark'>Сильные стороны</span>
                                                <span className='text-dark text-subitem'>Способность работать над проектом до достижения идеального результата, несмотря на возникающие трудности</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className='img-fluid' width={'30%'} alt="900x500" src={carouselImage3Img} />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    )
}

export default CarouselBlock;
