import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import Header from '../Header/Header'
import './Fleet.css'
import axios from 'axios'
import { useState } from 'react'

export default function Fleet() {

  const [allVehicle, setAllVehicle] = useState();
  const getVehicleRecord = async () => {
    const vehicleData = await axios.get('http://localhost:7000/vehicle/record');
    setAllVehicle(vehicleData.data.vehicleData);
  }
  useEffect(() => {
    getVehicleRecord();
  }, [])

const handleDelete=async(id)=>{
console.log(id)
const res = await axios.delete(`http://localhost:7000/delete-vehicle/${id}`);
if(res.statusText === 'OK'){
  alert('Data has been deleted')
}

getVehicleRecord();
}

  return (
    <div className="content">
       <Header/>
      <div className="main-heading">
       <h1>Driving school Management System</h1>
     </div>
    
      <div className="transportation">
        <h2>Fleet</h2>
        <h4>Vehicles for your branch</h4>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Car type</th>
              <th scope="col">Car Number</th>
              <th scope="col">Number Plate</th>
              <th scope="col">Manufacture Year</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
          {
            allVehicle && allVehicle.map((vehicleData)=>{
              return <tr>
              <td>{vehicleData.Car_Type}</td>
              <td>{vehicleData.Car_Number}</td>
              <td>{vehicleData.Plate_Number}</td>
              <td>{vehicleData.M_year}</td>
              <td>
                <button onClick={()=>handleDelete(vehicleData._id)}>Delete</button>
                <Link className='edit-menu' to={`/edit-vehicle/${vehicleData._id}`}>Edit</Link>
              </td>
            </tr>
            })
          }

          </tbody>
        </table>

      </div>
    </div>
  )
}
