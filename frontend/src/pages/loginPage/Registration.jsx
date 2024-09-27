import React, { useState } from "react";
import "./styles.css";
import Image1 from "../../Images/classroom-arms-2.avif";
import Image2 from "../../Images/pupilraisinghand2.jpeg";
import LabledInput from "../../Components/LabledInput";
import Button from "../../Components/Button";
function Registration() {
  const [isLogin, setIsLogin] = useState(false);
  function handleLogin(e) {
    e.preventDefault();
    if (isLogin) {
      return;
    }
    setIsLogin(true);
    setIsReg(false);
  }
  const [isReg, setIsReg] = useState(true);
  function handleRegistration(e) {
    e.preventDefault();
    if (isReg) {
      return;
    }
    setIsReg(true);
    setIsLogin(false);
  }
  return (
    <div className="container">
      <div className="image-container">
        {isLogin ? (
          <img
            className="registration-image"
            src={Image1}
            alt="Lufy image display"
          />
        ) : (
          <img
            className="registration-image"
            src={Image2}
            alt="Lufy image display"
          />
        )}
      </div>
      <div className="form-container">
        <h1>Welcome to Lorem ipsum</h1>
        <div className="r-l-container">
          <button
            onClick={(e) => {
              handleLogin(e);
            }}
            className={isLogin ? "active" : ""}
          >
            Login
          </button>
          <button
            onClick={(e) => {
              handleRegistration(e);
            }}
            className={isReg ? "active" : ""}
          >
            Register
          </button>
        </div>
        <p className="loremtext">
          Lorem ipsum dolor sit amet,adka dka dipiscing elit. Sed gfdut labore
          et dolore magna aliqua.
        </p>
        <form >
          {/* email rendered only when we want to create account */}
          {isReg && (
            <>
              <LabledInput
                id="l0"
                name="email"
                placeholder="Enter your email address"
                label="Email Address"
                type="email"
              />
            </>
          )}

          {/* username */}
          <LabledInput
            id="l1"
            name="username"
            placeholder="Enter your user name"
            label="User Name"
            type="text"
          />

          {/* password */}
          <LabledInput
            id="l2"
            name="password"
            p
            placeholder="Password"
            label="Password"
            type="password"
          />

          {/* Remember me button */}
          {isLogin && (
            <>
              <label htmlFor="l3">
                <input type="checkbox" name="r1" id="l3" /> Remember Me
              </label>
              <a className="forget-password-link" href="#">
                {" "}
                forgot password?{" "}
              </a>{" "}
              <br />
            </>
          )}

          {!isLogin || isReg ? (
            <Button id="form-container-button" content="Register" />
          ) : (
            <Button id="form-container-button" content="Login" />
          )}
        </form>
      </div>
    </div>
  );
}

export default Registration;
