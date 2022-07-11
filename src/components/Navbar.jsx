import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'

export default function Navbar() {
  const [currentLink, setCurrentLink] = useState(1)
  return (
    <>
      <div class="sidebar">
        <img style={{ width: "70px" }} src={logo} alt="" />
       <i class></i> <a onClick={() => setCurrentLink(1)} className={currentLink === 1 ? "active" : ""} href="#">Dashboard</a>
        <a onClick={() => setCurrentLink(2)} className={currentLink === 2 ? "active" : ""} href="#">Schedule</a>
        <a onClick={() => setCurrentLink(3)} className={currentLink === 3 ? "active" : ""} href="#">Courses</a>
        <a onClick={() => setCurrentLink(4)} className={currentLink === 4 ? "active" : ""} href="#">Student</a>
        <a onClick={() => setCurrentLink(5)} className={currentLink === 5 ? "active" : ""} href="#">Branches</a>
        <a onClick={() => setCurrentLink(6)} className={currentLink === 6 ? "active" : ""} href="#">Setting</a>
      </div>

      <div class="content">

      <h3>Dashboard</h3>

<div className="row">
    <div className="col-md-3">
        <div className="student">
            <i class="fas fa-graduation-cap"></i>
            <h1>48</h1>
            <h4>Total Student</h4>
            <a href="">11%</a>
        </div>
    </div>
    <div className="col-md-3">
        <div className="student">
            <i class="bi bi-cash"></i>
            <h1>45,121</h1>
            <h4>Income</h4>
            <a href="">11%</a>
        </div>
    </div>
    <div className="col-md-3">
        <div className="student">
        <i class="bi bi-currency-dollar"></i>
            <h1>343,222</h1>
            <h4>Unpaid voices</h4>
            <a href="">11%</a>
        </div>
    </div>
    <div className="col-md-3">
        <div className="student">
            <i class="fas fa-child"></i>
            <h1>67%</h1>
            <h4>Class attendence</h4>
            <a href="">11%</a>
        </div>
    </div>
</div>
      </div>
    </>
  )
}




