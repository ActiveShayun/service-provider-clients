import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Auth-provider/AuthProvider";
import * as motion from "motion/react-client"

const Navbar = () => {
    const { handleLogOut, user } = useContext(AuthContext)
    const link = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'underline lg:text-white' : 'lg:text-white font-semibold'} >Home</NavLink>
        <NavLink to='service' className={({ isActive }) => isActive ? 'underline lg:text-white' : 'lg:text-white font-semibold'} >Service</NavLink>
        {
            !user &&
            <NavLink to='/login'
                className={({ isActive }) => isActive ? 'underline ' :
                    ' font-semibold'} >
                Login</NavLink>
        }
    </>

    const link2 = <>
        <NavLink to='myReview/' className={({ isActive }) => isActive ? 'underline ' : ' font-semibold '}>My Review</NavLink>
        <NavLink to='AddService/' className={({ isActive }) => isActive ? 'underline ' : ' font-semibold '}>Add Service</NavLink>
        <NavLink to='myService/' className={({ isActive }) => isActive ? 'underline ' : ' font-semibold '}>My Service</NavLink>
    </>

    const box = {
        width: 40,
        height: 40,
        backgroundColor: "#f5f5f5",
        borderRadius: 5,
    }

    return (
        <div className="navbar w-full p-0 rounded-br-md rounded-bl-md   flex items-center justify-between bg-black opacity-65">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <img className="w-[40px] h-[40] rounded-full"
                            alt="Tailwind CSS Navbar component"
                            src={user?.photoURL} />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu bg-green-700 text-white menu-sm dropdown-content opacity-0 rounded-box z-[5555] mt-3 w-52 p-2 shadow">
                        {link2}
                        {
                            user && link
                        }
                    </ul>
                </div>
                <img
                    className="w-[40px] h-[40px] rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0agj9cG0DrUd5nehmU65rrvJuzWrkLt-HvQ&s" alt="" />
                <motion.span
                    animate={{ x: 40 }}
                    transition={{ type: "spring", stiffness: 100, repeat: Infinity }}
                    className="font-bold text-white -ml-8 ">GROW TEC</motion.span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal z-[66555] px-1 flex gap-3 items-center">
                    {link}
                    {
                        user &&
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[555] mt-3 w-52 p-2 shadow">
                                {link2}
                            </ul>
                        </div>
                    }
                </ul>
            </div>
        </div >
    );
};

export default Navbar;