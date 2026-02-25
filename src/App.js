import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import SplashScreen from './components/SplashScreen';
import { ThemeProvider } from './ThemeContext';

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
  const [isAppLoading, setIsAppLoading] = useState(true);

  // var { data, isPending, error } = useFetch('http://localhost:3001/api/d-ports');
  var data = '';
  var isPending = false;
  var error = '';

  return (
    <ThemeProvider>
      <BrowserRouter>
        {isAppLoading ? (
          <SplashScreen finishLoading={() => setIsAppLoading(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="App min-h-screen relative z-10 transition-colors duration-500"
          >
            <Navbar />
            <Suspense fallback={<div className="min-h-screen flex flex-col items-center justify-center text-primary"><div className="animate-pulse font-bold text-2xl text-accent-primary">INITIALIZING SYSTEM...</div></div>}>
              <AnimatedRoutes data={data} isPending={isPending} error={error} />
            </Suspense>
            <WhatsAppButton />
          </motion.div>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
