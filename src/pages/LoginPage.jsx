import React from "react";
import './LoginPage.css';
import logo from './Digimed-icon.png';
const LoginPage = () => {
    return(
        <>
        <div className="icon-image" class='bg-white'>
         <br />
        <img src={ logo } alt="DigiMed" className='w-35 h-35 mx-auto bg-white'/>
        <br /><br />
        </div>
        <div className="start-bgcolour">
        <br /><br /><br />
        
        <div className="buttons">
         <input type="text" id='email-no' className='border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl bg-white'
         placeholder='Enter email/contact no.'/>
         <br /><br />
         <input type="password" id='password' className='border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl bg-white'
         placeholder='Enter password'/>
         <br /><br /><br />
         <button class="w-80 h-10 mx-auto block text-lg bg-[#00C9A7] text-white rounded-lg hover:bg-[#02eba1] transition-all duration-300">Log In</button>
         <h2>Forgot Password?</h2>
         <h2>Not a user?  <a href="#">Sign Up</a></h2>
         </div>
         </div>
        </>
    );
};

export default LoginPage;