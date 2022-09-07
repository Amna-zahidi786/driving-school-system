import React from 'react'
import './Login.css'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { useNavigate } from "react-router-dom";





const Login = () => {

    let navigate = useNavigate();


    const { handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched } = useFormik({
        initialValues: {
            username: '',
            password: '',

        },
        validationSchema: yup.object({
            username: yup.string().required('username is required'),
            password: yup.string().min(6, 'please provide a password').max(10, 'please enter character between 6 to 15').required('Password is required')
        }),
        onSubmit: async(values) => {
            const res = await axios.post('http://localhost:7000/login', values)
            console.log(res.data.user)

            if(res.data.user){
                localStorage.setItem("user", JSON.stringify(res.data.user))
                alert('You are Loged in')
                navigate("/Fleet", { replace: true });
            }
            if(!res.data.user)
            {
                alert('User not Found! Please create an account')
            }
            


        }
    })



    return (
        <div className='login-form-wrapper'>
            <div className='main-wrapper'>
                <img src={logo} alt='' />
                <h2>Welcome Back</h2>
                <p>A beautiful and powerful system for driving school</p>
                <form onSubmit={handleSubmit}>
                    <label for="uname">Username</label><br></br>
                    <input type="text" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username} required /><br />
                    <p style={{ color: "red" }}>{touched.username && errors ? errors.username : null}</p>

                    <label for="password">Password</label><br></br>
                    <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} required /><br /><br />
                    <p style={{ color: "red" }}>{touched.password && errors ? errors.password : null}</p>

                 <button className='btn' type="submit" class="btn btn-primary">Login Now</button>
                    <ul className='accounts'>
                        <li><Link to='/'>Create Account</Link></li>
                    </ul>
                </form>
            </div>
        </div>

    )
}

export default Login