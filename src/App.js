import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Register from './Components/Register/Register';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import Doctors from './Components/Doctors/Doctors';
import Posts from './Components/Posts/Posts';
const App = () => {
  useEffect(()=>{
    if(localStorage.getItem('token') !== null){
      saveUserData();
    }
  },[])
const [userData, setuserData] = useState(null)
function saveUserData(){
  let token = localStorage.getItem('token');


  // Display the user object
  console.log(token);
  setuserData(token)

 }

  let routers=createBrowserRouter([

    {path:'',
    element:
    <Layout 
     userData={userData}
      setuserData={setuserData}/>,
     children:[
     {
       index:"true", 
       element:<Home/>
     },
     {
       path:"Login",
       element:<Login saveUserData={saveUserData}/>
     },
     {
      path:"Register",
      element:<Register />
    },
    {
      path:"Doctors",
      element:<Doctors/>
    }, {
      path:"Posts",
      element:<Posts/>
    }
     ]}
  ])
  return (
<>
  <RouterProvider router={routers}></RouterProvider>
<ToastContainer/>

</>  
);
 
}

export default App;
