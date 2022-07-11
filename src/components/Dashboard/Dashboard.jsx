import React from 'react'
import "./Dashboard.css"
import student_growth from '../../assets/student_growth.png'

export default function Dashboard() {
    return (
        <div class="content">
            <div className="main-heading">
                <h1>Driving School Mangement System</h1>
            </div>
            <div className="dsahboard mt-5">
                <h3>Dashboard</h3>

                <div className="row">
                    <div className="col-md-3">
                        <div className="student">
                            <i class="fas fa-graduation-cap"></i>
                            <h1>48</h1>
                            <h4>Total Student</h4>
                            <a href="">11%</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="student">
                            <i class="fas fa-graduation-cap"></i>
                            <h1>45,121</h1>
                            <h4>Income</h4>
                            <a href="">11%</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="student">
                            <i class="fas fa-graduation-cap"></i>
                            <h1>343,222</h1>
                            <h4>Unpaid voices</h4>
                            <a href="">11%</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="student">
                            <i class="fas fa-graduation-cap"></i>
                            <h1>67%</h1>
                            <h4>Class attendence</h4>
                            <a href="">11%</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="student-growth mt-5">
                <h3>Student Growth</h3>
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <h1>8</h1>
                        <h4>New Students (Last 30 Days)</h4>
                        <h5>You have <span>22% Growth</span> in comparison to the previous month.</h5>
                        <h5>Payments perfomance has had a <span>14% perfomance</span> in comparison to the previous month.</h5>
                    </div>

                    <div className="col-md-6 mt-5">
                        <img src={student_growth} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
