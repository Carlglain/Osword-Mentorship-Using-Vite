import React, {useState} from 'react'
import './styles.css'
import Image1 from '../../Images/classroom-arms-2.avif'
import Image2 from '../../Images/pupilraisinghand2.jpeg'
import LabledInput from '../../Components/LabledInput'
import Button from '../../Components/Button'
import {Formik,Field, Form } from 'formik'
import * as Yup from 'yup'
function Registration() {
  const [isLogin,setIsLogin]=useState(false)
  const [isReg,setIsReg]=useState(true)
  const validationSchema = Yup.object({
    email:Yup.string()
    .email("Invalid email")
    .when('$isReg',{
      is: true,
      then: Yup.string()
      .required("Email is required")
    }),
    username:Yup.string()
    .required("Username is required"),
    password:Yup.string()
    .min(6,'Password must be at least 6 characters')
    .required("Password is required"),
    rememberMe:Yup.boolean()
  }) 


  const handleLogin = () => {
    if (!isLogin) {
      setIsLogin(true);
      setIsReg(false);
    }
  };

  const handleRegistration = () => {
    if (!isReg) {
      setIsReg(true);
      setIsLogin(false);
    }
  };
 
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (<div className='container'>
    <div className='image-container'>
      {isLogin? <img className='registration-image' src={Image1} alt="Lufy image display" />:
       <img className='registration-image' src={Image2} alt="Lufy image display" />
      }
    </div>
    <div className='form-container'>
      <h1>Welcome to Lorem i</h1>
      <div className='r-l-container'>

      <button onClick={handleLogin } className={isLogin?'active': ''}>Login</button>
      <button onClick={handleRegistration} className={isReg?'active': ''} >Register</button>
      </div>
     <p className='loremtext'>Lorem ipsum dolor sit amet,adka dka dipiscing elit. Sed gfdut labore et dolore magna aliqua.</p>
     <Formik
    initialValues={{
      email:"",
      username:"",
      password:"",
      rememberMe:false,

    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    validateOnChange={true}
    validateOnBlur={true}
    >
       {({handleSubmit,isValid,dirty}) =>(
        <Form onSubmit={handleSubmit}>

{isReg &&
        
        <Field
        id='l0'
        name="email" 
        placeholder='Enter your email address'
        label="Email Address"
        type="email"
        
       component={LabledInput}
        />
        }

        {/* username */}
        <Field
        id='l1'
        name='username'
        placeholder='Enter your user name'
        label="User Name"
        type="text"
        component={LabledInput}
        />

        {/* password */}
        <Field 
        id="l2" 
        type="password"
        name='password'
        placeholder='Password'
        label="Password"
        component={LabledInput}
      
       
        />

        {/* Remember me button */}
        {isLogin && 
          <div>
            <label ><Field type="checkbox" name='rememberMe' id='l3' />  Remember Me</label>
            <a className="forget-password-link" href='#' > forgot password? </a> <br />
          </div>
       }
       
    
        <Button id='form-container-button' dirty={dirty} disabled={isValid} content={isReg?'Register':'Login'}/> 
   
      
        </Form>
       )}
    </Formik>
     
      </div>
       </div>
  
  )
}

export default Registration


