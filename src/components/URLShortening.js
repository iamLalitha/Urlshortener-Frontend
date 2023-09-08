import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { GoLink } from 'react-icons/go';
import { Link } from 'react-router-dom';
import url from '../url.jpg'; 

function URLShortening() {
  const [title, setTitle] = useState(''); 
  const [longURL, setLongURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');

  const handleURLShorten = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      console.log('Token:', token);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        `${API_BASE_URL}/shorten`,
        { originalURL: longURL, title: title },
        config
      );

      setShortenedURL(response.data.shorturl);
    } catch (error) {
      console.error('URL shortening failed:', error);
    }
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
          </h1>
          <div className="row">
            <div className="col-md-6">
              <h4 className="card-title" style={{ color: '#5cbdb9' }}>URL Shortening</h4>
              <br></br>
              <form onSubmit={handleURLShorten}>
              <div className="form-group">
               <input
                   type="text"
                          placeholder="Enter a title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)} 
                        />
                      </div>
                      <br></br>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter a long URL"
                    value={longURL}
                    onChange={(e) => setLongURL(e.target.value)}
                  />
                </div>
                <br></br>
                
                <button
                  type="submit"
                  className="btn btn-danger"
                  style={{ backgroundColor: '#fbe3e8', color: '#5cbdb9' }}
                >
                  Shorten
                </button>
              </form>
              <br></br>
              <Link to="/dashboard">Go to Dashboard</Link>
              {shortenedURL && (
                <div>
                  <p>Shortened URL:   <a
                    href={shortenedURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  > {shortenedURL}
                  </a></p>
                </div>
              )}
            </div>
            <div className="col-md-6">
              <img
                src={url}
                alt="Your"
                style={{ width: '100%', maxWidth: '200px',height:'250px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}


export default URLShortening;


 