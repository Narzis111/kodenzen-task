import { Link, NavLink } from "react-router-dom";
import logo from "/logo-removebg-preview.png"
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();



    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
         <li><NavLink to="/booking">Booking</NavLink></li>
         <li><NavLink to="/update">Update Profile</NavLink></li>
        
    </>


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
                <NavLink to="/"><div className="flex items-center" >
                    <div className="w-20 items-center">
                        <img className="w-full h-full object-fit text-xl" src={logo} alt="" />
                    </div>
                    <h1 className="text-xl text-blue-950 font-extrabold mt-5">S<span className="text-yellow-600">K</span>YLINE R<span className="text-yellow-600">E</span>ALTY</h1>
                </div>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navLinks}

                </ul>
            </div>


            <div className="navbar-end">
            {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img className="cursor-pointer" src={user?.photoURL || "https://i.ibb.co/Qdj76bR/user.png"} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>                    
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName|| user?.email}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={logOut}
                                        className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }


                
                
            </div>
        </div>
    );
};

export default Navbar;