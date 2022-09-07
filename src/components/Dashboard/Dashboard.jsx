import React from 'react'
import './Dashboard.css'


const Dashboard = ({ prod }) => {
    return (
        <>
            <div className="col-md-3 mt-5">
                <div className="student">
                    <i class="fas fa-graduation-cap"></i>
                    <h1>{prod.title}</h1>
                    <h4>{prod.description}</h4>
                    <a href="">{prod.rating}</a>
                </div>
            </div>
        </>

    )
}

export default Dashboard