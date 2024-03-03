import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './LoginPage.css';
import logo from './Digimed-icon.png';

const LoginPage = () => {
    const [emailOrContact, setEmailOrContact] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = () => {
        // Perform validation here
        
        if(!emailOrContact && !password) {
            setErrorMessage("Please enter email/contact no. and password");
        }
        else if (!emailOrContact) {
            setErrorMessage("Please enter email/contact no.");
        } else if (!password) {
            setErrorMessage("Please enter password");
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailOrContact) && !/^\d{10}$/.test(emailOrContact)) {
            setErrorMessage("Please enter a valid email or contact no.");
        // you actually don't need to check for password length, because this is a login page
        // but what you need to check is it is the same password as the one in the database
        } else {
            setErrorMessage("");
        }        
    };

    return (            
            <div className="App" style={{backgroundColor: '#F4EDFF'}}>
                <div className="icon-image" className='bg-white'>
                    <br />
                    <img src={logo} alt="DigiMed" className='w-35 h-35 mx-auto bg-white' />
                    <br /><br />
                </div>
                <div className="start-bgcolour">
                    <br /><br /><br />

                    <div className="buttons">
                        <input
                            type="text"
                            id='email-no'
                            className='border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl bg-white'
                            placeholder='Enter email/contact no.'
                            value={emailOrContact}
                            onChange={(e) => setEmailOrContact(e.target.value)}
                        />
                        <br /><br />
                        <input
                            type="password"
                            id='password'
                            className='border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl bg-white'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br /><br /><br />
                        <button
                            className="w-80 h-10 mx-auto block text-lg bg-[#00C9A7] text-white rounded-lg hover:bg-[#02eba1] transition-all duration-300"
                            onClick={handleLogin}
                        >
                            Log In
                        </button>
                        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                        <h2>Forgot Password?</h2>
                        <h2>Not a user?  <Link to="/register"><b>Sign Up</b></Link></h2>
                    </div>
                </div>
            </div>
        
    );
};

export default LoginPage;