import React from 'react'
import './Header.css'
import user_icon from '../../assets/user_icon.ico'
import {Link} from 'react-router-dom'

export default function Header() {
  return (

    <div className="content">
      <div className="header-wrapper">
        <ul>
          <li><Link to='/Notification'><i class="far fa-bell"></i></Link></li>
          <li><img style={{width:"20px"}} src={user_icon} alt="" /><a href="">
            <select style={{border:"none"}}>
            <option>Profile</option>
            <option>Setting</option>
            <option>Logout</option>
          </select></a></li>
        </ul>
      </div>
    </div>

  )
}
