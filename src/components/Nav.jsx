import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '/menu.png';
import logom from '/logom.png';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg border-black h-[10vh] relative z-50 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex ml-5 items-center">
            <img src={logom} alt="medicine icon" className="h-[8vh]" />
            <h1 className="text-[3vh] font-sans">ClanGamonal</h1>
          </div>

          {/* Menú grande */}
          <div className="hidden sm:flex flex-grow justify-center items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900 text-[2vh] hover:bg-sky-300 w-[10vh] flex justify-center rounded-md">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900 text-[2vh] hover:bg-sky-300 w-[10vh] flex justify-center rounded-md">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 text-[2vh] hover:bg-sky-300 w-[10vh] flex justify-center rounded-md">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 text-[2vh] hover:bg-sky-300 w-[10vh] flex justify-center rounded-md">Contact</Link>
          </div>

          {/* Botón "Regístrate ahora" siempre al final */}
          <div className="hidden sm:flex justify-end">
            <button className="ml-4 px-6 py-2 bg-blue-500 text-white text-[2vh] rounded-lg hover:bg-blue-600 h-[6vh]">
              Contáctanos ahora
            </button>
          </div>

          {/* Menú móvil */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <img src={menuIcon} alt="Menu icon" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Opciones del menú móvil */}
        {isOpen && (
          <div className="sm:hidden bg-slate-600 w-full z-50">
            <ul className="flex flex-col mt-1 space-y-2 bg-white w-full">
              <li className='shadow-lg rounded-xl'>
                <Link to="/" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li className='shadow-lg rounded-xl'>
                <Link to="/services" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li className='shadow-lg rounded-xl'>
                <Link to="/about" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li className='shadow-lg rounded-xl' >
                <Link to="/contact" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
