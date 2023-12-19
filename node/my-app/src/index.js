import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import reportWebVitals from './reportWebVitals';
import Login from './components/account/Login'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './store';


// Ваш остальной код
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <BrowserRouter>
        <Routes>

          {/* <Route path="/" element={<Main />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
