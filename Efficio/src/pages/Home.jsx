import {useState,useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loginform from "../components/loginform";



export default function Home() {
     const [showLogin, setShowLogin] = useState(false);

     useEffect(() => {
     AOS.init({ duration: 2000 }); // duration in ms
        }, []);
        
  return (
        
    <div className="bg-[#FAFAD2] text-gray-800">
      

          

      <section className="flex flex-col md:flex-row items-center justify-between px-8 pt-20 pb-16 max-w-6xl mx-auto ">
        <div className="max-w-lg ">
          <h2 className="text-4xl font-extrabold mb-4">
            Manage projects easily with Efficio
          </h2>
          <p className="text-lg mb-6 font-medium">
            A simple and intuitive project management tool for teams.
          </p>
          <button onClick={() => setShowLogin(!showLogin)}
          className="bg-[#FFD972] px-6 py-2 rounded-lg font-medium shadow 
              hover:shadow-lg hover:scale-105 active:scale-95 transition duration-300">
            Start Managing Projects
          </button>
        </div>

        <div className="mt-8 md:mt-0">
          <img
            data-aos="fade-left"
            src="..\imges\homepageimg.png"
            alt="Team working"
            className="w-[500px]"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-8  pt-6 pb-12">
        <div
          className="bg-white shadow-md rounded-2xl p-6 text-center
            hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300"
        >
          <div className="bg-[#FFD972] w-12 h-12 mx-auto rounded-lg mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Project Dashboard</h3>
          <p className="text-gray-600">View and manage all projects</p>
        </div>

        <div
          className="bg-white shadow-md rounded-2xl p-6 text-center
            hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300"
        >
          <div className="bg-[#FFB7B2] w-12 h-12 mx-auto rounded-lg mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Employee Tasks</h3>
          <p className="text-gray-600">Track tasks assigned to you</p>
        </div>

        <div
          className="bg-white shadow-md rounded-2xl p-6 text-center
            hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300"
        >
          <div className="bg-[#B8C480] w-12 h-12 mx-auto rounded-lg mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Manager Insights</h3>
          <p className="text-gray-600">Analyze-team performance</p>
        </div>
      </section>

    {showLogin && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-60">
            <Loginform onClose={() => setShowLogin(false)} />
        </div>
        )}

    </div>
  );
}
