import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-gray-200 px-4">
      {/* Top Bar */}
      <div className="flex justify-between items-center min-h-12">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-bold bg-linear-to-b from-blue-500 via-blue-500 to-red-500 bg-clip-text text-transparent"
        >
          Logo
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 text-lg">
          {[
            "usestate",
            "useeffect",
            "products",
            "updateProduct",
            "addProduct",
            "carts",
          ].map((path) => (
            <li key={path}>
              <NavLink
                to={`/${path}`}
                className={({ isActive }) =>
                  isActive ? "text-blue-700 font-bold" : "hover:text-blue-500"
                }
              >
                {path}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2">
          <NavLink
            to="/login"
            className="bg-blue-400 text-white px-3 py-1 rounded-md w-20 text-center"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="bg-blue-400 text-white px-3 py-1 rounded-md w-20 text-center"
          >
            Register
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute right-0 top-12 w-48 bg-gray-300 shadow-lg p-4 rounded ">
          <ul className="flex flex-col gap-3 text-right items-center">
            <NavLink to="/usestate">UseState</NavLink>
            <NavLink to="/useeffect">UseEffect</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/updateProduct">UpdateProduct</NavLink>
            <NavLink to="/addProduct">AddProduct</NavLink>
            <NavLink to="/carts">Carts</NavLink>
          </ul>

          <div className="flex flex-col gap-2 mt-4">
            <NavLink className="bg-blue-400 text-white px-3 py-1 rounded-md">
              Login
            </NavLink>
            <NavLink className="bg-blue-400 text-white px-3 py-1 rounded-md">
              Register
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
