import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home"; 
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Notfound from "./Notfound";
import Description from "./Description";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={
        <PrivateRoute>
        <Product />
        </PrivateRoute>
      } />
      <Route path="/description/:id" element={<Description />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  );
};

export default AllRoutes;
