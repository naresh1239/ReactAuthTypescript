import React,{ FC ,ChangeEvent} from 'react'
import { TextField } from '@mui/material'
interface InputProps{
    icon : string,
    type :  string
    name : string
    placeholder :string ,
    value :  string
    inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input : FC<InputProps> = ({ icon, type, name,placeholder, value, inputChange }) => {
  return (
    <div> 
        <div>
    <div className="mt-2">
    <TextField id="outlined-basic" 
      type={type}
      name={name}
      required
      value={value}
      autoComplete={placeholder}
      onChange={inputChange}
    label={name} variant="outlined" />

    </div>
  </div>
  </div>
  )
}

export default Input