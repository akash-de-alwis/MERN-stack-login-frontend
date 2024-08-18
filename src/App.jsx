import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios8 from 'axios';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the backend
    fetch('http://localhost:3002/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Show a popup message based on the response
        alert(data); // This will show the response from the backend in an alert box
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="card p-4 shadow" style={{ width: '400px', borderRadius: '20px' }}>
        <h2 className="card-title text-center">Sign-In</h2>
        <p className="text-center mt-3 small">Hello sir,sign-in to access the service oparations.</p>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Log in</button>
        </form>
        <br></br>
        <button type="button" className="btn btn-light w-100">Create Account</button>
      </div>
    </div>
  );
}

export default App;
