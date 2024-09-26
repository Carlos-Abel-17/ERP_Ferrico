import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./features/auth/Login";
import NavbarSidebar from "./layout/NavbarSidebar";
import Estadistica from "./page/Estadistica";
import Users from "./page/Users";
import React, { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/Dashboard') {
      navigate('/Dashboard/estadistica');
    }
  }, [location.pathname, navigate]); 

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<NavbarSidebar />}>
          <Route path="estadistica" element={<Estadistica />} /> 
          <Route path="Trabajadores" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
