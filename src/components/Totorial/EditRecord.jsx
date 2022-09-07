import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import logo from "../../assets/logo.png"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditRecord = () => {

  const { id } = useParams();
  const [tutorial, setTutorial] = useState({
    tutorial_name:'',

  });
  const getSingleTutorial = async () => {
    
    const tutorialRecord = await axios.get(`http://localhost:7000/single/tutorial/record/${id}`);
    setTutorial(tutorialRecord.data.tutorialRecord);
  
  }

  console.log(tutorial)
  useEffect(() => {
    getSingleTutorial();
  }, [])

  const handleUpdate = async(event) => {
      event.preventDefault();
      const tutorialRecord = await axios.put(`http://localhost:7000/update-tutorial/${id}`, tutorial);
      console.log(tutorialRecord)
      if(tutorialRecord.statusText === 'OK'){
        alert('Data has been updated')
      }
  }
  

  
  return (
    <div className='login-form-wrapper'>
      <div className='main-wrapper'>
        <img src={logo} alt='' />

        <form onSubmit={handleUpdate}>
          <label htmlFor="uname">Tutorial Name</label><br />
          <input onChange={(event) => setTutorial({...tutorial, tutorial_name:event.target.value})} value={tutorial.tutorial_name} type="text" name="title" /><br />


          <button style={{margin:"12px"}} className='btn' type="submit" class="btn btn-primary">Update</button>

        </form>
      </div>
    </div>
  )
}

export default EditRecord