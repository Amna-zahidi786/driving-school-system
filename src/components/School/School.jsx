import React from 'react'
import './School.css'


export default function School() {
  return (
    <div className='content'>
        <div className="main-heading">
                <h1>Driving School Mangement System</h1>
            </div>
            <h2>Schools</h2>
            <h4>These are independent schools</h4>
            <div className="row">
                <div className="col-md-6">
                <div className="isb-branch">
                    <h4>Islamabad Driving School</h4>
                    <span>drivingschoolmanagementsystem@gamil.com</span>
                    <ul>
                        <li><i class="	fas fa-address-card"></i>0 Active Students</li>
                        <li><i class="fas fa-chalkboard-teacher"></i>0 Instructors</li>
                        <li> <i class="	fas fa-map-marker-alt"></i>0 Branches</li>
                        <li> <i class="fab fa-google-drive"></i>23B road</li>
                    </ul>
                </div>
                </div>
                 <div className="col-md-6">
                 <div className="isb-branch">
                    <h4>New York Dsriving School</h4>
                    <span>drivingschoolmanagementsystem@gamil.com</span>
                    <ul>
                        <li><i class="	fas fa-address-card"></i>0 Active Students</li>
                        <li><i class="fas fa-chalkboard-teacher"></i>0 Instructors</li>
                        <li> <i class="fas fa-map-marker-alt"></i>0 Branches</li>
                        <li> <i class="fab fa-google-drive"></i>Gandhinagar</li>
                    </ul>
                </div>
                </div>
            </div>
    </div>
  )
}
