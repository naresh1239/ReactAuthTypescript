import React,{useEffect, useRef, useState,ChangeEvent,KeyboardEvent} from 'react'
import useApiCalling from "./useCallApis";
import {Button} from "@mui/material"

const Verfiy = () => {
    const [Opt, setOpt] = useState(['','','','','',''])
    const ref = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef()]
    const [inputVal, setinputVal] = useState(Opt)

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const email = params.get('email');
    const opt = params.get('otp');

    console.log(opt)
    useEffect(() => {
       setinputVal(opt.split(''))
    }, [])
    
    const {data,isloading,callapi} = useApiCalling()


    
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>,i:number)=>{

    if(e.target.value.length > 1 && e.target.value.length < 1){
       return
    }
    setinputVal((perv)=>{ return perv.map((item,key)=>{
        if(key == i){
          return  e.target.value
        }else{
            return item
        }
    })})
    ref[i + 1]?.current.focus()
    }
    
    const handlekeyup = (e:KeyboardEvent<HTMLInputElement>,i:number)=>{
        if(e.code == "Backspace"){
            console.log(i)
            ref[i - 1]?.current.focus()   
        }
    }
    
  const handlePaste = (event) => {

 setinputVal(event.clipboardData.getData('text').split(''));
  };


  const sendData = {
    token : inputVal.join('').toString(),
    email :email
}
  return (
    <div>
        <div className="prompt">
	Enter the code generated on your mobile device below to log in!
</div>

{
    Opt.map((item,i)=>{
        return<input  onKeyUp={(e)=>handlekeyup(e,i)} onPaste={handlePaste} type='text'  maxLength={1}  ref={ref[i]} value={inputVal[i]} onChange={(e)=>handleInputChange(e,i)}/>
    })
}

<Button variant="contained" onClick={()=>callapi(sendData,'verifiyToken')}>{isloading ? 'loading' : 'Verfiy'}</Button>
    </div>
  )
}

export default Verfiy