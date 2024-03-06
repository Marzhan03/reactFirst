import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import dropdownIcon from '../../assets/images/dropdown.svg';
import updropIcon from '../../assets/images/updrop.svg';
import happyfamilyIcon from '../../assets/images/happyfamily.svg';
import shabadanIcon from '../../assets/images/shabadan.svg';
import studentshatIcon from '../../assets/images/studentshat.svg';
import starmanIcon from '../../assets/images/starman.svg';
import blueArrowIcon from '../../assets/images/bluearrow.svg';
import whiteArrowIcon from '../../assets/images/whitearrow.svg';

const ExpandableCard = () => {
  const [expanded, setExpanded] = useState([true, true, true, true]);

  const toggleExpanded = (index) => {
    setExpanded((prevExpanded) =>
      prevExpanded.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <Row>
      <Col xs={6} md={3}>
        <Card style={{ marginTop: expanded[0] ? -810 : -1080, left: expanded[0] ? 25 : -115, borderRadius: '20px', height: expanded[0] ? '239px' : '438px', width: expanded[0] ? '359px' : '516px' }}>
          <Card.Body>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 5, marginLeft: 5 }}>
              <img src={starmanIcon} style={{ marginRight: '8px', marginBottom: '10px' }} />
              <div className='d-flex flex-column'>
              <span style={{ fontWeight: 'bold', fontSize: '24px', paddingLeft: '5px', marginTop: expanded[0] ? '20px': 0 }}>Специалисту</span>
              <span style={{ opacity: expanded[0] ? 0 : 0.5, transition: 'opacity 0.3s', paddingLeft: 5 }}>Школьник\ Первый старт</span>
              </div>
              <img
                src={expanded[0] ? dropdownIcon : updropIcon}
                onClick={() => toggleExpanded(0)}
                style={{  marginTop: '-65px', marginLeft: expanded[0] ? 'auto' : 'auto', cursor: 'pointer' }}
              />
            </div>
            <Card.Text style={{ height: expanded[0] ? '200px' : '450px', overflow: 'hidden' }}>
            <span style={{ opacity: expanded[0] ? 0.6 : 1, transition: 'opacity 0.3s' }}>
            {expanded[0] ? <div className='ms-1'><span style={{fontSize: '16px', paddingRight: 35, marginLeft: 1 }}>Даём продвинутый инструмент для оценки и развития команд, помогающий крупными компаниями и малым бизнесом</span></div> : <div className='d-flex flex-column mt-2 ms-1'>
                <span><b>Кому подходит?</b></span>
                <span className='mt-1'>Школьникам, выбирающим свою будущую профессию и испытывающим сложности с выбором. Мы поможем определить сильные стороны и наиболее подходящие профессии на основе личных качеств и интересов ребенка.</span>
                <span className='mt-1'><b>Что включает?</b></span>
                <span className='mt-1'>Консультация с профориентатором и все виды отчетов на основе Gallup* (Тест Gallup сдается отдельно и в стоимость пакета не входит)</span>
            </div>}
            </span>
            </Card.Text>
            {expanded[0] ? <div style={{ marginTop: '-125px', marginLeft: '180px'}}>
              <span style={{color: '#393DA1'}}>Оставить заявку</span>
              <img src={blueArrowIcon} style={{ marginLeft: '8px', cursor: 'pointer' }} />
            </div> : <div className='d-flex justify-content-between' style={{marginTop: '-200px'}}>
            <div className='d-flex flex-column' style={{opacity: 0.5}}><span style={{fontSize: '14px'}}>Стоимость: 70 000 тг</span><span>Длительность: 2 часа</span></div>
                <button style={{ backgroundColor: '#C5E0FF', color: '#393DA1', width: '210px', borderRadius: "15px" }}>
                              Оставить заявку
                              <img src={blueArrowIcon} style={{ marginLeft: '8px', cursor: 'pointer' }} />
                          </button></div>}
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={3}>
      <Card style={{ marginTop: expanded[1] ? '-450px' : '-650px', marginLeft: expanded[1] ? '-423px' : '-583px', borderRadius: '20px', height: expanded[1] ? '239px' : '454px', width: expanded[1] ? '359px' : '516px', zIndex: 4 }}>
          <Card.Body>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 7 }}>
              <img src={shabadanIcon} style={{ marginRight: '10px', marginTop: expanded[1] ? '-30px': 0 }} />
              <div className='d-flex flex-column'>
              {expanded[1] ? <><span style={{ fontWeight: 'bold', fontSize: '24px', paddingTop: 5, marginTop: 10 }}>Бизнесу и </span><span style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '-13px' }}>управлению</span></> : <><span style={{ fontWeight: 'bold', fontSize: '24px', paddingTop: 5, marginTop: -5 }}>Бизнесу и управлению</span></>}
              <span style={{ opacity: expanded[1] ? 0 : 0.5, transition: 'opacity 0.3s', overflow: 'hidden'}}>Руководители и управленцы</span>
              </div>
              <img
                src={expanded[1] ? dropdownIcon : updropIcon}
                onClick={() => toggleExpanded(1)}
                style={{  marginTop: expanded[1] ? '-90px': '-50px', marginLeft: expanded[1] ? '50px' : 'auto', cursor: 'pointer' }}
              />
            </div>
            <Card.Text style={{ height: expanded[1] ? '200px' : '450px'}}>
            <span style={{ opacity: expanded[1] ? 0.6 : 1, transition: 'opacity 0.3s' }}>
            {expanded[1] ? <span style={{fontSize: '16px', marginTop: '-25px', position: 'absolute', paddingLeft: 7, paddingRight: 50}}>Даём продвинутый инструмент для оценки и развития команд, помогающий крупными компаниями и малым бизнесом</span> : <div className='d-flex flex-column mt-3 ms-1'>
                <span><b>Кому подходит?</b></span>
                <span className='mt-1'>Руководителям и управленцам, желающим эффективно взаимодействовать с сотрудниками, командой и расширить область карьерной экспертизы.</span>
                <span>Поможем наладить эффективную коммуникацию с командой, нанимать нужных сотрудников и понять вектор Вашего развития для масштабирования бизнеса.</span>
                <span className='mt-1'><b>Что включает?</b></span>
                <span className='mt-1'>Консультация с профориентатором и все виды отчетов на основе Gallup* (Тест Gallup сдается отдельно и в стоимость пакета не входит)</span>
            </div>}
            </span>
            </Card.Text>
            {expanded[1] ? <div style={{ marginTop: '-155px', marginLeft: '180px'}}>
              <span style={{color: '#393DA1'}}>Оставить заявку</span>
              <img src={blueArrowIcon} style={{ marginLeft: '8px', cursor: 'pointer' }} />
            </div> : <div className='d-flex justify-content-between' style={{marginTop: '-180px'}}>
            <div className='d-flex flex-column' style={{opacity: 0.5}}><span style={{fontSize: '14px'}}>Стоимость: 130 000 тг</span><span>Длительность: 2 - 2,5 часа</span></div>
                <button style={{ backgroundColor: '#474BB1', color: 'white', width: '210px', borderRadius: "15px" }}>
                              Оставить заявку
                              <img src={whiteArrowIcon} style={{ marginLeft: '8px', cursor: 'pointer' }} />
                          </button></div>}
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={3}>
      <Card style={{ marginTop: expanded[2] ? '-380px' : '-590px', marginLeft: '367px', borderRadius: '20px', height: expanded[2] ? '239px' : '438px', width: expanded[2] ? '359px' : '516px' }}>
          <Card.Body>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 5, marginLeft: 5 }}>
              <img src={studentshatIcon} style={{ marginRight: '8px', marginBottom: '10px' }} />
              <div className='d-flex flex-column'>
              <span style={{ fontWeight: 'bold', fontSize: '24px', paddingLeft: '5px', marginTop: expanded[2] ? '10px': -5 }}>Школе</span>
              <span style={{ opacity: expanded[2] ? 0 : 0.5, transition: 'opacity 0.3s', paddingLeft: 5 }}>Школьник\ Первый старт</span>
              </div>
              <img
                src={expanded[2] ? dropdownIcon : updropIcon}
                onClick={() => toggleExpanded(2)}
                style={{  marginTop: '-65px', marginLeft: expanded[2] ? 'auto' : 'auto', cursor: 'pointer' }}
              />
            </div>
            <Card.Text style={{ height: expanded[2] ? '200px' : '450px', overflow: 'hidden' }}>
            <span style={{ opacity: expanded[2] ? 0.6 : 1, transition: 'opacity 0.3s' }}>
            {expanded[2] ? <div className='ms-1'><span style={{fontSize: '16px', paddingRight: 25}}>Даём продвинутый инструмент для оценки и развития команд, помогающий крупными компаниями и малым бизнесом</span></div> : <div className='d-flex flex-column mt-2 ms-1'>
                <span><b>Кому подходит?</b></span>
                <span className='mt-1'>Школьникам, выбирающим свою будущую профессию и испытывающим сложности с выбором. Мы поможем определить сильные стороны и наиболее подходящие профессии на основе личных качеств и интересов ребенка.</span>
                <span className='mt-1'><b>Что включает?</b></span>
                <span className='mt-1'>Консультация с профориентатором и все виды отчетов на основе Gallup* (Тест Gallup сдается отдельно и в стоимость пакета не входит)</span>
            </div>}
            </span>
            </Card.Text>
            {expanded[2] ? <div style={{ marginTop: '-125px', marginLeft: '180px'}}>
              <span style={{color: '#393DA1'}}>Оставить заявку</span>
              <img src={blueArrowIcon} style={{ marginLeft: '8px', cursor: 'pointer' }} />
            </div> : <div className='d-flex justify-content-between' style={{marginTop: '-200px'}}>
            <div className='d-flex flex-column' style={{opacity: 0.5}}><span style={{fontSize: '14px'}}>Стоимость: 70 000 тг</span><span>Длительность: 2 часа</span></div>
                <button style={{ backgroundColor: '#474BB1', color: 'white', width: '210px', borderRadius: "15px" }}>
                              Оставить заявку
                              <img src={whiteArrowIcon} style={{ marginLeft: '8px', cursor: 'pointer' }} />
                          </button></div>}
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={3}>
      <Card style={{ marginTop: expanded[3] ? '-850px' : '-1035px', left: '-130px', borderRadius: '20px', height: expanded[3] ? '239px' : '423px', width: expanded[3] ? '359px' : '516px', transition: 'height 0.1s' }}>
          <Card.Body>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: expanded[3] ? -25 : 5, marginLeft: 5 }}>
              <img src={happyfamilyIcon} style={{ marginRight: '8px', marginBottom: -10 }} />
              <div className='d-flex flex-column'>
              <span style={{ fontWeight: 'bold', fontSize: '24px', paddingLeft: '5px', marginTop: expanded[3] ? '45px': 'auto' }}>Семье</span>
              <span style={{ opacity: expanded[3] ? 0 : 0.5, transition: 'opacity 0.3s', paddingLeft: 5 }}>Молодожены\ Пары\ Семьи </span>
              </div>
              <img
                src={expanded[3] ? dropdownIcon : updropIcon}
                onClick={() => toggleExpanded(3)}
                style={{  marginTop: '-50px', marginLeft: expanded[3] ? 'auto' : 'auto', cursor: 'pointer' }}
              />
            </div>
            <Card.Text style={{ height: expanded[3] ? '200px' : '450px', overflow: 'hidden' }}>
            <span style={{ opacity: expanded[3] ? 0.6 : 1, transition: 'opacity 0.3s' }}>
            {expanded[3] ? <div className='ms-1'><span style={{position: 'absolute', fontSize: '16px', paddingRight: 35, marginTop: -12}}>Даём продвинутый инструмент для оценки и развития команд, помогающий крупными компаниями и малым бизнесом</span></div> : <div className='d-flex flex-column mt-4 ms-1'>
                <span><b>Кому подходит?</b></span>
                <span className='mt-1'>Молодоженам, парам и семьям, стремящимся к лучшему взаимопониманию. Поможем: Наладить понимание и взаимодействие между супругами и улучшить семейную жизнь.</span>
                <span className='mt-1'><b>Что включает?</b></span>
                <span className='mt-1'>Консультация с профориентатором и отчеты на основе Gallup* (Тест Gallup сдается отдельно и в стоимость пакета не входит)</span>
            </div>}
            </span>
            </Card.Text>
            {expanded[3] ? <div style={{ marginTop: '-135px', marginLeft: '180px'}}>
              <span style={{color: '#393DA1'}}>Оставить заявку</span>
              <img src={blueArrowIcon} style={{ marginLeft: '8px', cursor: 'pointer' }} />
            </div> : <div className='d-flex justify-content-between' style={{marginTop: '-210px'}}>
            <div className='d-flex flex-column' style={{opacity: 0.5}}><span style={{fontSize: '14px'}}>Стоимость: 155 000 тг (два человека)</span><span>Длительность: 3 часа</span></div>
                <button style={{ backgroundColor: '#C5E0FF', color: '#393DA1', width: '210px', height: '45px', borderRadius: "15px" }}>
                              Оставить заявку
                              <img src={blueArrowIcon} style={{ marginLeft: '8px', cursor: 'pointer' }} />
                          </button></div>}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ExpandableCard;
