import React from 'react';
import Login from '../components/Login';
import './Home.css';
import {GoLink} from 'react-icons/go';



function Home() {


  // console.log(localStorage.userLoggedIn,localStorage.username)
  return (
    <div className="home-container">
      <div className="shortlinkr-card"></div>
    <div className="card mx-auto class" style={{width:'500px',boxShadow: '0px 0px 10px 2px #5cbdb9'}} >
      <div className='card-body'>
      <h1 className='card-title' style={{color:'#5cbdb9'}}>ShortLinkr<span><GoLink/></span></h1>
      
     <div>
           <Login/>
         </div>
      
    </div>
    </div>
    </div>
    

  );
}

export default Home;
