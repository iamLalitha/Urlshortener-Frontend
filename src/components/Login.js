import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import { useAuth } from '../authContext';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); 
  const { login } = useAuth(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userCredentials = {
      email,
      password,
    };

    axios.post(`${API_BASE_URL}/login`, userCredentials)  
      .then(response => {
        console.log('Login successful:', response.data, response.data.userid);
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('username', response.data.username)
        localStorage.setItem('userid',response.data.userid);
        localStorage.setItem('token', response.data.token); 
        login(response.data.user)
        navigate("/url-shortening" ); 
      })
      .catch(error => {
        console.error('Login error:', error);
        
      });
  };

  return (

    
    <div className='card mx-auto class' style={{width:'300px'}}>
      <div className='card-body'>
      <h2 className='card-title' style={{color:'#5cbdb9'}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            placeholder='Enter your email id'
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
        <br></br>
        <button type="submit" className="btn btn-danger" style={{backgroundColor:'#fbe3e8', color:'#5cbdb9'} }>Login</button>
      </form>
      <br></br>
      <div>
        <Link to="/forgot-password" style={{color:'#5cbdb9'}}>Forgot password?</Link>
      </div>
      <div>
      <Link to="/register" style={{color:'#5cbdb9'}}> Don't have an account?</Link>
      </div>
    </div>
    </div>
  );
}

export default Login;


























































// import React, { useState } from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
// import { API_BASE_URL } from '../config';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
//       // Handle successful login 
//       console.log('Login successful', response.data);
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//       <Link to="/forgot-password">Forgot Password?</Link>
//       <br />
//       <Link to="/register">Don't have an account?</Link>
//     </div>
//   );
// }

// export default Login;
