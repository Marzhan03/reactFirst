import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Counter from './components/Counter'
import LoginStud from './components/account/LoginStud'
import LoginProf from './components/account/LoginProf'
import Main from './components/main/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/login" element={<LoginStud/>} />
          <Route exact path="/login_prof" element={<LoginProf/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
