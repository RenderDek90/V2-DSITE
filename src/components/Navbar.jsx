import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuBar = () => {
    if (isActive === false) {
      document.getElementById('menu-bar-pop').style.display = 'block';
      console.log('masuk');
      setIsActive(true);
    } else {
      setIsActive(false);
      console.log('masuk 2');

      document.getElementById('menu-bar-pop').style.display = 'none';
    }
    return;
  };

  const styleMenuBar = {
    display: 'flex',
  };

  return (
    <div className="flex flex-row justify-between gap-5 items-center bg-[#252525] py-5 px-12 sticky w-full z-[100] shadow-xl relative">
      <h1 className="font-bold text-white">DSITE</h1>
      <div className="menu">
        <ul className="hamburger-menu">
          <div className="menu-bar">
            <FontAwesomeIcon
              icon={faBars}
              className="text-white text-xl hover:bg-blue-600 rounded-lg hover:shadow-sm hover:shadow-sky-50 duration-300 ease-in-out p-2"
              id="menu-bar-btn"
              style={{ cursor: 'pointer' }}
              onClick={handleMenuBar}
            />
            <div className="absolute mt-5 w-full left-0 ease-in-out duration-200 rounded-sm" id="menu-bar-pop">
              <ul className="flex flex-col text-center w-full text-left bg-[#202020] shadow-blue-500 shadow rounded-lg py-2 ease-in-out duration-200">
                <Link to="/" className="hover:font-bold hover:bg-blue-500 duration-300 ease-in-out text-white py-2">
                  Home
                </Link>
                <Link to="/about-me" className="hover:font-bold hover:bg-blue-500 duration-300 ease-in-out text-white py-2">
                  About Me
                </Link>
                <Link to="/portfolio" className="hover:font-bold hover:bg-blue-500 duration-300 ease-in-out text-white py-2">
                  Portfolio
                </Link>
              </ul>
            </div>
          </div>
        </ul>

        <ul className="navbar">
          <Link to="/" className="hover:text-blue-400 duration-300 ease-in-out">
            Home
          </Link>
          <Link to="/about-me" className="hover:text-blue-400 duration-300 ease-in-out">
            About Me
          </Link>
          <Link to="/portfolio" className="hover:text-blue-400 duration-300 ease-in-out">
            Portfolio
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
