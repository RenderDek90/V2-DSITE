import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer w-full relative overflow-hidden mt-10">
      <div className="absolute inset-0 bg-glass-gradient opacity-50 z-0 pointer-events-none"></div>
      <div className="glass-panel !border-x-0 !border-b-0 !rounded-none relative z-10 w-full">
        <div className="flex flex-col justify-center items-center py-12 px-10">
          <div className="flex flex-row gap-6 justify-center items-center mb-6">
            <Link to="https://www.instagram.com/darrenezra_/" target="_blank" className="text-2xl text-slate-500 hover:text-accent-secondary hover:-translate-y-1 duration-300 ease-in-out">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </Link>
            <Link to="https://www.linkedin.com/in/darren-ezra-9090/" target="_blank" className="text-2xl text-slate-500 hover:text-accent-primary hover:-translate-y-1 duration-300 ease-in-out">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </Link>
            <Link to="https://github.com/RenderDek90" target="_blank" className="text-2xl text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:-translate-y-1 duration-300 ease-in-out">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </Link>
            <Link to="mailto:darrenezra902@gmail.com?subject=Hey Darren! Let's Connect!" target="_blank" className="text-2xl text-slate-500 hover:text-accent-tertiary hover:-translate-y-1 duration-300 ease-in-out">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </Link>
          </div>
          <p className="text-center text-sm font-medium tracking-wide text-slate-400">
            &copy; {new Date().getFullYear()} - Darren Ezra - V2
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
