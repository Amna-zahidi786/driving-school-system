import React from 'react'
import './Login.css'
import logo from "../../assets/logo.png"
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className='login-form-wrapper'>
            <img src={logo} alt='' />
            <h2>Welcome Back</h2>
            <p>A beautiful and powerful system for driving school</p>
            <label for="uname">Email Address</label><br></br>
            <input type="text" name="uname" required /><br />
            <label for="password">Password</label><br></br>
            <input type="password" name="password" required /><br /><br/>
            <button type="submit" class="btn btn-primary">Login Now</button>
            <ul className='accounts'>
            <li><Link to='/Account'>Create Account</Link></li>
                <li><Link to='/Password'>forget password?</Link></li>
            </ul>
        </div>

    )
}

export default Login