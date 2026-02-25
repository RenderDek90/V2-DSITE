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
    <div className="flex flex-row justify-between gap-5 items-center bg-[#050505] border-b border-neon-cyan py-5 px-12 sticky top-0 w-full z-[100] shadow-[0_4px_20px_rgba(0,243,255,0.15)] relative backdrop-blur-sm bg-opacity-90">
      <h1 className="font-bold text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple hover-glitch glitch" data-text="DSITE">DSITE</h1>
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
              <ul className="flex flex-col text-center w-full text-left bg-cyber-darker border border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.3)] rounded-lg py-2 ease-in-out duration-200">
                <Link to="/V2-DSITE" className="hover:font-bold hover:bg-neon-cyan hover:text-black duration-300 ease-in-out text-neon-cyan py-2 uppercase tracking-wider">
                  Home
                </Link>
                <Link to="/V2-DSITE/about-me" className="hover:font-bold hover:bg-neon-cyan hover:text-black duration-300 ease-in-out text-neon-cyan py-2 uppercase tracking-wider">
                  About Me
                </Link>
                <Link to="/V2-DSITE/portfolio" className="hover:font-bold hover:bg-neon-cyan hover:text-black duration-300 ease-in-out text-neon-cyan py-2 uppercase tracking-wider">
                  Portfolio
                </Link>
                <Link to="/V2-DSITE/contact" className="hover:font-bold hover:bg-neon-pink hover:text-black duration-300 ease-in-out text-neon-pink py-2 uppercase tracking-wider">
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </ul>

        <ul className="navbar flex gap-8">
          <Link to="/V2-DSITE" className="text-gray-300 uppercase tracking-widest text-sm font-semibold hover:text-neon-cyan hover:text-glow-cyan transition-all duration-300 hover:-translate-y-1">
            Home
          </Link>
          <Link to="/V2-DSITE/about-me" className="text-gray-300 uppercase tracking-widest text-sm font-semibold hover:text-neon-cyan hover:text-glow-cyan transition-all duration-300 hover:-translate-y-1">
            About Me
          </Link>
          <Link to="/V2-DSITE/portfolio" className="text-gray-300 uppercase tracking-widest text-sm font-semibold hover:text-neon-cyan hover:text-glow-cyan transition-all duration-300 hover:-translate-y-1">
            Portfolio
          </Link>
          <Link to="/V2-DSITE/contact" className="text-neon-pink uppercase tracking-widest text-sm font-bold hover:text-glow-pink hover:scale-105 transition-all duration-300">
            [ Contact ]
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
