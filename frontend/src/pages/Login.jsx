import React from "react";
import Navbar from "../components/Navbar"; // adjust if needed

function Login() {
  const handleLogin = () => {
    window.location.assign("http://localhost:5000/auth/google");
  };

  return (
    <>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
        {/* Title outside the box, bigger */}
        <h1 className="text-white text-5xl font-extrabold mb-10 select-none">
          Task Management System
        </h1>

        {/* Dark box with the button */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm">
          <div
            onClick={handleLogin}
            className="relative group cursor-pointer inline-block select-none"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin();
            }}
          >
            <div
              className="
                relative px-8 py-4 border-2 border-blue-500 text-blue-500 font-bold text-lg rounded-lg
                transform transition-all duration-300
                group-hover:translate-y-1 group-hover:translate-x-1
                shadow-[6px_6px_10px_rgba(0,0,0,0.6),-6px_-6px_10px_rgba(255,255,255,0.1)]
                group-hover:shadow-[8px_8px_15px_rgba(0,0,0,0.8),-8px_-8px_15px_rgba(255,255,255,0.15)]
              "
            >
              Sign in with Google
            </div>

            <div
              className="
                absolute inset-0 border-2 border-dashed border-blue-500 rounded-lg
                opacity-50 group-hover:opacity-100 transition-opacity duration-300
              "
            ></div>

            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping shadow-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-ping shadow-lg"></div>
            <div className="absolute top-1/3 left-3 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-70"></div>
            <div className="absolute top-2/3 right-3 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-70"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
