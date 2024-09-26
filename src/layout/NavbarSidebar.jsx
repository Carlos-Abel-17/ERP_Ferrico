import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiMenu, FiHome, FiUser } from 'react-icons/fi';
import { FaUserAlt } from "react-icons/fa";
import imgs from '/public/logo_ferricoSAC.png'

const NavbarSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col">

      <nav className="bg-white border-b border-gray-200 shadow fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 focus:outline-none md:hidden"
          >
            <FiMenu className="w-6 h-6" />
          </button>
          <div className='flex items-center '>
           <img src={imgs} alt="imagen" className='w-12'/>
          <h1 className="text-xl font-semibold">Dashboard Ferrico</h1>
          </div>

          <div className="flex items-center">
            <button 
             className='border bg-gray-500 rounded-2xl p-2'
            >
              <FaUserAlt />
            </button>
          </div>
          
        </div>
      </nav>

      <div className="flex flex-1 pt-16">
        <aside
          className={`bg-white border-r border-white w-64 transform transition-transform duration-300
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
             fixed top-0 left-0 h-full z-40 md:relative md:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className={` h-full ${sidebarOpen ? "px-3 pt-20": "px-3 pt-8 "} overflow-y-auto`} >
            <ul className=" top-0 left-0 space-y-2 font-medium">
              <li>
                <Link
                  to="/Dashboard/estadistica"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <FiHome className="w-5 h-5" />
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Dashboard/Trabajadores"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <FiUser className="w-5 h-5" />
                  <span className="ml-3">Users</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>


        <div className={`flex-1 p-4 bg-gray-100 ${sidebarOpen ? "md:ml-0" : ""}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NavbarSidebar;
