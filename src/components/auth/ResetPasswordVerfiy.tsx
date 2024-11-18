import React,{useEffect, useRef, useState,ChangeEvent,KeyboardEvent} from 'react'
import useApiCalling from "./useCallApis";
import {Button} from "@mui/material"
import Input from "./Input";
const ResetPasswordVerfiy = () => {

    interface userDetails{
        password : string,
      }
      const [UserDetails, setUserDetails] = useState<userDetails>({
        password : ''
      })

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const email = params.get('email');
    const otp = params.get('otp');

  const sendData = {
    email : email?.toString(),
    otp : otp?.toString(),
    newpassword : UserDetails.password
  }

    const {data,isloading,ResetPasswordTokenVerfiy} = useApiCalling()


    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = e.target;
    
        // Update state with the new value for the specific input field
        setUserDetails(prev => ({
            ...prev,
            [name]: value
        }));
      }

  return (
    <div>
    
    <Input
      icon={""}
      type='password'
      name='password'
      placeholder="Password"
      value={UserDetails.password}
      inputChange={handleChangeInput}
     />
     <Button variant="contained" onClick={()=>ResetPasswordTokenVerfiy(sendData)}>{isloading ? 'loading' : 'Verfiy'}</Button>
    </div>
  )
}

export default ResetPasswordVerfiy