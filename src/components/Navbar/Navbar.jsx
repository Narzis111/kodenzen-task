import { Link, NavLink } from "react-router-dom";
import logo from "/logo-removebg-preview.png";
import logo1 from "../../assets/user.png";
import useAuth from "../../hooks/useAuth";
import { BsFillPinAngleFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);

    const navLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/booking">Booking</NavLink></li>
            <li><NavLink to="/update">Update Profile</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <NavLink to="/">
                    <div className="flex items-center" >
                        <div className="items-center w-16">
                            <img className="w-full h-full object-fit text-xl" src={logo} alt="" />
                        </div>
                        <h1 className="md:text-md text-base text-blue-950 font-extrabold">S<span className="text-yellow-600">K</span>YLINE R<span className="text-yellow-600">E</span>ALTY</h1>
                    </div>
                </NavLink>
            </div>

            <div className="navbar-center hidden gap-2 lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="relative">
                    <span className="absolute text-slate-500 top-4 left-4"><BsFillPinAngleFill></BsFillPinAngleFill></span>

                    <input
                        type="text"
                        placeholder="Add your listing here"
                        className="input input-bordered rounded-full w-24 md:w-auto pl-9"
                    />
                </div>

            <div className="navbar-end items-center">
                {user?.email ? (
                    <div className="relative flex justify-between items-center">
                        <label 
                            tabIndex={0} 
                            className="btn btn-ghost btn-circle avatar"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <div className="w-10 rounded-full">
                                <img className="cursor-pointer" src={user?.photoURL || ("https://i.ibb.co/vQSpww7/user.png")} />
                            </div>
                        </label>
                        {showDropdown && (
                            <div className="absolute top-12 right-0 bg-white rounded shadow-md p-2">
                                <span className="text-gray-600">{user.displayName}</span> <br />
                                <span className="text-gray-600">{user.email}</span>
                            </div>
                        )}
                        <button className="btn btn-sm btn-ghost" onClick={logOut}>Logout</button>
                    </div>
                ) : (
                    <Link to='/login'>
                        <button className="btn btn-sm btn-ghost">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
