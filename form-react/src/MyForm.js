import React from 'react';
import { ErrorMessage, withFormik } from 'formik';


const MyForm = (props) => {
    const {values, errors,handleChange, handleSubmit} = props;
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>
                Email Address:
            </label>
            <input type="email" name='email' id='email' value={values.email} onChange={handleChange}/>
            <div id='feedback'>{errors.email}</div>
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default withFormik({
    handleSubmit: (values) => {
        alert(JSON.stringify(values, null, 2)); 
    },
    validate: (values) => {
        const errors = {};
        if(!values.email){
            errors.email = "Email Field is Required";
        }
        return errors;
    },
}) (MyForm);