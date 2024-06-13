import React from "react";
import { Route, Routes } from "react-router-dom";
import Productdetails from "./ProductDetails";
import Productlist from "../ProductList.jsx";
import Addproduct from "./AddProduct";
import EditProduct from "./EditProduct";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Productlist />}></Route>
        <Route path="/Details/:id" element={<Productdetails />}></Route>
        <Route path="/AddProduct" element={<Addproduct />}></Route>
        <Route path="/EditProduct/:id" element={<EditProduct />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;