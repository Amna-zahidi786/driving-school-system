import React from 'react'
import logo from "../../assets/logo.png"
import './Totorial.css'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { addNewTutorial} from '../../redux/Action/tutorialAction'
import { useDispatch } from 'react-redux';





const Login = () => {
  
  
    const dispatch = useDispatch();
    const { handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched } = useFormik({
        initialValues: {
          tutorial_name: '',

        },
        validationSchema: yup.object({
            tutorial_name: yup.string().required('Tutorial name is required'),
        }),
        onSubmit: (values) => {
            dispatch(addNewTutorial(values));
            
        }
    })



    return (
        <div className='login-form-wrapper'>
            <div className='main-wrapper'>
                <img src={logo} alt='' />
              
                <form onSubmit={handleSubmit}>
                    <label htmlFor="tutorial_name">Tutorial Name</label><br></br>
                    <input type="text" name="tutorial_name" onChange={handleChange} onBlur={handleBlur} value={values.tutorial_name} required /><br />
                    <p style={{ color: "red" }}>{touched.tutorial_name && errors ? errors.tutorial_name : null}</p>


                 <button className='btn' type="submit" class="btn btn-primary">Submit</button>
                    
                </form>
            </div>
        </div>

    )
}

export default Login