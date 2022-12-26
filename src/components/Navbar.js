import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-[#40415a]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#8594e7] rounded-box w-52"
          >
            <li>
              <Link className="text-white  mt-3 text-xl">Register</Link>
            </li>
            <li>
              <Link className="text-white  mt-3 text-xl">Login</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-2xl text-white" to="/">
          Book Now
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="text-white ml-6  btn btn-outline">Register</Link>
          </li>
          <li>
            <Link className="text-white ml-6  btn btn-outline">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
