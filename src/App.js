import React from 'react'
import Login from './components/Login form/Login'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Account from './components/Account/Account'
import Sidebar from './components/Sidebar/Sidebar'
import Schedule from './components/schedule/Schedule'
import Branches from './components/Branches/Branches'
import School from './components/School/School'
import Courses from './components/Courses/Courses'
import Fleet from './components/Fleet/Fleet'
import Notification from './components/Notification/Notification'
import Home from './pages/Home'
import Totorial from './components/Totorial/Totorial'
import Trainer from './components/Trainers/Trainer'
import VehicleForm from './components/Fleet/VehicleForm'
import TutorialForm from './components/Totorial/TutorialForm'
import TrainerForm from './components/Trainers/TrainerForm'
import EditRecord from './components/Totorial/EditRecord'
import EditTrainerRecord from './components/Trainers/EditTrainerRecord'
import EditVehicleRecord from './components/Fleet/EditVehicleRecord'





const App = () => { 

  return (
   
    
 
  <BrowserRouter>
   <Sidebar/>
  <Routes>
   
    <Route path='/Login' element={<Login/>}/>
    <Route path='/' element={<Account/>}/>
    <Route path='/Sidebar' element={<Sidebar/>}/>
    <Route path='/schedule' element={<Schedule/>}/>
    <Route path='/Notification' element={<Notification/>}/>
    <Route path='/Branches' element={<Branches/>}/>
    <Route path='/School' element={<School/>}/>
    <Route path='/Fleet' element={<Fleet/>}/>
    <Route path='/Totorial' element={<Totorial/>}/>
    <Route path='/Trainer' element={<Trainer/>}/>
    <Route path='/Courses' element={<Courses/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/VehicleForm' element={<VehicleForm/>}/>
    <Route path='/TutorialForm' element={<TutorialForm/>}/>
    <Route path='/TrainerForm' element={<TrainerForm/>}/>
    <Route path='/edit-record/:id' element={<EditRecord/>}/>
    <Route path='/edit-trainer/:id' element={<EditTrainerRecord/>}/>
    <Route path='/edit-vehicle/:id' element={<EditVehicleRecord/>}/>
  
   
  </Routes>
  </BrowserRouter>
  )
}

export default App