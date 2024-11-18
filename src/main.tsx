import React,{useEffect} from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18
import './App.css';
import App from './App';
import { store } from './states/store';
import { Provider } from 'react-redux';
import HeroPage from './components/home/HeroPage';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Verfiy from './components/auth/Verfiy';
import {fetchPosts} from "../src/states/AuthUser"
import { useSelector, useDispatch } from 'react-redux'
import PrivateRoute from './PrivateRoute';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import ResetPassword from './components/auth/ResetPassword';
import ResetPasswordVerfiy from './components/auth/ResetPasswordVerfiy';
// Home.js





// About.js
const NotFound = () => <h1>404 - Page Not Found <Outlet/></h1>;


const router = createBrowserRouter(
            createRoutesFromElements(
              <>
           
              <Route  path='/signup' element={<PrivateRoute element={<Signup/>}/>}></Route>
              <Route  path='/verfiy' element={<PrivateRoute element={<Verfiy/>}/>}></Route>
              <Route  path='/signin' element={<PrivateRoute element={<Signin/>}/>}></Route>
              <Route  path='/resetPassword' element={<PrivateRoute element={<ResetPassword/>}/>}></Route>
              <Route  path='/ResetPasswordVerfiy' element={<PrivateRoute element={<ResetPasswordVerfiy/>}/>}></Route>
              <Route path='/' element={<RootLayout/>}>
              <Route index element={<HeroPage/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='blog' element={<Blog/>}/>
              </Route>
              </>
          

            )
)



const rootElement = document.getElementById('root') as HTMLElement;
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={store}>
   <RouterProvider router={router}/>
    </Provider>
  );
}






// NotFound.js




