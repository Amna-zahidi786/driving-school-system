import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'





export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1)
  return (
    <>

      <div class="sidebar">
        <img style={{ width: "80px" }} src={logo} alt="" />
        <Link onClick={() => setCurrentLink(1)} className={currentLink === 1 ? "active" : ""} to='/Dashboard'><i class="bi bi-speedometer2"></i>Dashboard</Link>
        <Link onClick={() => setCurrentLink(2)} className={currentLink === 2 ? "active" : ""} to='/schedule'><i class="bi bi-calendar-date"></i>Schedule</Link>
        <Link onClick={() => setCurrentLink(3)} className={currentLink === 3 ? "active" : ""} to='/Courses'><i class="	fas fa-book-open"></i>Courses</Link>
        <a onClick={() => setCurrentLink(4)} className={currentLink === 4 ? "active" : ""} href="#"><i class="	fas fa-address-card"></i>Student</a>
        <Link onClick={() => setCurrentLink(5)} className={currentLink === 5 ? "active" : ""} to='/Branches'><i class="fas fa-code-branch"></i>Branches</Link>
        <Link onClick={() => setCurrentLink(6)} className={currentLink === 6 ? "active" : ""} to='/School'> <i class="	fas fa-school"></i>School</Link>
        <Link onClick={() => setCurrentLink(7)} className={currentLink === 7 ? "active" : ""} to='/Fleet'> <i class="		fas fa-car"></i>Fleet</Link>
        <Link onClick={() => setCurrentLink(8)} className={currentLink === 8 ? "active" : ""} to='/Notification'> <i class="far fa-bell"></i>Notification</Link>
        <a onClick={() => setCurrentLink(9)} className={currentLink === 9 ? "active" : ""} href="#"> <i class="bi bi-gear"></i>Setting</a>
      </div>

    </>
  );

}




