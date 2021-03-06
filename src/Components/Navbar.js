import React, { useRef, useState } from 'react';

import { IoIosArrowForward } from 'react-icons/io';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Navbar() {
  const [display, setDisplay] = useState('menu-close');

  function toggleMenu() {
    let val = display;
    if (val === 'menu-close') {
      setDisplay('menu-open');
    } else {
      setDisplay('menu-close');
    }
  }

  return (
    <>
      <div>
        <div className="flex items-center">
          <div
            className="menu-arrow mr-2.5"
            onClick={() => {
              toggleMenu();
            }}
          >
            <IoIosArrowForward
              style={{ fontSize: '200%' }}
              className="shadow-md z-10 md:hidden menu-arrow"
              className={
                display === 'menu-open'
                  ? 'arrow-left shadow-md z-10 md:hidden menu-arrow'
                  : 'arrow-right shadow-md z-10 md:hidden menu-arrow'
              }
            />
          </div>
          {/* <h1 className="primary-font text-2xl">
            <Link to="/">Forecast</Link>
          </h1> */}
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

      {/* DESKTOP NAVBAR */}
      <nav className="desktop-navbar w-full h-auto px-3">
        <ul className="flex justify-between items-center px-5">
          <li>
            <Link to="aqi">Aqi</Link>
          </li>
          <li>
            <Link to="yesterday">Yesterday</Link>
          </li>
          <li>
            <Link to="/">Today</Link>
          </li>
          <li>
            <Link to="tomorrow">Tomorrow</Link>
          </li>
          <li>
            <Link to="weekly">Weekly</Link>
          </li>
          <li>
            <Link to="map">Map</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
