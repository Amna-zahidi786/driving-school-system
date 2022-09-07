import React from 'react'
import Header from '../Header/Header'
import './Branches.css'

export default function Branches() {
  return (
   <div className='content'>
   
                <Header/>
          
            <div className="branches mt-5">
                <h2>Branches</h2>
                <h4>These are branches of your school</h4>
                <div className="head-quarter">
                    <h4>Headquarters</h4>
                    <span>drivingschoolmanagementsystem@gamil.com</span>
                    <ul>
                        <li><i class="	fas fa-address-card"></i>49 Active Students</li>
                        <li><i class="fas fa-chalkboard-teacher"></i>6 Instructors</li>
                        <li> <i class="	fas fa-car"></i>3 Vehicles</li>
                        <li> <i class="	fas fa-map"></i>636 Jacqueline Drive, Garsfontein  </li>
                    </ul>
                </div>
            </div>
   </div>
  )
}
