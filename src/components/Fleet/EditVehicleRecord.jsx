import React from 'react'
import axios from 'axios'
import logo from "../../assets/logo.png"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const EditVehicleRecord = () => {
    
  const { id } = useParams();
  const [vehicle, setVehicle] = useState({
    Car_Type:'',
    Car_Number:'',
    Plate_Number:'',
    M_year:'',

  });
  const getSingleVehicle = async () => {
    
    const vehicleData = await axios.get(`http://localhost:7000/single/Vehicle/Record/${id}`);
    setVehicle(vehicleData.data.vehicleData);
  
  }

  console.log(vehicle)
  useEffect(() => {
    getSingleVehicle();
  }, [])

  const handleUpdate = async(event) => {
      event.preventDefault();
      const vehicleData = await axios.put(`http://localhost:7000/update-vehicle/${id}`, vehicle);
      console.log(vehicleData)
      if(vehicleData.statusText === 'OK'){
        alert('Data has been updated')
      }
  }
  return (
    <div className='login-form-wrapper'>
    <div className='main-wrapper'>
      <img src={logo} alt='' />

      <form onSubmit={handleUpdate}>
        <label htmlFor="uname">Car Type</label><br />
        <input onChange={(event) => setVehicle({...vehicle, Car_Type:event.target.value})} value={vehicle.Car_Type} type="text" name="title" /><br />

     
        <label htmlFor="uname">Car Number</label><br />
        <input onChange={(event) => setVehicle({...vehicle, Car_Number:event.target.value})} value={vehicle.Car_Number} type="text" name="title" /><br />

       
        <label htmlFor="uname">Plate Number</label><br />
        <input onChange={(event) => setVehicle({...vehicle, Plate_Number:event.target.value})} value={vehicle.Plate_Number} type="text" name="title" /><br />

        
        <label htmlFor="uname">Manufacture Year</label><br />
        <input onChange={(event) => setVehicle({...vehicle, M_year:event.target.value})} value={vehicle.M_year} type="text" name="title" /><br />


        <button style={{margin:"12px"}} className='btn' type="submit" class="btn btn-primary">Update</button>

      </form>
    </div>
  </div>
  )
}

export default EditVehicleRecord