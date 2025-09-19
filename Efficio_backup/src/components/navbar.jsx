import {useState,useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loginform from "../components/loginform";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();
    
         useEffect(() => {
         AOS.init({ duration: 2000 }); // duration in ms
            }, []);
  return (
    <div>
       <div className="bg-[#FAFAD2] text-gray-800">
      <header data-aos="fade-down-left" className="flex justify-between items-center
       px-8 py-4 bg-white shadow fixed top-0 left-0 w-full z-50">
        <h1 className="text-3xl font-bold px-6">Efficio</h1>
        <nav className="flex space-x-6">
          <button  onClick={() => setShowLogin(!showLogin)}
          className="bg-[#FFD972] px-6 py-2 rounded-full font-medium shadow 
              hover:shadow-lg hover:scale-105 active:scale-95 transition duration-300">
            Log In
          </button>

          <button onClick={() => navigate("/")}
           className="bg-[#FFB7B2] px-6 py-2 rounded-full font-medium shadow 
              hover:shadow-lg hover:scale-105 active:scale-95 transition duration-300">
            Home
          </button>

          <button onClick={() => navigate("/EmployeeBoard")}
           className="bg-[#B8C480] px-6 py-2 rounded-full font-medium shadow 
              hover:shadow-lg hover:scale-105 active:scale-95 transition duration-300">
            Contact
          </button>
        </nav>
      </header>

 {showLogin && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-60">
            <Loginform onClose={() => setShowLogin(false)} />
        </div>
        )}
</div>
    </div>
  )
}

export default Navbar
