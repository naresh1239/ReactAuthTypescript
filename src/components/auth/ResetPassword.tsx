import React,{useState,ChangeEvent} from 'react'
import Input from "./Input";
import useApiCalling from "./useCallApis";
const ResetPassword = () => {
    const {isReset,ResetPassword} = useApiCalling()
    interface userDetails{
        email : string,
      }
      const [UserDetails, setUserDetails] = useState<userDetails>({
        email : ''
      })
    
      const handleChangeInput = (e: ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = e.target;
        setUserDetails(prev => ({
            ...prev,
            [name]: value
        }));
      }


  return (
    <div>
        {isReset  == null && <>
            ResetPassword
            <Input
      icon={""}
      type='email'
      name='email'
      placeholder="Email"
      value={UserDetails.email}
      inputChange={handleChangeInput}
     />
       <button onClick={()=>ResetPassword(UserDetails.email)}>Reset</button>
        </> }
     {
        isReset && 
        <div>we have sent you a mail of password reset</div>
     }

      {
        isReset == false && 
        <div>someting went wrong please wait</div>
     }
    
    </div>
  )
}

export default ResetPassword