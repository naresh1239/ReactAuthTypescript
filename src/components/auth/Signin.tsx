import React,{useState,ChangeEvent} from 'react'
import Input from "./Input";
import { Button } from '@mui/material';
import useApiCalling from "./useCallApis";

import { Link } from 'react-router-dom';
const Signin = () => {
  interface userDetails{
    email : string,
    password : string,
  }
  const [UserDetails, setUserDetails] = useState<userDetails>({
    email : '',
    password : ''
  })

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = e.target;
    setUserDetails(prev => ({
        ...prev,
        [name]: value
    }));
  }
  const {data,isloading,callapi} = useApiCalling()

  return (
    <div>
      Sign in to your account
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
      <p>Create a account <Link to={"/signup"}>signUp</Link></p>
      <p>Forgot Password<Link to={"/resetPassword"}>Reset</Link></p>
         <Button variant="contained" onClick={()=>callapi(UserDetails,'signin')}>{isloading ? 'loading..' : 'Signin'}</Button>
    </div>
  )
}

export default Signin