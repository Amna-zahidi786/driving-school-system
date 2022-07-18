import React from 'react'
import './Login.css'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';


const database = {
        username: "amnazahidi787@gmail.com",
        password: "password1"
    }

const Login = () => {

    const { handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        validationSchema: yup.object({
            email: yup.string().email('please provide a valid email').required('Email is required'),
            password: yup.string().min(6, 'please provide a password').max(10, 'please enter character between 6 to 15').required('Password is required')
        }),
        onSubmit: (values) => {
            console.log(values)
            if(values.email === database.username && values.password === database.password){
             
            }
        }
    })

const navigate = useNavigate();
const goToDashboard = ()=>{
    navigate('/Dashboard');
};

    return (
        <div className='login-form-wrapper'>
            <div className='main-wrapper'>
                <img src={logo} alt='' />
                <h2>Welcome Back</h2>
                <p>A beautiful and powerful system for driving school</p>
                <form onSubmit={handleSubmit}>
                    <label for="uname">Email Address</label><br></br>
                    <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} required /><br />
                    <p style={{ color: "red" }}>{touched.email && errors ? errors.email : null}</p>
                    <label for="password">Password</label><br></br>
                    <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} required /><br /><br />
                    <p style={{ color: "red" }}>{touched.password && errors ? errors.password : null}</p>
                 <button onClick={()=> goToDashboard()} className='btn' type="submit" class="btn btn-primary">Login Now</button>
                    <ul className='accounts'>
                        <li><Link to='/Account'>Create Account</Link></li>
                        <li><Link to='/Password'>forget password?</Link></li>
                    </ul>
                </form>
            </div>
        </div>

    )
}

export default Login