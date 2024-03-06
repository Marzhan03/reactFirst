import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Counter from './components/Counter'
import LoginStud from './components/account/LoginStud'
import LoginProf from './components/account/LoginProf'
import Login from './components/account/AnimatedLogin';
import Main from './components/main/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/login" element={<LoginStud/>} />
          <Route exact path="/login_prof" element={<LoginProf/>} />
          <Route exact path="/animated" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
