import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from 'styled-components';
import sideLeftImage from "../../assets/images/sideleft.svg";
import sideRightImage from "../../assets/images/sideRight.png";
import girlLeftImage from "../../assets/images/girlleft.svg";
import vectorImage from "../../assets/images/Vector.svg";
import styles from '../../assets/css/main.module.css';
import vectorLeftImage from "../../assets/images/VectorLeft.svg";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LoginNavbar from './LoginNavbar';
import WhiteVectorImage from "../../assets/images/WhiteVector.svg";
import { Nav, Navbar } from 'react-bootstrap';
import sidebarIcon from "../../assets/images/sidebar.svg";
import { useState } from 'react';

const mobile = (...args) => css`
  @media (max-width: 768px) {
    ${css(...args)}
  }
`;

const desktop = (...args) => css`
  @media (max-width: 2000px) {
    ${css(...args)}
  }
`;

const Container = styled.div`
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  top: 150px;
  left: 450px;
  width: 988px;
  min-height: 700px;
`;

const StudContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props =>
    props.signingIn !== true
      ? `
  transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	`
      : null}
`;

const ProfContainer = styled.div`
  position: absolute;
  height: 100%;
  transition: all 0.6s ease-in-out;
  width: 50%;
  z-index: 2;
  ${props => (props.signingIn !== true ? `transform: translateX(100%);` : null)}
`;

const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 0 35px;
  height: 100%;
  text-align: center;
  position: absolute;
  z-index: 150;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 32px;
  align: right;
`;

const Input = styled.input`
  background-color: #FFFFFF;
  border: 1px solid #ADADAD;
  border-radius: 10px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 410px;
  &:focus {
    border:1px solid #4285F4; 
    outline: none;
  }
`;

const InputMobile = styled.input`
  background-color: #FFFFFF;
  border: 1px solid #ADADAD;
  border-radius: 10px;
  padding: 12px 15px;
  margin: 8px 0 15px;
  width: 350px;
  height: 60px;
  &:focus {
    border:1px solid #4285F4; 
    outline: none;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  border: 1px solid #393DA1;
  background-color: #393DA1;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  width: 410px;
  padding: 12px 45px;
  letter-spacing: 1px;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

const ButtonMobile = styled.button`
  border-radius: 10px;
  border: 1px solid #393DA1;
  background-color: #393DA1;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
  width: 350px;
  padding: 12px 45px;
  letter-spacing: 1px;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;


const GhostButton = styled(Button)`
  background-color: #FFFFFF;
  color: #393DA1;
  font-size: 16px;
  border-color: #ffffff;
  border-radius: 25px;
  width: 200px;
  height: 40px;
`;

const GhostButtonMobile = styled(Button)`
  background-color: #426BD4;
  color: #FFFFFF;
  font-size: 16px;
  border-color: #ffffff;
  border-radius: 25px;
  width: 220px;
  height: 45px;
  margin-left: 180px;
`;

const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;


const Overlay = styled.div`
  color: #ffffff;
  position: absolute;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (props.signingIn !== true ? `transform: translateX(50%);` : null)}
`;

const ImageLeft = styled.img`
  position: absolute;
  top: 23px;
  left: 20px;
  width: 23%;
  height: 93%;
  border-radius: 15px;
  object-fit: cover;
`;

const GirlLeft = styled.img`
  position: absolute;
  top: -15px;
  left: 8px;
  width: 555px;
  height: 993px;
`;

const ImageRight = styled.img`
  position: absolute;
  top: 23px;
  right: 20px;
  width: 23%;
  height: 93%;
  border-radius: 15px;
  object-fit: cover;
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const LeftOverlayPanel = styled(OverlayPanel)`
  top: -150px;
  left: -150px;
  transform: translateX(0);
  ${props => (props.signingIn !== true ? `transform: translateX(-20%);` : null)}
`;

const RightOverlayPanel = styled(OverlayPanel)`
  top: -150px;
  right: -200px;
  transform: translateX(0);
  ${props => (props.signingIn !== true ? `transform: translateX(20%);` : null)}
`;


const Paragraph = styled.span`
  font-size: 16px;
  font-weight: 400;
  weght: 200px;
  align: right;
  line-height: 24px;
  margin: 20px 0 30px;
  color: #D7D8EC;
`;

const SCol = styled(Col)`
  ${mobile`
    display: none; // Скрыть колонку для мобильных устройств
  `}
`;


export { Container, StudContainer, ProfContainer, Form, Title, Input, Button, GhostButton, Anchor, OverlayContainer, Overlay, OverlayPanel, LeftOverlayPanel, RightOverlayPanel, Paragraph, mobile, SCol, InputMobile, ButtonMobile, GhostButtonMobile, desktop };

export default function Login() {
  const [signIn, toggle] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [prof, setProf] = useState(true); // true - студент, false - профориентатор

  const handleToggle = (value) => {
    setProf(value);
  };
  return (
    <><SCol className={`${styles.back}`}>
          <Row style={{ position: 'absolute', marginTop: 70, marginLeft: 450 }}><LoginNavbar /></Row>
          <Container>
              <StudContainer signingIn={signIn}>
                  <Form>
                      <div><h5 style={{ position: 'absolute', color: '#000', top: 70 }}>C возвращением,</h5>
                          <h3 style={{ color: '#393DA1', position: 'absolute', top: 100 }}>Студент!</h3></div>
                      <h1 style={{ position: 'absolute', top: 190 }}>Вход</h1>
                      <span className="mb-1 mt-5">Введите свое имя или почту</span>
                      <Input
                          type="email"
                          placeholder="Имя или почта"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />

                      <span className="mb-1">Введите пароль</span>
                      <Input
                          type="password"
                          placeholder="Пароль"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)} />
                      <Anchor style={{ position: 'absolute', top: 455, left: 335, color: '#AD3113' }}>Забыли пароль?</Anchor>
                      <Button style={{ position: 'absolute', top: 530 }}>Войти</Button>
                  </Form>
              </StudContainer>
              <ProfContainer className="ms-3" signingIn={signIn}>
                  <Form>
                      <div><h5 style={{ position: 'absolute', top: 70 }}>C возвращением,</h5>
                          <h3 style={{ color: '#393DA1', position: 'absolute', top: 100 }}>Профориентатор!</h3></div>
                      <h1 style={{ position: 'absolute', top: 190 }}>Вход</h1>
                      <span className="mb-1 mt-5">Введите свое имя или почту</span>
                      <Input
                          type="email"
                          placeholder="Имя или почта"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onClick={() => toggle(true)} />

                      <span className="mb-1">Введите пароль</span>
                      <Input
                          type="password"
                          placeholder="Пароль"
                          value={password} />
                      <Anchor style={{ position: 'absolute', top: 455, left: 335, color: '#AD3113' }}>Забыли пароль?</Anchor>
                      <Button style={{ position: 'absolute', top: 530 }}>Войти</Button>
                  </Form>
              </ProfContainer>
              <OverlayContainer signingIn={signIn}>
                  <Overlay signingIn={signIn}>
                      <ImageLeft src={sideLeftImage} />
                      <GirlLeft src={girlLeftImage} />
                      <ImageRight src={sideRightImage} />
                      <LeftOverlayPanel signingIn={signIn}>

                          <span style={{ position: 'absolute', color: '#FFFFFF', top: 216, left: 400, fontSize: '32px' }}>Вы профориентатор?</span>
                          <span style={{ position: 'absolute', color: '#D7D8EC', top: 274, left: 400, fontSize: '16px' }}>Если вы являетесь студентом, учащимся или</span>
                          <span style={{ position: 'absolute', color: '#D7D8EC', top: 295, left: 400, fontSize: '16px' }}>обычным человеком, то перейдите по кнопке</span>
                          <span style={{ position: 'absolute', color: '#D7D8EC', top: 316, left: 400, fontSize: '16px' }}>ниже</span>
                          <GhostButton style={{ position: 'absolute', width: '220px', top: 368, left: 400 }} onClick={() => toggle(true)}>
                              <img src={vectorLeftImage} style={{ position: 'absolute', marginLeft: -90, marginTop: -10 }}></img>
                              <span style={{ position: 'absolute', marginTop: -12, marginLeft: -70 }}>Профориентатору</span>
                          </GhostButton>
                      </LeftOverlayPanel>
                      <RightOverlayPanel signingIn={signIn}>
                          <span style={{ position: 'absolute', color: '#FFFFFF', top: 224, left: 355, fontSize: '32px' }}>Вы не профориентатор?</span>
                          <span style={{ position: 'absolute', color: '#D7D8EC', top: 274, left: 378, fontSize: '16px' }}>Если вы являетесь студентом, учащимся или</span>
                          <span style={{ position: 'absolute', color: '#D7D8EC', top: 295, left: 369, fontSize: '16px' }}>обычным человеком, то перейдите по кнопке</span>
                          <span style={{ position: 'absolute', color: '#D7D8EC', top: 315, left: 680, fontSize: '16px' }}>ниже</span>
                          <GhostButton style={{ position: 'absolute', marginLeft: 290, top: 371, width: 160 }} onClick={() => toggle(false)}>
                              <span style={{ position: 'absolute', marginTop: -12, marginLeft: -55 }}>Студенту</span>
                              <img src={vectorImage} style={{ position: 'absolute', marginLeft: 35, marginTop: -11 }}></img>
                          </GhostButton>
                      </RightOverlayPanel>
                  </Overlay>
              </OverlayContainer>
          </Container>
      </SCol>
      <Col className={`d-block d-lg-none`}>
      <Row>
        <Col xs={3}>
        <div className="sidebar">
        <Navbar expand="lg" className="flex-column">
  <Navbar.Toggle  style={{border: 'none', outline: 'none', marginTop: 15, '&:focus': {
          border: 'none',
          outline: 'none',
        }, }} aria-controls="basic-navbar-nav">
    <img src={sidebarIcon} style={{
        width: '30px',
        height: '30px',
        border: 'none',
        outline: 'none',
        '&:active': {
          border: 'none',
          outline: 'none',
        },
      }} />
  </Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="flex-column">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Services</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
        </Col>
        <Col xs={9}>
        <LoginNavbar />
        </Col>
       </Row>
      {prof ? (
        <><div className='' style={{ backgroundColor: '#DBF7FF', height: '200px', width: '430px' }}>
                      <div className='d-flex flex-column' style={{ marginLeft: 33 }}>
                          <span style={{ fontWeight: 'bold', marginBottom: 10, marginTop: 20 }}>Вы профориентатор?</span>
                          <span>Если вы являетесь студентом, учащимся или</span>
                          <span>обычным человеком, то перейдите по кнопке</span>
                          <span>ниже</span>
                      </div>
                      <GhostButtonMobile onClick={() => handleToggle(false)}>
                          <span style={{ position: 'absolute', marginTop: -12, marginLeft: -90 }}>Профориентатору</span>
                          <img src={WhiteVectorImage} style={{ position: 'absolute', marginLeft: 80, marginTop: -11 }} />
                      </GhostButtonMobile>
                  </div><Form style={{}}>
                          <div style={{ marginTop: -440 }}>
                              <h5 style={{ color: '#000' }}>C возвращением,</h5>
                              <h3 style={{ color: '#393DA1', marginLeft: -70, marginBottom: 50 }}>Студент!</h3>
                          </div>
                          <span style={{ marginBottom: 10 }}>Введите свое имя или почту</span>
                          <InputMobile type="email" placeholder="Имя или почта" value={email} onChange={(e) => setEmail(e.target.value)} />
                          <span className="mb-2">Введите пароль</span>
                          <InputMobile type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                          <Anchor style={{ position: 'absolute', top: 355, left: 275, color: '#AD3113' }}>Забыли пароль?</Anchor>
                          <ButtonMobile style={{}}>Войти</ButtonMobile>
                      </Form></>
      ) : (
        <><div className='' style={{ backgroundColor: '#DBF7FF', height: '200px', width: '430px' }}>
                          <div className='d-flex flex-column' style={{ marginLeft: 33 }}>
                              <span style={{ fontWeight: 'bold', marginBottom: 10, marginTop: 20 }}>Вы не профориентатор?</span>
                              <span>Если вы являетесь студентом, учащимся или</span>
                              <span>обычным человеком, то перейдите по кнопке</span>
                              <span>ниже</span>
                          </div>
                          <GhostButtonMobile onClick={() => handleToggle(true)}>
                              <span style={{ position: 'absolute', marginTop: -12, marginLeft: -90 }}>Студенту</span>
                              <img src={WhiteVectorImage} style={{ position: 'absolute', marginLeft: 80, marginTop: -11 }} />
                          </GhostButtonMobile>
                      </div><Form style={{}}>
                              <div style={{ marginTop: -440 }}>
                                  <h5 style={{ color: '#000', marginLeft: -32,}}>C возвращением,</h5>
                                  <h3 style={{ color: '#393DA1', marginBottom: 50 }}> Профориентатор!</h3>
                              </div>
                              <span style={{ marginBottom: 10 }}>Введите свое имя или почту</span>
                              <InputMobile type="email" placeholder="Имя" value={email} onChange={(e) => setEmail(e.target.value)} />
                              <span className="mb-2">Введите пароль</span>
                              <InputMobile type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                              <Anchor style={{ position: 'absolute', top: 355, left: 275, color: '#AD3113' }}>Забыли пароль?</Anchor>
                              <ButtonMobile style={{}}>Войти</ButtonMobile>
                          </Form></>
      )}
      </Col>
      </>
  );
}
