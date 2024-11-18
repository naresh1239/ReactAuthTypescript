import { useState } from "react";
import Input from "./Input";
import React, { ChangeEvent } from 'react';
import PasswordStrengthMeter from "./PasswordStreagth";
import {Button} from "@mui/material"
import useCallApis from "./useCallApis";
import { Link } from "react-router-dom";
import "./styles/Signup.css"
import { GoogleOAuthProvider } from "@react-oauth/google";
import ImageCrusal from "../ImageCrusal/ImageCrusal";

 const Signup = ()=> {
  interface userDetails{
    name : string,
    email : string,
    password : string,
  }
  const [UserDetails, setUserDetails] = useState<userDetails>({
    name : '',
    email : '',
    password : ''
  })

  const {data,isloading,callapi} = useCallApis()

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = e.target;

    // Update state with the new value for the specific input field
    setUserDetails(prev => ({
        ...prev,
        [name]: value
    }));
  }


  const submitForm = ()=>{
    const getStrength = (pass:string) => {
      let strength = 0;
      if (pass.length >= 6) strength++;
      if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
      if (pass.match(/\d/)) strength++;
      if (pass.match(/[^a-zA-Z\d]/)) strength++;
      return strength;
    };

 
    callapi(UserDetails,'signup')
  }
  return (

      <div className="SignupMainBox">
        <div className="SignupMainBoxLeftSide">
       <ImageCrusal/>
        </div>
        <div className="SignupMainBoxRightSide">
          
        <div className="SignupForm">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
          <h2 className="" style={{padding : '10px 0'}}>
            Sign in to your account
          </h2>
        </div>

        <div className="">
  
   <div className="SignupInputs">
   <Input
      icon={""}
      type='text'
      name='name'
      placeholder="Full Name"
      value={UserDetails.name}
      inputChange={handleChangeInput}
     />
     <Input
      icon={""}
      type='email'
      name='email'
      placeholder="Email"
      value={UserDetails.email}
      inputChange={handleChangeInput}
     />
     <Input
      icon={""}
      type='password'
      name='password'
      placeholder="Password"
      value={UserDetails.password}
      inputChange={handleChangeInput}
     />

   </div>
     <div>
      <PasswordStrengthMeter password={UserDetails.password}/>
           </div>
            <div>
              <p>Already have a account <Link to={"/signin"}>signIn</Link></p>
            <Button variant="contained" onClick={submitForm}>{isloading ? 'loading' : 'SingUp'}</Button>
            </div>
              <button onClick={()=>{
                window.open(`http://localhost:8000/auth/google`,"_self")
              }}>Signup with google</button>
        </div>
        </div>
        </div>
      </div>
 
  )
}


export default Signup;