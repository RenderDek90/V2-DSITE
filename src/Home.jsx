import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Projects from './components/Projects';
import imageProfile from './images/MukaDardar3.png';
import React, { useState, useEffect, useRef } from 'react';
import TypedText from './js/TypedText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import './css/typing.css';

const Home = ({ data, isPending, error }) => {
  return (
    <>
      {/* Head Section */}
      <div className="up-section flex flex-col justify-center sm:items-start items-center gap-5 p-10 min-h-full relative bg-prof bg-cover">
        <div className="flex sm:flex-row flex-col gap-5 text-white text-left items-center rounded-lg overflow-hidden">
          <div className="p-5">
            <div className="w-full">
              <p className="sm:text-5xl text-4xl sm:text-left text-center font-bold">Darren Ezra</p>
              <div className="type-effect-text sm:text-left text-center">
                <p className="sm:text-5xl text-lg font-bold">
                  I'm a <TypedText />
                </p>
              </div>
            </div>
            <div className="flex flex-row sm:justify-start justify-center items-center sm:mt-5 mt-2">
              <hr className="text-white" />
              <p className="text-center">
                <span className="hover:text-cyan-500 hover:underline hover:cursor-default duration-300 ease-in-out">RPA Tech Lead</span> |{' '}
                <span className="hover:text-cyan-500 hover:underline hover:cursor-default duration-300 ease-in-out">Web Developer</span> |{' '}
                <span className="hover:text-cyan-500 hover:underline hover:cursor-default duration-300 ease-in-out">Graphics Designer</span> |{' '}
                <span className="hover:text-cyan-500 hover:underline hover:cursor-default duration-300 ease-in-out">Video Editor</span>{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="text-center sm:mt-4 mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 hover:font-bold animate-pulse duration-300 ease-in-out p-5 rounded-lg shadow-sm shadow-white hover:cursor-default sm:w-fit w-80">
          <p className="text-white">"I can do all this through Him who gives me strength."</p>
          <p className="text-white">~ Philippians 4:13</p>
        </div>
      </div>

      <div className="Footer sm:flex sm:flex-row justify-center items-center w-full absolute bg-[#252525]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:w-full sm:px-12 p-6">
          <div className="sm:mt-2 flex flex-row gap-5 text-white justify-center items-center">
            <Link to="https://www.instagram.com/darrenezra_/" target="_blank" className="lg:text-2xl text-lg hover:scale-110 duration-300 ease-in-out hover:text-fuchsia-400 no-underline">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </Link>
            <Link to="https://www.linkedin.com/in/darren-ezra-9090/" target="_blank" className="lg:text-2xl text-lg hover:scale-110 duration-300 ease-in-out hover:text-blue-700 no-underline">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </Link>
            <Link to="https://github.com/RenderDek90" target="_blank" className="lg:text-2xl text-lg hover:scale-110 duration-300 ease-in-out hover:text-orange-500 no-underline">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </Link>
            <Link to="mailto:darrenezra902@gmail.com" className="lg:text-2xl text-lg hover:scale-110 duration-300 ease-in-out hover:text-cyan-500 no-underline">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </Link>
          </div>
          <div className="w-full sm:w-fit py-2">
            <p className="text-white text-sm text-center">&copy; Copyright 2023 - Darren Ezra - V2</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
