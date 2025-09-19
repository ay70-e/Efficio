import { useState , useEffect} from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"; 

export default function Loginform({ onClose }) {
  const [showpassword, setShowpassword] = useState(false);
  const [visible, setVisible] = useState(false);

   useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10); 
    return () => clearTimeout(timer);
  }, []);

  return (

    <div 
    className="min-h-[50%] flex items-center justify-center  relative">
     
      {/* Login Form */}
       <div className={`p-10 bg-white rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl
                       transform transition-all duration-500
                       ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>

      <div className="flex flex-col items-center gap-0.5 mb-4">
        <h2 className="text-xl  text-[#080808] font-bold mb-4 justify-center rounded">Efficio</h2>
        <p className=" text-[#08080886]">Login with your username and password</p>
        </div>
         <div className="flex flex-col gap-4 mb-4">
         <div className="relative group w-full h-10">
            <input
              type="text"
              placeholder="Username"
              className="w-full h-full px-4 py-2 border-0 border-b-2 border-[#ffd972] text-sm font-medium
              text-[#080808] bg-transparent z-10 relative focus:outline-none"
            />
            <span className="absolute bottom-0 left-0 w-full h-0 bg-[#ffd972] transition-all duration-1000 
            group-focus-within:h-full  z-0"></span>
          </div>
          
        <div className="relative group w-full h-10">
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Password"
              className="w-full h-full px-4 py-2 border-0 border-b-2 border-[#ffd972] text-sm font-medium
              text-[#7a8255] bg-transparent z-10 relative focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowpassword(!showpassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 text-[#7a8255]"
            >
              {showpassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
            </button>

            <span className="absolute bottom-0 left-0 w-full h-0 bg-[#ffd972] transition-all duration-1000 
            group-focus-within:h-full  z-0"></span>
          </div>

        <button
          onClick={onClose}

            className="relative w-full py-2 px-4 mb-2 me-2 overflow-hidden text-sm font-medium text-[#080808] rounded-2xl z-10
                      bg-gradient-to-br from-[#b8c480] to-[#b8c480] transition-colors duration-300
                      group hover:text-white"
          >
        <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#ffd972] to-[#ffd972] z-0
                            transition-all duration-700 ease-in-out group-hover:h-full rounded-2xl"></span>
        <span className="relative z-10">Login</span>
        </button>
        </div>
      </div>
     
    </div>
  );
}
