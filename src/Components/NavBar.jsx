// Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../fairebase/fairbase___init__";
import { FaBars, FaTimes, FaLeaf, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => setUser(u));
    return () => unsub();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    `py-2 px-3 rounded-md transition-all duration-300 ${isActive(path) ? "bg-gray-800 text-green-400" : "text-white hover:text-green-400"
    }`;

  return (
    <nav className={` top-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-sm shadow-lg" : "bg-green-500 shadow-md"}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-black hover:text-blue-600">
          <FaLeaf />
          <span>GreenNest</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link className={linkClasses("/")} to="/">Home</Link>
          <Link className={linkClasses("/plant")} to="/plant">Plants</Link>
          {user && <Link className={linkClasses("/profile")} to="/profile">My Profile</Link>}

          {user ? (
            <div className="flex items-center gap-3 ml-4">
              {/* Avatar with hover email */}
              <div className="relative group">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border-2 border-green-500 cursor-pointer"
                />
                <span className="absolute  left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                  {user.email}
                </span>
              </div>

              {/* Logout button stays normal */}
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-sm text-white border rounded-md hover:bg-red-500/10"
              >
                Logout
              </button>
            </div>

          ) : (
            <div className="flex gap-2 ml-4">
              <Link to="/login" className="px-3 py-1 border rounded-md text-white hover:bg-gray-800">Login</Link>
              <Link to="/register" className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-1">
                Register <FaUserCircle />
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-xl p-2 rounded-md hover:bg-gray-800">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-500 px-6 py-4 space-y-3 border-t border-gray-800">
          <Link onClick={() => setMenuOpen(false)} to="/" className={linkClasses("/")}>Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/plant" className={linkClasses("/plant")}>Plants</Link>
          {user && <Link onClick={() => setMenuOpen(false)} to="/profile" className={linkClasses("/profile")}>My Profile</Link>}

          {user ? (
            <div className="flex items-center gap-3 pt-3 border-t border-gray-700">
              <img src={user.photoURL || "/default-avatar.png"} alt="avatar" className="w-10 h-10 rounded-full border-2 border-green-500" />
              <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="px-3 py-1 text-sm text-white border rounded-md hover:bg-red-500/10">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 pt-3 border-t border-gray-700">
              <Link onClick={() => setMenuOpen(false)} to="/login" className="w-full py-2 text-center border rounded-md text-white hover:bg-gray-800">Login</Link>
              <Link onClick={() => setMenuOpen(false)} to="/register" className="w-full py-2 text-center bg-green-600 text-white rounded-md hover:bg-green-700">Register</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
