import React from 'react'
import Header from '../Header/Header'
import './Totorial.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Totorial = () => {
  const [allTutorial, setAllTutorial] = useState();
  const getTutorialRecord = async () => {
    const tutorialRecord = await axios.get('http://localhost:7000/tutorial/record');
    setAllTutorial(tutorialRecord.data.tutorialRecord);
  }
  useEffect(() => {
    getTutorialRecord();
  }, [])

  const handleDelete=async(id)=>{
    const res = await axios.delete(`http://localhost:7000/delete-tutorial/${id}`);
    if(res.statusText === 'OK'){
      alert('Data has been deleted')
    }
    getTutorialRecord();
    }

  return (
    <div className="content">
      <Header/>
      <div className="main-heading">
       <h1>Driving school Management System</h1>
     </div>
    
   <div className="tutorial">
    <h2>Tutorials</h2>
    <table class="table">
<thead>
<tr>
<th scope="col">Different Tutoials</th>
<th scope="col">Actions</th>
</tr>
</thead>
<tbody>
         {
            allTutorial && allTutorial.map((tutorialRecord)=>{
              return <tr>
              <td>{tutorialRecord.tutorial_name}</td>
              <td>
                <button onClick={()=>handleDelete(tutorialRecord._id)}>Delete</button>
               <Link className='edit-menu' to={`/edit-record/${tutorialRecord._id}`}>Edit</Link>
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

export default Totorial