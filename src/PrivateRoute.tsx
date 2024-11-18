import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'; // Combined imports
import {fetchPosts} from "./states/AuthUser"
import { useSelector, useDispatch } from 'react-redux'

const PrivateRoute = ({element}) => {
  //  const [isAuthValid, setIsAuthValid] = useState<boolean | null>(null); // Initialized as null
   const dispatch = useDispatch()
   const isAuthValid = useSelector((state)=> state.isAuthUser)

  useEffect(() => {
    dispatch(fetchPosts('private'));
  }, []);

  // Redirect to signup if isAuthValid is null (still loading) or false
  if (isAuthValid.status == 'idle' || isAuthValid.status == 'loading') {
    return <div>Loading...</div>; // Optionally handle loading state
  }

  return isAuthValid.status != 'succeeded' ? element : <Navigate to="/" />;
};

export default PrivateRoute;
