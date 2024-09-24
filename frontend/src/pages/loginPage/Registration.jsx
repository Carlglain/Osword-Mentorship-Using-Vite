import React, {useState} from 'react'
import './styles.css'
import Image1 from '../../Images/classroom-arms-2.avif'
import Image2 from '../../Images/pupilraisinghand2.jpeg'
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
  return (<div className='container'>
    <div className='icontainer'>
      {isLogin? <img className='regimg' src={Image1} alt="Lufy image display" />:
       <img className='regimg' src={Image2} alt="Lufy image display" />
      }
    </div>
    <div className='fcontainer'>
      <h1>Welcome to Lorem i</h1>
      <div className='r-l-container'>
      <button onClick={(e)=>{handleLogin(e)} } className={isLogin?'active': ''}>Login</button>
      <button onClick={(e)=>{handleRegistration(e)}} className={isReg?'active': ''} >Register</button>
      </div>
     <p className='loremtext'>Lorem ipsum dolor sit amet,adka dka dipiscing elit. Sed gfdut labore et dolore magna aliqua.</p>
      <form >
        {/* email rendered only when we want to create account */}
       {isReg &&
        <>
        <label htmlFor="l0">Email Address</label> <br />
        <input id='l0' name='email' type="email" placeholder='Enter your email address'/> <br /></>}
        {/* username */}
        <label htmlFor="l1">User Name</label> <br />
        <input id='l1' name='username' type="text" placeholder='Enter your user name'/> <br />
        {/* password */}
        <label htmlFor="l2">Password</label> <br />
        <input id='l2' name='password' type="password" placeholder='Password' /> <br />
        {/* Remember me button */}
        {isLogin && 
          <>
          <label htmlFor="l3" ><input type="checkbox"  name='r1' id='l3'/>  Remember Me</label>
       <a className="fgetpwdlink" href='#' > forgot password? </a> <br />
       </>
       }
       
       {!isLogin || isReg ? (
      <button id='fcontainerbutton'>Register</button>) : 
      (<button id='fcontainerbutton'>Login</button>)}
      </form>
      </div>
       </div>
  
  )
}

export default Registration
