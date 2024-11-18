import React, { useEffect, useState } from 'react';
import { Outlet, Navigate, NavLink } from 'react-router-dom'; // Combined imports
import {fetchPosts} from "./states/AuthUser"
import { useSelector, useDispatch } from 'react-redux'
import useApiCalling from "./components/auth/useCallApis"

const Navbar = ()=>{
  const isAuthValid = useSelector((state)=> state.isAuthUser)
  const {logout} = useApiCalling()
  return <>
   {isAuthValid.status == 'succeeded' && 
   <div style={{display :"flex" ,justifyContent : "space-around"}}>
   <NavLink to={'/'}>Home</NavLink>
  <NavLink to={'/about'}>About</NavLink>
  <NavLink to={'/blog'}>blog</NavLink>
  <button onClick={logout}>Logout</button>
 </div>
 }

  </>
}


const RootLayout = () => {
  const dispatch = useDispatch()
  const isAuthValid = useSelector((state)=> state.isAuthUser)

 useEffect(() => {
   dispatch(fetchPosts('home'));
 }, []);

  // Redirect to signup if isAuthValid is null (still loading) or false
  if (isAuthValid.status == 'idle' || isAuthValid.status == 'loading') {
    return <div>Loading...</div>; // Optionally handle loading state
  }

  return isAuthValid.status == 'succeeded' ? <div><Navbar/><Outlet /></div> : <Navigate to="/signup" />;
};

export default RootLayout;
