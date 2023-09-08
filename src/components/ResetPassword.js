import React from 'react';
import { useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import {GoLink} from 'react-icons/go';

function ResetPassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/reset-password/${token}`, { newPassword });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Password reset failed:', error);
      if (error.response) {
        console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
      }
      setMessage('Password reset failed. Please try again later.');
    }
  };

  return (
    <div className="home-container">
    <div className="shortlinkr-card">
    <div className="card mx-auto class" style={{width:'500px',boxShadow: '0px 0px 10px 2px #5cbdb9'}} >
    <div className='card-body'>
    <h1 className='card-title'>ShortLinkr<span><GoLink/></span></h1>
    <div className='d-flex justify-content-center align-items-center'>
    <div className='card x-auto class' style={{width:'300px'}}> 
     <div className='card-body'>
      <h2 className='card-title'>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br></br>
        <button type="submit" className="btn btn-danger" style={{fontSize:'15px',backgroundColor:'#fbe3e8', color:'#5cbdb9'}}>Reset Password</button>
      </form>
      <Link to="/login">Back to Login</Link>
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

export default ResetPassword;
