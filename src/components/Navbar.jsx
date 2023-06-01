import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const gradientStyle = {
        background: 'linear-gradient(to right, yellow, purple)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
        };


  return (
    <nav className="py-2 px-4 shadow-lg bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
          <a href="#" className="text-2xl font-bold" style={gradientStyle}>
            Pala-Mate
          </a>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/home" className="btn btn-primary">
              <FaHome />
              </Link>
            </li>
            <li>
              <Link to="/about" className="btn btn-primary">
              <FaInfoCircle />
              </Link>
            </li>
            <li>
              <Link to="/contact" className="btn btn-primary">
              <FaEnvelope />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
