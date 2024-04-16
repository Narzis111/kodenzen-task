import { Link, NavLink } from "react-router-dom";
import logo from "/logo-removebg-preview.png";
import useAuth from "../../hooks/useAuth";
import { BsFillPinAngleFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div data-aos="zoom-in-right" data-aos-duration="" className="navbar bg-base-100 items-center">
            <div className="navbar-start">
                <div className="dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/booking">Booking</NavLink></li>
                        <li><NavLink to="/update">Update Profile</NavLink></li>
                    </ul>
                </div>
                <NavLink to="/">
                    <div className="flex items-center" >
                        <div className="items-center w-10 md:w-20">
                            <img className="w-full h-full object-fit text-xl" src={logo} alt="" />
                        </div>
                        <h1 className="lg:text-xl text-xs text-blue-950 font-extrabold">S<span className="text-orange-600">K</span>YLINE R<span className="text-orange-600">E</span>ALTY</h1>
                    </div>
                </NavLink>
            </div>

            <div className="navbar-center hidden gap-2 lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/booking">Booking</NavLink></li>
                    <li><NavLink to="/update">Update Profile</NavLink></li>
                </ul>
            </div>

           

            <div className="navbar-end items-center">
            <div className="relative hidden md:block lg:block">
                <span className="absolute text-slate-500 top-4 left-4"><BsFillPinAngleFill /></span>
                <input
                    type="text"
                    placeholder="Add your listing here"
                    className="input input-bordered rounded-full w-24 md:w-auto pl-9"
                />
            </div>
                {user?.email ? (
                    <div className="relative flex justify-between items-center">
                        <div
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <div className="w-10 rounded-full">
                                <img className="cursor-pointer" src={user?.photoURL || "https://i.ibb.co/vQSpww7/user.png"} alt="User" />
                            </div>
                        </div>
                        {showDropdown && (
                            <div className="absolute top-full right-12 -mt-7 border-2 border-orange-500 bg-white rounded shadow-md p-2 z-10" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                                <span className="text-gray-600">{user.displayName}</span> <br />
                                <span className="text-gray-600">{user.email}</span>
                                <button className="btn btn-sm bg-slate-300 border-2 border-black" onClick={logOut}>Log Out</button>
                            </div>
                        )}
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
