import React, { Component } from 'react';
import './LoginSignup.css';

class LoginSignup extends Component {
  render() {
    return (
      <div className="login-signup-container">
        <div className='center-container'>
        <img src={process.env.PUBLIC_URL + '/digimed-logo.png'} alt="DigiMed Logo" />
        </div>
      <div>
      
      
      <img src={process.env.PUBLIC_URL + '/clip-doctor-and-patient 1.png'} alt="DigiMed Logo" />
     </div>
     <div className='thumbnail-container'>
        <p> Streamline your healthcare <br></br> management with one easy app </p>
     </div>
        <div className="form-container">
          <button className="form-button">Sign Up</button>
          <button className="form-button">Log In </button>
        </div>
      </div>
    );
  }
}

export default LoginSignup;