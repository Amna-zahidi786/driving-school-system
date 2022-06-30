import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './Password.css'
import { useFormik } from 'formik';
import * as yup from 'yup'

const Password = () => {

  const { handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched } = useFormik({
    initialValues: {
      email: '',

    },
    validationSchema: yup.object({
      email: yup.string().email('please provide a valid email').required('Email is required'),

    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <div className='forget-password'>
     <div className='main-wrapper'>
     <img src={logo} alt='' />
      <h2>Forgot password</h2>
      <p>Don't worry if you forgot your password enter </p>
      <p>your email and you can reset it.</p>
      <form onSubmit={handleSubmit}>
        <label for="uname">Email Address</label><br></br>
        <input type="text" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} required /><br /><br />
        <p style={{ color: "red" }}>{touched.email && errors ? errors.email : null}</p>
        <button type="submit" class="btn btn-primary">Reset password</button>
        <ul className='accounts'>
          <li><Link to='/Account'>Login Now</Link></li>

        </ul>
      </form>
     </div>
    </div>
  )
}

export default Password