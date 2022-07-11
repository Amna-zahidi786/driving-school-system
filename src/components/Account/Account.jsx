import React from 'react'
import './Account.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

const Account = () => {
  

  
  return (
    <div className='create-account-wrapper'>
   <div className='main-wrapper'>
   <img src={logo} alt=''/>
    <h2>Creaate an account</h2>
    <p>A beautiful and powerful system for driving schools.</p>
    <label for="uname">Email Address</label><br></br>
            <input type="text" name="uname" required /><br />
            <label for="uname">First Name</label><br></br>
            <input type="text" name="uname" required /><br />
            <label for="uname">Last Name</label><br></br>
            <input type="text" name="uname" required /><br />
            <label for="uname">Driving school name</label><br></br>
            <input type="text" name="uname" required /><br />
            <label for="uname">Password</label><br></br>
            <input type="password" name="password" required /><br /><br/>
            <button className='btn' type="submit" class="btn btn-primary">Create Account</button>
            <ul>
              <li>
                <Link to='/Login'>Login Now</Link>
              </li>
            </ul>
   </div>
</div>
 
  )
}

export default Account