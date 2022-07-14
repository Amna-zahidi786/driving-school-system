import React from 'react'
import './Fleet.css'

export default function Fleet() {
    return (
        <div className="content">
            <div className="main-heading">
                <h1>Driving School Mangement System</h1>
            </div>
           <div className="transportation">
            <h2>Fleet</h2>
            <h4>Vehicles for your branch</h4>
            <table>
  <tr style={{color:"grey"}}>
    <th>#</th>
    <th>Car Type</th>
    <th>Car No.</th>
    <th>Plate</th>
    <th>M. Year</th>
    <th>Instructor</th>
    <th>Action</th>
  </tr>
  <tr style={{color:"#333333"}}>
    <th>1</th>
    <th>TOYOTA Crolla</th>
    <th>#33</th>
    <th>as-c-132</th>
    <th>1985</th>
    <th>Un-Assigned</th>
    <th><button type="button" class="btn btn"><i class="bi bi-calendar"></i>Schedule</button></th>
  </tr>
  <tr style={{color:"#333333"}}>
    <th>2</th>
    <th>Volks Wagon Manual</th>
    <th>#1234</th>
    <th>ab123</th>
    <th>1995</th>
    <th>Un-Assigned</th>
    <th><button type="button" class="btn btn"><i class="bi bi-calendar"></i>Schedule</button></th>
  </tr>
 
  <tr style={{color:"#333333"}}>
    <th>3</th>
    <th>Ford Focus</th>
    <th>#4</th>
    <th>SKS12901</th>
    <th>2012</th>
    <th>Un-Assigned</th>
    <th><button type="button" class="btn btn"><i class="bi bi-calendar"></i>Schedule</button></th>
  </tr>
 
</table>

           </div>
        </div>
    )
}
