import React from 'react';
import { ErrorMessage } from 'formik';
import "../pages/loginPage/styles.css"
function LabledInput({ id,label, field, meta, type, placeholder }) {
  
  return (
    <div>
     
      <label htmlFor={id}>{label}</label> {/* Link label to input */}
      <br />
      <input {...field} type={type} placeholder={placeholder} /> {/* Spread props and include type/placeholder */}
      {/* {meta.touched && meta.error && <div className="error">{meta.error}</div>} Styled error message */}
      <ErrorMessage name={field.name} component="div"  className='error' />
    
    </div>
  );
}

export default LabledInput;