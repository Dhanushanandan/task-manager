import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard({ user, setUser }) {
  const [tasks, setTasks] = useState({ total: 0, pending: 0, completed: 0 });

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        const total = data.length;
        const pending = data.filter((task) => task.status === "Pending").length;
        const completed = data.filter((task) => task.status === "Done").length;
        setTasks({ total, pending, completed });
      });
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black
                 flex flex-col"
    >
      {/* <Navbar user={user} setUser={setUser} /> */}

      <div className="p-6 max-w-6xl mx-auto flex flex-col items-center gap-8">
        <h1 className="text-white text-4xl font-extrabold mb-10">
          Welcome, {user.displayName}
        </h1>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Card for Total Tasks */}
          <div className="cursor-pointer group overflow-hidden p-5 relative w-64 h-64 bg-neutral-800 rounded-xl">
            <div className="bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-24 h-24"></div>
            <div className="bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-24 h-24"></div>
            <div className="bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-24 h-24"></div>
            <div className="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-12 h-12"></div>
            <div className="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-44 h-44"></div>
            <div className="bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-64 h-64"></div>
            <div className="bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-4 h-4"></div>
            <div className="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-50 rounded-xl flex flex-col gap-2 justify-center">
              <span className="text-neutral-50 font-bold text-2xl italic">
                Total Tasks
              </span>
              <p className="text-neutral-300 text-4xl text-center">{tasks.total}</p>
            </div>
          </div>

          {/* Card for Pending Tasks */}
          <div className="cursor-pointer group overflow-hidden p-5 relative w-64 h-64 bg-neutral-800 rounded-xl">
            <div className="bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-24 h-24"></div>
            <div className="bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-24 h-24"></div>
            <div className="bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-24 h-24"></div>
            <div className="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-12 h-12"></div>
            <div className="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-44 h-44"></div>
            <div className="bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-64 h-64"></div>
            <div className="bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-4 h-4"></div>
            <div className="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-50 rounded-xl flex flex-col gap-2 justify-center">
              <span className="text-neutral-50 font-bold text-2xl italic">
                Pending Tasks
              </span>
              <p className="text-neutral-300 text-4xl text-center">{tasks.pending}</p>
            </div>
          </div>

          {/* Card for Completed Tasks */}
          <div className="cursor-pointer group overflow-hidden p-5 relative w-64 h-64 bg-neutral-800 rounded-xl">
            <div className="bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-24 h-24"></div>
            <div className="bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-24 h-24"></div>
            <div className="bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-24 h-24"></div>
            <div className="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-12 h-12"></div>
            <div className="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-44 h-44"></div>
            <div className="bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-64 h-64"></div>
            <div className="bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-4 h-4"></div>
            <div className="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-50 rounded-xl flex flex-col gap-2 justify-center">
              <span className="text-neutral-50 font-bold text-2xl italic">
                Completed Tasks
              </span>
              <p className="text-neutral-300 text-4xl text-center">{tasks.completed}</p>
            </div>
          </div>
        </div>

        <Link
          to="/tasks"
          className="group relative mt-10 cursor-pointer overflow-hidden p-5 w-64 bg-neutral-800 rounded-xl shadow-inner shadow-blue-700 transition-all duration-700 ease-in-out hover:scale-110 hover:shadow-[0_0_40px_10px_rgba(59,130,246,0.8)] text-white font-semibold text-center"
        >
          Manage Tasks
          <div className="bg-transparent group-hover:scale-150 -top-6 -left-6 absolute shadow-blue-800 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-24 h-24"></div>
          <div className="bg-transparent group-hover:scale-150 top-20 left-20 absolute shadow-blue-600 shadow-inner rounded-full transition-all ease-in-out duration-1000 w-44 h-44"></div>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
