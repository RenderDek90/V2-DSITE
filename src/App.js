import AboutMe from './components/AboutMe';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Home from './Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import useFetch from './useFetch';
import TestAPI from './components/TestAPI';

// const fetcher = () => fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

function App() {
  // var { data, isPending, error } = useFetch('http://localhost:3001/api/d-ports');
  var data = '';
  var isPending = false;
  var error = '';

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home data={data} isPending={isPending} error={error} />}></Route>
          <Route path="/about-me" element={<AboutMe data={data} isPending={isPending} error={error} />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          {/* <Route path="/testAPI" element={<TestAPI />}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
