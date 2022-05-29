import React, { useRef, useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Navbar() {
  const [display, setDisplay] = useState('menu-close');

  function toggleMenu() {
    if (display == 'menu-close') {
      setDisplay('menu-open');
    } else {
      setDisplay('menu-close');
    }
  }

  return (
    <>
      <div>
        <div className="flex items-center">
          <div className="menu-arrow mr-2.5" onClick={toggleMenu}>
            <AiOutlineMenu />
          </div>
          <h1 className="primary-font text-2xl">Forecast</h1>
        </div>
        <nav className={display}>
          <div className="h-full shadow-md bg-white px-1 absolute">
            <ul className="relative">
              <li className="relative">
                <a
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <span>
                    <Link to="/">Today</Link>
                  </span>
                </a>
              </li>
              <li className="relative">
                <a
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <Link to="/tomorrow">Tomorrow</Link>
                </a>
              </li>
              <li className="relative">
                <a
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <Link to="/yesterday">Yesterday</Link>
                </a>
              </li>
              <li className="relative">
                <a
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <Link to="/weekly">Weekly</Link>
                </a>
              </li>
              <li className="relative">
                <a
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <Link to="/aqi">Aqi</Link>
                </a>
              </li>
              <li className="relative">
                <a
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <Link to="/map">Map</Link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
