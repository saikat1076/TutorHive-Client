
// import profilePic from "../assets/profile.jpg";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { motion } from "motion/react"



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    return (
        <div className="navbar sticky top-0 z-50 backdrop-blur-lg lg:px-5 glass shadow-lg bg-[#E0F7FF] place-items-center">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <button
                        tabIndex="0"
                        className="btn btn-ghost lg:hidden"
                        aria-label="Toggle Navigation"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                    </button>
                    <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <NavLink
                            className={({ isActive }) =>
                                `font-bold text-lg ${isActive
                                    ? "rounded-md btn bg-blue-600   "
                                    : "rounded-md btn btn-outline border-none"
                                }`
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `font-bold text-lg ${isActive
                                    ? "rounded-md btn bg-blue-600   "
                                    : "rounded-md btn btn-outline border-none"
                                }`
                            }
                            to="/add-tutorials"
                        >
                            Add Tutorials
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `font-bold text-lg ${isActive
                                    ? "rounded-md btn bg-blue-600   "
                                    : "rounded-md btn btn-outline border-none"
                                }`
                            }
                            to="/find-tutors"
                        >
                            Find Tutors
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `font-bold text-lg ${isActive
                                    ? "rounded-md btn bg-blue-600   "
                                    : "rounded-md btn btn-outline border-none"
                                }`
                            }
                            to="/my-tutorials"
                        >
                            My Tutorials
                        </NavLink>
                    </ul>
                </div>
                <motion.div
                initial={{ x: "100%", color: "#F5F5F5" }}  // Start with light blue
                animate={{ x: 0, color: "#03346E" }}       // Move to position and change to gold
                transition={{ duration: 3 }}
                style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                }}
                >
                Tutor<motion.span 
                animate= {{color: ['#6499E9', '#C6E7FF']}}
                transition={{duration: 2 , delay: 3, repeat: Infinity}}
                >Hive</motion.span>
            </motion.div>
        </div>

            {/* Navbar Center */ }
    <div className="navbar-center hidden lg:flex space-x-3">
        <ul className="menu menu-horizontal px-1 space-x-3">
            <NavLink
                className={({ isActive }) =>
                    `font-bold text-sm ${isActive
                        ? "rounded-md btn btn-sm bg-blue-600    text-white"
                        : "rounded-md btn btn-sm btn-outline border-none "
                    }`
                }
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `font-bold text-sm ${isActive
                        ? "rounded-md btn btn-sm bg-blue-600    text-white"
                        : "rounded-md btn btn-sm btn-outline border-none"
                    }`
                }
                to="/add-tutorials"
            >
                Add Tutorials
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `font-bold text-sm ${isActive
                        ? "rounded-md btn btn-sm bg-blue-600    text-white"
                        : "rounded-md btn btn-sm btn-outline border-none "
                    }`
                }
                to="/find-tutors"
            >
                Find Tutors
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `font-bold text-sm ${isActive
                        ? "rounded-md btn btn-sm bg-blue-600    text-white"
                        : "rounded-md btn btn-sm btn-outline border-none "
                    }`
                }
                to="/my-tutorials"
            >
                My Tutorials
            </NavLink>
        </ul>
    </div>

    {/* Navbar End */ }
    <div className="navbar-end space-x-3">
        {user && user?.email ? (
            <div className="relative group flex flex-row">
                {/* User Image */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                src={user?.photoURL || profilePic}
                                alt="Tailwind CSS Navbar component"
                                className="w-10 h-10 rounded-full cursor-pointer"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a aria-disabled="true"
                                className="justify-between cursor-not-allowed">
                                {user?.displayName || "User"}
                                <span className="badge bg-blue-600 text-white">New</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Tooltip */}
                <div className="absolute right-2/3 transform -translate-x-1/2 mt-2 px-4 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {user?.displayName || "User"}
                </div>
                {/* Logout Button */}
                <button
                    onClick={logOut}
                    className="btn btn-sm bg-blue-600 my-auto text-white text-sm ml-2"
                >
                    Logout
                </button>
            </div>
        ) : (
            <>
                <Link to="/auth/login" className="btn btn-sm bg-blue-600    text-white text-sm">
                    Login
                </Link>
                <Link to="/auth/register" className="btn btn-sm bg-blue-600    text-white text-sm">
                    Register
                </Link>
            </>
        )}
    </div>
        </div >
    );
};

export default Navbar;