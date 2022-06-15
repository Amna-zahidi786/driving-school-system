import React from 'react'
import Login from './components/Login form/Login'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Account from './components/Account/Account'
import Password from './components/Password/Password'
import Home from './pages/Home'

const App = () => { 
  return (
   
    
 
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Account' element={<Account/>}/>
    <Route path='/Password' element={<Password/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App