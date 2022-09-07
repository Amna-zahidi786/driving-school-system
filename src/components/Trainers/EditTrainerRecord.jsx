import React from 'react'
import axios from 'axios'
import logo from "../../assets/logo.png"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const EditTrainerRecord = () => {
    const { id } = useParams();
  const [trainer, setTrainer] = useState({
    instructor_name: '',
    designation:' ',
    date_of_joining: '',
    shift: '',

  });
  const getSingleTrainer = async () => {
    
    const trainerRecord = await axios.get(`http://localhost:7000/single/trainer/record/${id}`);
    setTrainer(trainerRecord.data.trainerRecord);
  
  }

  console.log(trainer)
  useEffect(() => {
    getSingleTrainer();
  }, [])

  const handleUpdate = async(event) => {
      event.preventDefault();
      const trainerRecord = await axios.put(`http://localhost:7000/update-trainer/${id}`, trainer);
      console.log(trainerRecord)
      if(trainerRecord.statusText === 'OK'){
        alert('Data has been updated')
      }
  }
  
  return (
    <div className='login-form-wrapper'>
    <div className='main-wrapper'>
      <img src={logo} alt='' />

      <form onSubmit={handleUpdate}>
        <label htmlFor="uname">Instructor_name</label><br />
        <input onChange={(event) => setTrainer({...trainer, instructor_name:event.target.value})} value={trainer.instructor_name} type="text" name="title" /><br />

        <label htmlFor="uname">designation</label><br />
        <input onChange={(event) => setTrainer({...trainer, designation:event.target.value})} value={trainer.designation} type="text" name="title" /><br />


        <label htmlFor="uname">Date of joining</label><br />
        <input type="text" onChange={(event) => setTrainer({...trainer, date_of_joining:event.target.value})} value={trainer.date_of_joining} name="title" /><br />


        <label htmlFor="shift">Shift</label><br />
        <input type="text" onChange={(event) => setTrainer({...trainer, shift:event.target.value})} value={trainer.shift}  name="shift" /><br />



        <button className='btn' type="submit" class="btn btn-primary">Update</button>

      </form>
    </div>
  </div>
  )
}

export default EditTrainerRecord