import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Registration from './components/Registration';
import URLShortening from './components/URLShortening';
import ActivateAccount from './components/ActivateAccount';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
      <Route  path="/" element={<Home/>} />
      <Route path="/register" element={<Registration/>} />
      <Route path="/activate/:token" element={<ActivateAccount/>} /> 
      <Route path="/login" element={<Login/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/reset-password/:token" element={<ResetPassword/>} />
      <Route path="/url-shortening" element={<URLShortening/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
        
        </Routes>

    </Router>
  );
}

export default App;

