import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const useCallApis = () => {
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(false)
    const [isReset,setIsResset] = useState<boolean | null>(null)
    const navigate = useNavigate()

    function callapi(paramas:any,url:string){
        console.log('ddd')
        setisloading(true)
        axios.post(`${process.env.BASE_URL_AUTH}auth/${url}`,paramas,{
            withCredentials: true
          }).then((res)=>{
            setisloading(false)
            setdata(res.data)
        //    if(url == 'signup') navigate(`/verfiy?email=${paramas.email}`)
           if(url == 'verifiyToken' || url == 'signin') navigate('/')
        }).catch((error)=>{console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error,
              });
         setisloading(false)
        })
    }

    function logout(){
        axios.get(`http://localhost:8000/auth/logout`,{
            withCredentials: true
        }).then((res)=>{
              console.log(res.data)
              navigate('/signup')
        }).catch((error)=>console.log(error))
    }

   
    function ResetPassword(email:string){
        axios.post(`http://localhost:8000/auth/ResetPassword`,{email : email},{
            withCredentials: true
        }).then((res)=>{
              setIsResset(true)
        }).catch((error)=>{console.log(error)
            setIsResset(false)

        })
    }

    interface ResetData{
        email : string,
        otp : string,
        newpassword : string
    }

    function ResetPasswordTokenVerfiy(sendData:ResetData){
        axios.post(`http://localhost:8000/auth/ResetPasswordTokenVerfiy`,sendData,{
            withCredentials: true
        }).then((res)=>{
              setIsResset(true)
              navigate("/signin")
        }).catch((error)=>{console.log(error)
            setIsResset(false)

        })
    }

    return {data,isloading,callapi,logout,isReset,ResetPassword,ResetPasswordTokenVerfiy}
}

export default useCallApis