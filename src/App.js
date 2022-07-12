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


const App = () => { 
  return (
   
    
 
  <BrowserRouter>
   <Sidebar/>
  <Routes>
   
    <Route path='/' element={<Login/>}/>
    <Route path='/Account' element={<Account/>}/>
    <Route path='/Password' element={<Password/>}/>
    <Route path='/Sidebar' element={<Sidebar/>}/>
    <Route path='/schedule' element={<Schedule/>}/>
    <Route path='/Dashboard' element={<Dashboard/>}/>
    <Route path='/Branches' element={<Branches/>}/>
    <Route path='/School' element={<School/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App