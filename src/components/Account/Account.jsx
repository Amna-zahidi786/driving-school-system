import React from 'react'
import './Account.css'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';

const Account = () => {
    

  
  const { handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched } = useFormik({
    initialValues: {
        email: '',
        fullname: '',
        username:'',
        password:'',

    },
    validationSchema: yup.object({
        email: yup.string().email('please provide a valid email').required('Email is required'),
        fullname: yup.string().required('Full name is required'),
        username: yup.string().required('username is required'),
        password: yup.string().min(6, 'please provide a password').max(10, 'please enter character between 6 to 15').required('Password is required')
    }),
    onSubmit: async (values) => {
        const res = await axios.post('http://localhost:7000/register', values)
         console.log(res)
       //console.log(values) 
    }
})


return (
    <div className='create-account-wrapper'>
        <div className='main-wrapper'>
            <img src={logo} alt='' />
            <h2>Welcome Back</h2>
                <p>A beautiful and powerful system for driving school</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label><br></br>
                <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} required />
                <p style={{ color: "red" }}>{touched.email && errors ? errors.email : null}</p>

                <label htmlFor="fullname">Full Name</label><br></br>
                <input type="text" name="fullname" onChange={handleChange} onBlur={handleBlur} value={values.fullname} required />
                <p style={{ color: "red" }}>{touched.fullname && errors ? errors.fullname : null}</p>

                <label htmlFor="username">username</label><br></br>
                <input type="text" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username} required /><br />
                <p style={{ color: "red" }}>{touched.username && errors ? errors.username : null}</p>

                <label htmlFor="password">Password</label><br></br>
                <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} required /><br /><br />
                <p style={{ color: "red" }}>{touched.password && errors ? errors.password : null}</p>
                
             <button className='btn' type="submit" class="btn btn-primary">Create Account</button>
             <li><Link to='/login'>Already account? Sign in</Link></li>
            </form>
        </div>
    </div>

)
}

export default Account