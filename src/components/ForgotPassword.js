import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import './ForgotPassword.css';
import {GoLink} from 'react-icons/go';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit= async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/forgot-password`, { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Forgot password request failed:', error);
    }
  };

  return (
    <div className="home-container">
      <div className="shortlinkr-card">
    <div className="card mx-auto class " style={{width:'500px',boxShadow: '0px 0px 10px 2px #5cbdb9'}} >
    <div className='card-body'>
    <h1 className='card-title' style={{color:'#5cbdb9'}}>ShortLinkr<span><GoLink/></span></h1>
    <div className='d-flex justify-content-center align-items-center'>
    <div className='card x-auto class' style={{width:'300px'}}> 
    <div className='card-body'>
      <h2 className='card-title' style={{color:'#5cbdb9'}}>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Email:</label>
          <input type="email"
          className='form-control'
          placeholder='Enter your email id'
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <br></br>
        <button type="submit" className="btn btn-danger" style={{backgroundColor:'#fbe3e8', color:'#5cbdb9'} }>Reset Password</button>
      </form>
      <br></br>
      <Link to="/" style={{color:'#5cbdb9'}}>Back to Login</Link>
      {message && <p>{message}</p>}
     
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default ForgotPassword;
