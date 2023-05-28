import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../../assets/logo.png';
const Navbar = ({userData,logOut}) => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className=" font-bold text-xl">
              <img src={logo} className='w-10 h-10'/>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              About
            </Link>
            {userData =! null ? <>
              <Link
              to="/Doctors"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Doctors
            </Link>
            <Link
              to="/Posts"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Posts
            </Link>

            </>:<>
            </>}
            <Link
              to="/"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Services
            </Link>
           

            {userData == null ? <>
                <Link
              to="/login"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
             login
            </Link>
            <Link
              to="/register"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Register
            </Link>
            </>:<>
            <Link
              to="/"
              onClick={logOut}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              LogOut
            </Link>
            </>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;