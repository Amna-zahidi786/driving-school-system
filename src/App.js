import React from 'react'
import Login from './components/Login form/Login'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Account from './components/Account/Account'
import Password from './components/Password/Password'
import Sidebar from './components/Sidebar'
import Schedule from './components/schedule/Schedule'
import Dashboard from './components/Dashboard/Dashboard'
import Branches from './components/Branches/Branches'
import School from './components/School/School'
import Courses from './components/Courses/Courses'
import Header from './Header/Header'
import Fleet from './components/Fleet/Fleet'
import Notification from './components/Notification/Notification'


const App = () => { 
  return (
   
    
 
  <BrowserRouter>
   <Sidebar/>
  <Routes>
   
    <Route path='/' element={<Login/>}/>
    <Route path='/Account' element={<Account/>}/>
    <Route path='/Password' element={<Password/>}/>
    <Route path='/Header' element={<Header/>}/>
    <Route path='/Sidebar' element={<Sidebar/>}/>
    <Route path='/schedule' element={<Schedule/>}/>
    <Route path='/Dashboard' element={<Dashboard/>}/>
    <Route path='/Notification' element={<Notification/>}/>
    <Route path='/Branches' element={<Branches/>}/>
    <Route path='/School' element={<School/>}/>
    <Route path='/Fleet' element={<Fleet/>}/>
    <Route path='/Courses' element={<Courses/>}/>

  </Routes>
  </BrowserRouter>
  )
}

export default App