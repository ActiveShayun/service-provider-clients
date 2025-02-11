import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../componemts/Footer";

const Layout = () => {

    return (
        <div
            className="max-w-screen-xl mx-auto px-6"
        >
            <div className="fixed z-[999999] lg:w-[1250px] w-full">
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;