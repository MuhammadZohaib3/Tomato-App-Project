import React, { useState } from 'react'
import { assets } from '../../assets/javascript';
import "./Popup.css";


function Popup({setCurrstate}) {
    const [change, setChange] = useState('Login');
  return (
    <div className='popup-container'>
        <form className='popup-form'>
          <div className="popup-form-title">
            <h2>{change}</h2>
            <img onClick={() => setCurrstate(false)}src={assets.cross_icon} alt="" />
            </div>
            <div className='popup-inputs'>
              {change=== "Login"?<></>:
              <input type="name"  placeholder='name'/>}
              <input type="email" placeholder='email'/>
              <input type="password" placeholder='password' />
            </div>
            <button>{change==="Sign Up"? "Create account":"Login"}</button>
            <div className="popup-login-condition">
              <input type="checkbox" required />
              <p>By continuing, i agree to the teams of use & privacy policy</p>
            </div>
            {change === "Login"?
            <p>Create a new account? <span onClick={()=>setChange("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setChange("Login")}>Login here</span></p>}

        </form>

    </div>
  )
}
 
export default Popup