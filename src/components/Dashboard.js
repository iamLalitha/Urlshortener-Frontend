import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { GoLink } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';

function Dashboard() {
  const [userURLs, setUserURLs] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate();
 // console.log(userURLs);
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(`${API_BASE_URL}/urls/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setUserURLs(response.data);
    })
    .catch((error) => {
      console.error('Error fetching user URLs:', error);
    });
  }, []);
  const handleLogout = () => {
    logout(); 
    navigate('/login'); 
  };

  return (
    <div className="home-container">
      <div className="shortlinkr-card">
      <div
          className="card mx-auto class"
          style={{ width: '500px', boxShadow: '0px 0px 10px 2px #5cbdb9' }}
        >
          <div className="card-body">
            <h1 className="card-title" style={{ color: '#5cbdb9' }}>
              ShortLinkr<span><GoLink /></span> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span><button onClick={handleLogout}  className="btn btn-danger" style={{fontSize:'15px',backgroundColor:'#fbe3e8', color:'#5cbdb9'}}>Logout</button></span>
            </h1>
            
    <h3 className="text-center mb-4">Dashboard</h3>
    <div className="row">
      <div className="col">
        <h4 className="mb-3">Links You Created</h4>
        <div className="table-responsive">
        <table className="table table-success table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Short URL</th>
              <th scope="col">Title</th> 
              <th scope="col">Long URL</th>
              <th scope="col">Clicks</th>
              <th scope="col">Created On</th>
            </tr>
          </thead>
          <tbody>
            {userURLs.map((url) => (
              <tr key={url._id}>
                <td>
                  <a
                    href={`${API_BASE_URL}/${url.shorturl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {url.shorturl}
                  </a>
                </td>
                <td>{url.title}</td>
                <td>{url.longurl}</td>
                <td>{url.clicks}</td>
                <td>{url.createdon}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
);
}


export default Dashboard;
