import { Outlet}  from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Root = () => {
    return (
        <div className="text-Roboto">
            <div className="max-w-[1180px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
      
        
    );
};

export default Root;