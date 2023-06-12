// import React from "react";
import {  Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <nav>
        
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/text">Text</Link>
      </nav>
      {/* <Outlet /> */}
    </div>
  );
};
export default Navbar;
