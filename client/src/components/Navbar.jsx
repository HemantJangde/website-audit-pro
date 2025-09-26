import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Create motion-enabled Link
const MotionLink = motion(Link);

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar bg-yellow-100/50 sticky top-0 z-50 shadow-lg backdrop-blur-md px-6 py-4">
      {/* Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-extrabold text-yellow-700 hover:text-yellow-900 transition-colors duration-300"
        >
          WebAuditPro
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
      
        {isLoggedIn ? (
          <motion.button
            onClick={() => setIsLoggedIn(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-warning text-white"
          >
            Logout
          </motion.button>
        ) : (
          <>
            <MotionLink
              to="/login"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700"
            >
              Login
            </MotionLink>
            <MotionLink
              to="/signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-yellow-400 text-medium text-white rounded-lg hover:bg-white hover:text-yellow-700
              
              "
            >
              Signup
            </MotionLink>
          </>
        )}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          className="btn btn-ghost p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-yellow-50/80 backdrop-blur-md shadow-md flex flex-col items-start p-6 space-y-3 md:hidden"
          >

            {isLoggedIn ? (
              <motion.button
                onClick={() => { setIsLoggedIn(false); setMenuOpen(false); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-warning w-full"
              >
                Logout
              </motion.button>
            ) : (
              <>
                <MotionLink
                  to="/login"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn  text-yellow-700 bg-transparent  hover:bg-yellow-400/40 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </MotionLink>
                <MotionLink
                  to="/signup"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
              className="btn bg-yellow-400 text-medium text-white rounded-lg hover:bg-white hover:text-yellow-700
              
              "
                  onClick={() => setMenuOpen(false)}
                >
                  Signup
                </MotionLink>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
