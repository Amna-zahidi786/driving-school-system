import React from 'react'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import './Password.css'

const Password = () => {
  return (
    <div className='forget-password'>
            <img src={logo} alt='' />
            <h2>Forgot password</h2>
            <p>Don't worry if you forgot your password enter </p>
              <p>your email and you can reset it.</p>
            <label for="uname">Email Address</label><br></br>
            <input type="text" name="uname" required /><br /><br/>
           
            <button type="submit" class="btn btn-primary">Reset password</button>
            <ul className='accounts'>
            <li><Link to='/Account'>Login Now</Link></li>
               
            </ul>
        </div>
  )
}

export default Password