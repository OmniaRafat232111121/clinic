
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { Offline } from 'react-detect-offline';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const Layout = ({userData,setuserData}) => {
  let navigate = useNavigate()
  function logOut() {
    localStorage.removeItem('token');
    setuserData(null);
    navigate('/login')
    
 }
  return (
    <div>
     <Navbar userData={userData} logOut={logOut}/>
     <Outlet></Outlet>
    <Offline><div className='network'>You are offline <i className='fas fa-wifi'></i></div></Offline>
    <Footer/>      

    </div>
  )
}

export default Layout