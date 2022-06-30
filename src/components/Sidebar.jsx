import React, { useState } from 'react'
import "./Sidebar.css"
import styled from 'styled-components';
import logo from '../assets/logo.png'

const sidebar = () => {
  
    return (
        <section>
            <div className="top">
                <div className="brand">
                 <img style={{width:"90px"}}src={logo} alt=""/>
                </div>
                <div className="toggle"></div>
                <div className="links">
                    <ul>
                        <li className='active'><a href='#'>
                        <i class="bi bi-speedometer2"></i>
                            <span>Dashboard</span>
                        </a></li>

                        <li><a href='#'>
                        <i class="bi bi-calendar-date"></i>
                            <span>Scheduling</span>
                        </a></li>

                        <li><a href='#'>
                        <i class="bi bi-bell"></i>
                            <span>Notification</span>
                        </a></li>

                        <li><a href='#'>
                        <i class='fas fa-child'></i>
                            <span>Students</span>
                        </a></li>

                        <li><a href='#'>
                        <i class="bi bi-people-fill"></i>
                            <span>Instructors</span>
                        </a></li>

                        <li><a href='#'>
                        <i class="fas fa-code-branch"></i>
                            <span>Branches</span>
                        </a></li>

                        <li><a href='#'>
                        <i class='fas fa-award'></i>
                            <span>Courses</span>
                        </a></li>

                        <li><a href='#'>
                        <i class='fas fa-chalkboard-teacher'></i>
                            <span>Schools</span>
                        </a></li>

                        <li><a href='#'>
                        <i class="bi bi-gear"></i>
                            <span>Setting</span>
                        </a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default sidebar

const Section = styled.section;

