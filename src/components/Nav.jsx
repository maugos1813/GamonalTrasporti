import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '/menu.png';
import logom from '/logogam.jpeg';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg border h-[10vh] relative z-50 rounded-b-xl border-green-500">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex ml-5 items-center">
            <img src={logom} alt="medicine icon" className="h-[8vh]" />
          </div>

          {/* Menú grande */}
          <div className="hidden sm:flex flex-grow justify-center items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900 text-[2vh] hover:bg-green-300 w-[10vh] flex justify-center rounded-md">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 text-[2vh] hover:bg-green-300 w-[10vh] flex justify-center rounded-md">Chi Siamo</Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900 text-[2vh] hover:bg-green-300 w-[10vh] flex justify-center rounded-md">Servizi</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 text-[2vh] hover:bg-green-300 w-[10vh] flex justify-center rounded-md">Contatti</Link>
          </div>

          {/* Botón "Regístrate ahora" siempre al final */}
          <div className="hidden sm:flex justify-end">
            <button className="ml-4 px-6 py-2 bg-green-400 text-white text-[2vh] rounded-lg hover:bg-green-300 h-[6vh]">
            Contattaci ora
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
                <Link to="/" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:text-gray-900 border-green-300 ">
                  Home
                </Link>
              </li>
              <li className='shadow-lg rounded-xl'>
                <Link to="/services" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                  Servizi
                </Link>
              </li>
              <li className='shadow-lg rounded-xl'>
                <Link to="/about" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                  Chi Siamo
                </Link>
              </li>
              <li className='shadow-lg rounded-xl' >
                <Link to="/contact" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
