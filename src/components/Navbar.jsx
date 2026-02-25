import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { useState } from 'react';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    <div className="flex flex-row justify-between gap-5 items-center glass-panel !border-x-0 !border-t-0 !rounded-none py-4 px-6 sm:px-12 sticky top-0 w-full z-[100] relative">
      <h1 className="font-bold text-2xl tracking-widest text-gradient-primary hover-glitch glitch" data-text="DSITE">DSITE</h1>

      <div className="flex items-center gap-4">
        {/* Mobile Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 flex sm:hidden rounded-full glass-button items-center justify-center w-10 h-10 text-xl"
          aria-label="Toggle Theme"
        >
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className={theme === 'dark' ? 'text-yellow-400' : 'text-slate-800'} />
        </button>

        <div className="menu sm:hidden relative">
          <ul className="hamburger-menu m-0 p-0">
            <div className="menu-bar">
              <FontAwesomeIcon
                icon={faBars}
                className="text-slate-800 dark:text-white text-2xl hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg duration-300 ease-in-out py-2 px-3"
                id="menu-bar-btn"
                style={{ cursor: 'pointer' }}
                onClick={handleMenuBar}
              />
              <div className="absolute top-[3rem] right-0 w-48 ease-in-out duration-200 rounded-xl z-50 text-left" id="menu-bar-pop" style={{ display: isActive ? 'block' : 'none' }}>
                <ul className="flex flex-col text-center w-full bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-neon-cyan shadow-xl dark:shadow-[0_0_15px_rgba(0,243,255,0.3)] rounded-xl py-2 overflow-hidden ease-in-out duration-200">
                  <Link to="/V2-DSITE" onClick={() => setIsActive(false)} className="hover:font-bold hover:bg-slate-100 dark:hover:bg-neon-cyan hover:text-accent-primary dark:hover:text-black duration-300 ease-in-out text-slate-700 dark:text-neon-cyan py-3 px-4 uppercase tracking-wider text-sm border-b border-slate-100 dark:border-white/5">
                    Home
                  </Link>
                  <Link to="/V2-DSITE/about-me" onClick={() => setIsActive(false)} className="hover:font-bold hover:bg-slate-100 dark:hover:bg-neon-cyan hover:text-accent-primary dark:hover:text-black duration-300 ease-in-out text-slate-700 dark:text-neon-cyan py-3 px-4 uppercase tracking-wider text-sm border-b border-slate-100 dark:border-white/5">
                    About Me
                  </Link>
                  <Link to="/V2-DSITE/portfolio" onClick={() => setIsActive(false)} className="hover:font-bold hover:bg-slate-100 dark:hover:bg-neon-cyan hover:text-accent-primary dark:hover:text-black duration-300 ease-in-out text-slate-700 dark:text-neon-cyan py-3 px-4 uppercase tracking-wider text-sm border-b border-slate-100 dark:border-white/5">
                    Portfolio
                  </Link>
                  <Link to="/V2-DSITE/contact" onClick={() => setIsActive(false)} className="hover:font-bold hover:bg-slate-100 dark:hover:bg-neon-pink hover:text-accent-secondary dark:hover:text-black duration-300 ease-in-out text-slate-700 dark:text-neon-pink py-3 px-4 uppercase tracking-wider text-sm">
                    Contact
                  </Link>
                </ul>
              </div>
            </div>
          </ul>
        </div>

        {/* Desktop Navbar */}
        <ul className="navbar hidden sm:flex gap-8 items-center m-0 p-0">
          <Link to="/V2-DSITE" className="text-slate-600 dark:text-gray-300 uppercase tracking-widest text-sm font-semibold hover:text-accent-primary dark:hover:text-accent-primary dark:hover:drop-shadow-[0_0_8px_var(--accent-primary)] transition-all duration-300 hover:-translate-y-1">
            Home
          </Link>
          <Link to="/V2-DSITE/about-me" className="text-slate-600 dark:text-gray-300 uppercase tracking-widest text-sm font-semibold hover:text-accent-primary dark:hover:text-accent-primary dark:hover:drop-shadow-[0_0_8px_var(--accent-primary)] transition-all duration-300 hover:-translate-y-1">
            About Me
          </Link>
          <Link to="/V2-DSITE/portfolio" className="text-slate-600 dark:text-gray-300 uppercase tracking-widest text-sm font-semibold hover:text-accent-primary dark:hover:text-accent-primary dark:hover:drop-shadow-[0_0_8px_var(--accent-primary)] transition-all duration-300 hover:-translate-y-1">
            Portfolio
          </Link>
          <Link to="/V2-DSITE/contact" className="text-accent-secondary uppercase tracking-widest text-sm font-bold hover:drop-shadow-[0_0_8px_var(--accent-secondary)] hover:scale-105 transition-all duration-300">
            [ Contact ]
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full glass-button flex items-center justify-center w-10 h-10 text-xl"
            aria-label="Toggle Theme"
          >
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className={theme === 'dark' ? 'text-yellow-400' : 'text-slate-800'} />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
