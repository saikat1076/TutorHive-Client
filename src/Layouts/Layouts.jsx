import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Layouts = () => {
    return (
        <div className='text-black'>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-550px)] bg-slate-300">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Layouts;