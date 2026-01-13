import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-300 flex justify-between items-center min-h-12 text-lg px-2 ">
      <div>
        <NavLink
          to={"/"}
          className="text-3xl font-bold bg-linear-to-b from-blue-500 via-blue-500 to-red-500 bg-clip-text text-transparent cursor-pointer"
        >
          Logo
        </NavLink>
      </div>

      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/usestate"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : "hover:text-blue-500"
            }
          >
            UseState
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/useeffect"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : "hover:text-blue-500"
            }
          >
            UseEffect
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : "hover:text-blue-500"
            }
          >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/updateProduct"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : "hover:text-blue-500"
            }
          >
            UpdateProduct
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/addProduct"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : "hover:text-blue-500"
            }
          >
            AddProduct
          </NavLink>
        </li>
      </ul>

      <div className="flex gap-2">
        <button className="bg-blue-400 text-white px-2 py-1 border rounded-[0.5rem] min-w-20 cursor-pointer">
          <NavLink to="/login">Login</NavLink>
        </button>
        <button className="bg-blue-400 text-white px-2 py-1 border rounded-[0.5rem] min-w-20 cursor-pointer">
          <NavLink to="/register">Register</NavLink>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
