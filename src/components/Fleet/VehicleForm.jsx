import React from 'react'
import './VehicleForm.css'
import logo from "../../assets/logo.png"
import { useFormik } from 'formik';
import * as yup from 'yup'
import { addNewVehicle} from '../../redux/Action/vehicleAction'
import { useDispatch } from 'react-redux';






const Login = () => {
  
    const dispatch = useDispatch();
    const { handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched } = useFormik({
        initialValues: {
          Car_Type: '',
          Car_Number: '',
          Plate_Number: '',
          M_year : '',

        },
        validationSchema: yup.object({
          Car_Type: yup.string().required('Car type is required'),
          Car_Number: yup.string().required('Car Number is required'),
          Plate_Number: yup.string().required('Plate Number is required'),
          M_year: yup.string().required('Manufacture year is required'),
        }),
        onSubmit: (values) => {
            //console.log(values)
            dispatch(addNewVehicle(values));
            
           
        }
    })



    return (
        <div className='login-form-wrapper'>
            <div className='main-wrapper'>
                <img src={logo} alt='' />
              
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Car_Type">Car Type</label><br></br>
                    <input type="text" name="Car_Type" onChange={handleChange} onBlur={handleBlur} value={values.Car_Type} required /><br />
                    <p style={{ color: "red" }}>{touched.Car_Type && errors ? errors.Car_Type : null}</p>

                    <label htmlFor="Car_Number">Car Number</label><br></br>
                    <input type="text" name="Car_Number" onChange={handleChange} onBlur={handleBlur} value={values.Car_Number} required /><br />
                    <p style={{ color: "red" }}>{touched.Car_Number && errors ? errors.Car_Number : null}</p>

                    <label htmlFor="Plate_Number">Plate Number</label><br></br>
                    <input type="text" name="Plate_Number" onChange={handleChange} onBlur={handleBlur} value={values.Plate_Number} required /><br />
                    <p style={{ color: "red" }}>{touched.Plate_Number && errors ? errors.Plate_Number : null}</p>


                    <label htmlFor="M_year">M. year</label><br></br>
                    <input type="text" name="M_year" onChange={handleChange} onBlur={handleBlur} value={values.M_year} required /><br />
                    <p style={{ color: "red" }}>{touched.M_year && errors ? errors.M_year : null}</p>

                 <button className='btn' type="submit" class="btn btn-primary">Submit</button>
                    
                </form>
            </div>
        </div>

    )
}

export default Login