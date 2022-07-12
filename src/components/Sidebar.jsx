import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'





export default function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1)
    return (
       <>
        <div class="sidebar">
        <img style={{ width: "70px" }} src={logo} alt="" />
       <Link onClick={() => setCurrentLink(1)} className={currentLink === 1 ? "active" : ""} to='/Dashboard'><i class="bi bi-speedometer2"></i>Dashboard</Link>
        <Link onClick={() => setCurrentLink(2)} className={currentLink === 2 ? "active" : ""} to='/schedule'><i class="bi bi-calendar-date"></i>Schedule</Link>
        <a onClick={() => setCurrentLink(3)} className={currentLink === 3 ? "active" : ""} href="#"><i  class="	fas fa-book-open"></i>Courses</a>
        <a onClick={() => setCurrentLink(4)} className={currentLink === 4 ? "active" : ""} href="#"><i class="	fas fa-address-card"></i>Student</a>
        <Link onClick={() => setCurrentLink(5)} className={currentLink === 5 ? "active" : ""} to='/Branches'><i class="fas fa-code-branch"></i>Branches</Link>
        <Link onClick={() => setCurrentLink(6)} className={currentLink === 6 ? "active" : ""} to='/School'> <i class="	fas fa-school"></i>School</Link>
        <a onClick={() => setCurrentLink(7)} className={currentLink === 7 ? "active" : ""} href="#"> <i class="bi bi-gear"></i>Setting</a>
      </div>
     
      </>
    );

}




