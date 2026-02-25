import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load components for code splitting
const Home = lazy(() => import('./Home'));
const AboutMe = lazy(() => import('./components/AboutMe'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));

const AnimatedRoutes = ({ data, isPending, error }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/V2-DSITE" element={<Home data={data} isPending={isPending} error={error} />} />
        <Route path="/V2-DSITE/about-me" element={<AboutMe data={data} isPending={isPending} error={error} />} />
        <Route path="/V2-DSITE/portfolio" element={<Portfolio />} />
        <Route path="/V2-DSITE/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  // var { data, isPending, error } = useFetch('http://localhost:3001/api/d-ports');
  var data = '';
  var isPending = false;
  var error = '';

  return (
    <BrowserRouter>
      <div className="App bg-cyber-black min-h-screen text-white">
        <Navbar />
        <Suspense fallback={<div className="min-h-screen flex flex-col items-center justify-center bg-cyber-black text-white"><div className="animate-pulse font-bold text-2xl text-neon-cyan glitch hover-glitch" data-text="INITIALIZING SYSTEM...">INITIALIZING SYSTEM...</div></div>}>
          <AnimatedRoutes data={data} isPending={isPending} error={error} />
        </Suspense>
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
