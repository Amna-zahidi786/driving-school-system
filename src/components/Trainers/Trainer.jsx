import React from 'react'
import Header from '../Header/Header'
import './Trainer.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'

const Trainer = () => {
  const [allTrainer, setAllTrainer] = useState();
  const getTrainerRecord = async () => {
    const trainerRecord = await axios.get('http://localhost:7000/trainer/record');
    setAllTrainer(trainerRecord.data.trainerRecord);
  }
  useEffect(() => {
    getTrainerRecord();
  }, [])

  const handleDelete=async(id)=>{
    console.log(id)
    const res = await axios.delete(`http://localhost:7000/delete-trainer/${id}`);
    if(res.statusText === 'OK'){
      alert('Data has been deleted')
    }
    
    getTrainerRecord();
    }

  return (
   
    <div className="content">
     <Header/>
      <div className="main-heading">
       <h1>Driving school Management System</h1>
     </div>
    
   <div className="trainer">
    <h2>Trainer</h2>
    <table class="table">
<thead>
<tr>

<th scope="col">Instructor Name</th>
<th scope="col">Designation</th>
<th scope="col">Date of Joining</th>
<th scope="col">Shift</th>
<th scope="col">Action</th>
</tr>
</thead>
<tbody>
{
            allTrainer && allTrainer.map((trainerRecord)=>{
              return <tr>
              <td>{trainerRecord.instructor_name}</td>
              <td>{trainerRecord.designation}</td>
              <td>{trainerRecord.date_of_joining}</td>
              <td>{trainerRecord.shift}</td>
              <td>
                <button onClick={()=>handleDelete(trainerRecord._id)}>Delete</button>
                <Link className='edit-menu' to={`/edit-trainer/${trainerRecord._id}`}>Edit</Link>
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



export default Trainer