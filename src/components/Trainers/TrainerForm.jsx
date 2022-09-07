import React from 'react'
import logo from "../../assets/logo.png"
import { useFormik } from 'formik';
import * as yup from 'yup'
import { addNewTrainer} from '../../redux/Action/trainerAction'
import { useDispatch } from 'react-redux';





const Login = () => {
  
  
    const dispatch = useDispatch();
    const { handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched } = useFormik({
        initialValues: {
        instructor_name: '',
        designation:' ',
        date_of_joining:'',
        shift:'',

        },
        validationSchema: yup.object({
            instructor_name: yup.string().required('Instructor name name is required'),
            designation: yup.string().required('Dsignation is required'),
            date_of_joining: yup.string().required('Joining date is required'),
            shift: yup.string().required('Program shift is required'),
        }),
        onSubmit: (values) => {
            //console.log(values)
            dispatch(addNewTrainer(values));
            
           
        }
    })



    return (
        <div className='login-form-wrapper'>
            <div className='main-wrapper'>
                <img src={logo} alt='' />
              
                <form onSubmit={handleSubmit}>
                    <label htmlFor="instructor_name">Instructor name</label><br></br>
                    <input type="text" name="instructor_name" onChange={handleChange} onBlur={handleBlur} value={values.instructor_name} required /><br />
                    <p style={{ color: "red" }}>{touched.instructor_name && errors ? errors.instructor_name : null}</p>

                    <label htmlFor="designation">Designation</label><br></br>
                    <input type="text" name="designation" onChange={handleChange} onBlur={handleBlur} value={values.designation} required /><br />
                    <p style={{ color: "red" }}>{touched.designation && errors ? errors.designation : null}</p>

                    <label htmlFor="date_of_joining">Date of Joining</label><br></br>
                    <input type="text" name="date_of_joining" onChange={handleChange} onBlur={handleBlur} value={values.date_of_joining} required /><br />
                    <p style={{ color: "red" }}>{touched.date_of_joining && errors ? errors.date_of_joining : null}</p>

                    <label htmlFor="shift">Shift</label><br></br>
                    <input type="text" name="shift" onChange={handleChange} onBlur={handleBlur} value={values.shift} required /><br />
                    <p style={{ color: "red" }}>{touched.shift && errors ? errors.shift : null}</p>


                 <button className='btn' type="submit" class="btn btn-primary">Submit</button>
                    
                </form>
            </div>
        </div>

    )
}

export default Login