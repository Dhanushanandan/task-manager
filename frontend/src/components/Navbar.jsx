import { Link } from "react-router-dom";
import axios from "axios";

function Navbar({ user, setUser }) {
  const handleLogout = () => {
    axios
      .get("http://localhost:5000/auth/logout", { withCredentials: true })
      .then(() => setUser(null))
      .catch(() => setUser(null));
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 p-4 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-6 text-lg">
          <Link
            to="/dashboard"
            className="transition-transform transform hover:scale-105 hover:text-purple-300 font-semibold"
          >
            Dashboard
          </Link>
          <Link
            to="/tasks"
            className="transition-transform transform hover:scale-105 hover:text-purple-300 font-semibold"
          >
            Tasks
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm md:text-base font-medium text-gray-300">
            Hello, <span className="text-white">{user?.displayName || "User"}</span>
          </span>
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-red-700 hover:to-pink-700 transition-transform transform hover:scale-105"
            type="button"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
