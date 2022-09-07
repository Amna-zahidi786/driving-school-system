import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import { products } from '../products'
import { useState } from 'react'
import Header from '../components/Header/Header'





const Home = () => {
    const[dashboard, setDashboard] = useState(products)
   

  return (
 <div className="content">
  <Header/>
    <h2>Dashboard</h2>

      <div className='row'>
            {
                dashboard.map(p=><Dashboard prod={p}/>)
            }
      </div>
  
 </div>

  )
}

export default Home