import React from 'react'
import './Header.css';
import user from '../../assets/user.png'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Header() {

  const handleLogout = async()=>{
    const res = await axios.get('http://localhost:7000/logout');
    localStorage.removeItem('user');
  }
  return (

    <div className="header-wrapper">
      <div className="search">
        <input type="text" placeholder='Search...' />
        <i class="fa fa-search"></i>
      </div>
      <div className="links">
        <div class="dropdown">
          <button class="dropbtn">Add Data</button>
          <div class="dropdown-content">
            <div className="link">
              <Link to='/TrainerForm'>Create Trainer</Link>
            </div>
            <div className="link">
              <Link to='/TutorialForm'>Create Tutorial</Link>
            </div>
            <div className="link">
              <Link to='/VehicleForm'>Create Vehicle</Link>
            </div>
          </div>
        </div>

        <div className="logout">
          <div className="link">
            <div class="dropdown">
              <button class="dropbtn"><i class="fa fa-user" aria-hidden="true"></i></button>
              <div class="dropdown-content">
                <button><i class="fa fa-user"></i>Profile</button>
                <button><i class="fa fa-cog"></i>Setting</button>
                <button onClick={handleLogout}><i class="fas fa-sign-out-alt"></i>Logout</button>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>


  )
}
