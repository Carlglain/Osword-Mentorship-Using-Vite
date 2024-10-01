import React, {useState} from 'react'
import './styles.css'
import Image1 from '../../Images/classroom-arms-2.avif'
import Image2 from '../../Images/pupilraisinghand2.jpeg'
import LabledInput from '../../Components/LabledInput'
import Button from '../../Components/Button'
function Registration() {
  const [isLogin,setIsLogin]=useState(false)
  function handleLogin(e){
    e.preventDefault()
    if(isLogin){
      return
    }
    setIsLogin(true)
    setIsReg(false)
  }
  const [isReg,setIsReg]=useState(true)
  function handleRegistration(e){
    e.preventDefault()
    if(isReg){
      return
    }
    setIsReg(true)
    setIsLogin(false)
  }
  const [formData,setFormData]=useState({
    email:"",
    username:"",
    password:"",
    rememberMe:false
  })
  const handleChange = (event)=>{
    const {name,type,value,checked} = event.target
    setFormData(prevData=>{
      return {...prevData, [name]:type === 'checkbox' ?checked : value}
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      email:"",
      username:"",
      password:"",
      rememberMe:false
    })
  }
  return (<div className='container'>
    <div className='image-container'>
      {isLogin? <img className='registration-image' src={Image1} alt="Lufy image display" />:
       <img className='registration-image' src={Image2} alt="Lufy image display" />
      }
    </div>
    <div className='form-container'>
      <h1>Welcome to Lorem i</h1>
      <div className='r-l-container'>

      <button onClick={(e)=>{handleLogin(e)} } className={isLogin?'active': ''}>Login</button>
      <button onClick={(e)=>{handleRegistration(e)}} className={isReg?'active': ''} >Register</button>
      </div>
     <p className='loremtext'>Lorem ipsum dolor sit amet,adka dka dipiscing elit. Sed gfdut labore et dolore magna aliqua.</p>
      <form onSubmit={(e)=>{handleSubmit(e)}} >
        {/* email rendered only when we want to create account */}
       {isReg &&
        <>
        <LabledInput 
        id="l0" 
        name="email" 
        placeholder='Enter your email address'
        label="Email Address"
        type="email"
        onChange={handleChange}
        value={formData.email}
        />
        </>}

        {/* username */}
        <LabledInput 
        id="l1" 
        name='username'
       placeholder='Enter your user name'
        label="User Name"
       type="text"
       onChange={handleChange}
       value={formData.username}
        />

        {/* password */}
        <LabledInput 
        id="l2" 
       name='password'
       p placeholder='Password'
        label="Password"
       type="password"
       onChange={handleChange}
       value={formData.password}
        />

        {/* Remember me button */}
        {isLogin && 
          <>
          <label htmlFor="l3" ><input type="checkbox" onChange={handleChange}  name='rememberMe' id='l3' checked={formData.rememberMe}/>  Remember Me</label>
       <a className="forget-password-link" href='#' > forgot password? </a> <br />
       </>
       }
       
       {!isLogin || isReg ? (
        <Button id='form-container-button' content='Register'/>) : 
      (<Button id='form-container-button' content='Login'/>)}
      </form>
      </div>
       </div>
  
  )
}

export default Registration
