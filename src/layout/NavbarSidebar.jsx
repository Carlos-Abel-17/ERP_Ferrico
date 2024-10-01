import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FiMenu, FiHome, FiUser } from 'react-icons/fi';
import { FaUserAlt } from "react-icons/fa";
import imgs from '/public/logo_ferricoSAC.png'
import { IoLogOut } from "react-icons/io5";
import '../style/components/NavbarSidebarStyle.css'

const NavbarSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [UserOpen,setUserOpen]=useState(false)
  const navigate = useNavigate()
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const toggleUser =()=>{
  setUserOpen(!UserOpen)
  }
  const CerrarSesion =()=>{
    navigate('/')
  }

  return (
    <div className="h-screen flex flex-col">

      <nav className="bg-orange-500 border-b border-yellow-500 shadow fixed top-0 left-0 right-0 z-50">
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
              onClick={toggleUser}
             className='border bg-gray-500 rounded-2xl p-2'>
              <FaUserAlt />
            </button>
          </div>
        </div>
          {!UserOpen && (
            <div
            className='contenedorUser'
          >
            <h1 className='text-white'>Información del usuario</h1>
            <div>
              <button onClick={CerrarSesion} className="text-white items-center flex p-2">
                <h1 className="mr-1">Cerrar Sesión</h1>
                <IoLogOut />
              </button>
            </div>
          </div>
            )}
      </nav>
      
      <div className="flex flex-1 pt-16">
        <aside
          className={`bg-orange-500 border-r border-yellow-500 w-64 transform transition-transform duration-300
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
             fixed top-0 left-0 h-full z-30 md:relative md:translate-x-0`}
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
