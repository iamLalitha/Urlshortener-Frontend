import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { useAuth } from '../authContext';
//import {useNavigate} from 'react-router-dom'; 
import {GoLink} from 'react-icons/go';

function Registration() {

  //const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
      firstName,
      lastName
    };

    axios.post(`${API_BASE_URL}/register`, newUser)  
      .then(response => {
        console.log('Registration successful:', response.data);
        setRegistrationMessage(
          'User registered! Please check your email to activate your account.'
        );
        login(response.data.user);
       // navigate("/url-shortening" ); 
      })
      .catch(error => {
        console.error('Registration error:', error);
        // Handle registration error
      });
  };

  return (

    <div className="home-container">
    <div className="shortlinkr-card">
    <div className="card mx-auto class" style={{width:'500px',boxShadow: '0px 0px 10px 2px #5cbdb9'}} >
    <div className='card-body'>
    <h1 className='card-title'  style={{color:'#5cbdb9'}}>ShortLinkr<span><GoLink/></span></h1>
    <div className='card mx-auto class' style={{width:'300px'}}>
      <div className='card-body'>
      <h2 className='card-title' style={{color:'#5cbdb9'}}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
       <label>Email:</label>
          <input
            type="email"
            placeholder='Enter you email id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder='Enter the password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className='form-group'>
        <label>FirstName:</label>
       <input
          type="text"
          placeholder='Enter your Firstname'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="form-control"
          required
  />
        </div>
        <div className='form-group'>
        <label>LastName:</label>
       <input
          type="text"
          placeholder='Enter your Lastname'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="form-control"
          required
  />
        </div>
        <br></br>
        <button type="submit" className="btn btn-danger" style={{backgroundColor:'#fbe3e8', color:'#5cbdb9'} } >Register</button>
        {registrationMessage && (
                    <div className="alert alert-success mt-2">
                      {registrationMessage}
                    </div>
                  )}
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Registration;