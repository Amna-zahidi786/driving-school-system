import React from 'react'
import './Courses.css'
import course1 from '../../assets/course1.png'
import course2 from '../../assets/course2.png'
import course3 from '../../assets/course3.png'
import course4 from '../../assets/course4.png'
import course5 from '../../assets/course5.png'

export default function Courses() {
  return (
    <div className="content">
        <div className="main-heading">
            <h1>Driving school Management System</h1>
        </div>
        <div className="courses-wrapper">
                <h2>Courses</h2>
                <h5>Manage courses offered on your school.</h5>
                <div className="row">
                    <div className="col-md-4">
                                  
                                   <img src={course1} alt="" />
                                   <h3>Digital Logic Design</h3>
                    </div>
                    <div className="col-md-4">
                   
                                   <img src={course2} alt="" />
                                   <h3>React</h3>
                        </div>
                        <div className="col-md-4">
                      
                                   <img src={course3} alt="" />
                                   <h3>Visual Basic</h3>
                        </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                                  
                                   <img src={course4} alt="" />
                                   <h3>Web Development</h3>
                    </div>
                    <div className="col-md-4">
                   
                                   <img src={course5} alt="" />
                                   <h3>Object Oriented programming</h3>
                        </div>
                       
                </div>
        </div>
    </div>
  )
}
