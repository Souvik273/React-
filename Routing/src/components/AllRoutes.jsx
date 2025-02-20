// src/components/AllRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import UserDetails from "../Pages/UserDetails";
import PrivateRoute from "./PrivateRoute";


function AllRoutes() {
  return (
    <Routes id='nav-links'>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/log-in" element={<Login />} />
      <Route path='/user/:userId' element={<PrivateRoute><UserDetails/></PrivateRoute>}/>
    </Routes>);
}

export default AllRoutes;

