import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import {GoLink} from 'react-icons/go';

function ActivateAccount() {
  const { token } = useParams();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Send a request to your server to verify the token
    axios.get(`${API_BASE_URL}/activate/${token}`)
      .then((response) => {
        setMessage(response.data.message);
        // If verification is successful, navigate to the login page
        navigate('/login');

      })
      .catch((error) => {
        setMessage('Activation failed. Please try again or contact support.');
      });
  }, [token, navigate]);

  return (
    <div className="home-container">
    <div className="shortlinkr-card">
    <div className="card mx-auto class" style={{width:'500px',boxShadow: '0px 0px 10px 2px #5cbdb9'}} >
    <div className='card-body'>
    <h1 className='card-title'  style={{color:'#5cbdb9'}}>ShortLinkr<span><GoLink/></span></h1>
    <div className='card mx-auto class' style={{width:'300px'}}>
      <div className='card-body'>
      <h2 className='card-title' style={{color:'#5cbdb9'}}>Account Activation</h2>
      <p>{message}</p>
      <Link to="/" style={{color:'#5cbdb9'}}>Back to Login</Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default ActivateAccount;
