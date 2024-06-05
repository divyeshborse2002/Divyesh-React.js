import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';


let Links = [{ path: "/", title: "Home" },{ path: "/about", title: "About" },{ path: "/contact", title: "Contact" },{ path: "/product", title: "Product" }];
const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "75px",
        backgroundColor: "teal",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
       
      }}
    >
     {Links.map((el)=>( <NavLink style={({isActive})=>{
        return isActive ? {color:"red",textDecoration:"none"}:{color:"white",textDecoration:"none"}
     }}  key={el.title} to={el.path}>{el.title}</NavLink>) )}
     <NavLink to={"/login"}><Button variant="primary">Login</Button></NavLink>
    </div>
  );
};

export default Navbar;
