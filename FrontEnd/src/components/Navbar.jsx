import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

function Navbar() {
  const [authUser] = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur border-b border-white/10 shadow-md px-4 md:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Navbar Start */}
        <div className="flex items-center gap-4">
          {/* Mobile Dropdown */}
          <div className="relative lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <ul className="absolute bg-gray-800 text-white rounded-lg shadow-lg p-4 mt-2 w-48 z-50">
                <li className="py-1 hover:text-blue-400">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="py-1 hover:text-blue-400">
                  <Link to="/course" onClick={() => setIsMobileMenuOpen(false)}>
                    Course
                  </Link>
                </li>
                <li className="py-1 hover:text-blue-400">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li className="py-1 hover:text-blue-400">
                  <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                    About
                  </Link>
                </li>
                {authUser && (
                  <li className="py-1 hover:text-blue-400">
                    <Link
                      to="/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Literary Haven
          </Link>
        </div>

        {/* Center Nav (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 text-white font-medium">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/course" className="hover:text-blue-400 transition">
            Course
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          {authUser && (
            <Link to="/dashboard" className="hover:text-blue-400 transition">
              Profile
            </Link>
          )}
        </div>

        {/* Navbar End */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center bg-transparent border border-white/20 text-white rounded-md px-3 py-1 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition">
            <svg
              className="h-5 w-5 opacity-50 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <path d="m21 21-4.3-4.3" strokeWidth="2" />
            </svg>
            <input
              type="search"
              placeholder="Search"
              className="bg-transparent outline-none placeholder-white/50 text-sm w-full"
            />
          </div>

          {/* Auth */}
          {authUser ? (
            <Logout />
          ) : (
            <div>
              <button
                onClick={() => {
                  document
                    .getElementById("login-backdrop")
                    .classList.remove("hidden");
                  document.getElementById("my_modal_5").showModal();
                }}
                className="relative group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-5 py-2 rounded-md shadow hover:shadow-blue-500/30 transition-all"
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-md blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
