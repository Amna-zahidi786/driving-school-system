import React from 'react'
import Login from './components/Login form/Login'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Account from './components/Account/Account'
import Password from './components/Password/Password'
import Sidebar from './components/Sidebar'



const App = () => { 
  return (
   
    
 
  <BrowserRouter>
  
  <Routes>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Account' element={<Account/>}/>
    <Route path='/Password' element={<Password/>}/>
    <Route path='/Sidebar' element={<Sidebar/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App