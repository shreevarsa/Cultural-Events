import React from 'react'

import '../styles/Register.css';
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";
import event from "../assets/event.jpg"

const Register = () => {
  return (
    <div className='container' style={{ backgroundImage: `url(${event})`}}>
      <div className='header'>
        
          <div className='text'>Sign Up</div>
          <div className='underline'></div>
        

          <div className='inputs'>
            <div className='input'>
              <AiOutlineUser className='person'/>
              <input type='text' placeholder='Name' />
            </div>

            <div className='input'>
              <MdMailOutline className='mail'/>
              <input type='email' placeholder='Email ID' />
            </div>

        <   div className='input'>
              <RiLockPasswordLine className='password'/>
              <input type='password' placeholder='Password' />
            </div>

            <div className='input'>
              <input type='college' placeholder='Name of your College'/>
            </div>
          </div>

          <div className='forgotPassword'>Forgot Password??? <span>Click Here!!!</span></div>

          <div className='submit-container'>
            <div className='submit'>Sign Up</div>
            <div className='submit'>Login</div>
          </div>

        </div>
      </div>
    
  )
}

export default Register



