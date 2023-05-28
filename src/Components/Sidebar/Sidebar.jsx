import React from 'react';
import SidebarItem from '../SidebarItem';
import logo from '../../assets/logo.png'
const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-gray-700">
      <div className="px-4 py-4 border-spacing-1">
       <img src={logo} alt="Logo" className='h-9  w-[30%] '/>
      </div>
      <nav >
        <h3 className='text-sm font-semibold text-gray-600 px-2 '>Scrumboard</h3>
        <div className='mt-3'>
            <a href="#" className=' p-2 flex justify-between items-center'>
                <span>Backlog</span>
                <span>23</span>

            </a>

        </div>

      </nav>

     
    </div>
  );
};

export default Sidebar;