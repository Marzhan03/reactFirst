import logo from './logo.svg';
import './App.css';

import Footer from './components/Footer'
import Counter from './components/Counter'
import Login from './components/account/Login'
import Navbar from './components/account/Navbar'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
 

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
