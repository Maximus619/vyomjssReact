import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { React, Suspense, lazy } from 'react';
import './App.css';
const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./components/Home'));
const Events = lazy(() => import('./components/Events'));
const Art = lazy(() => import('./components/Art'));
const Gallery = lazy(() => import('./components/Gallery'));
const About = lazy(() => import('./components/About'));
const Team = lazy(() => import('./components/Team'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));


function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div id="loading"></div>}>
          <Header />

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/events' element={<Events />} />
            <Route exact path='/art' element={<Art />} />
            <Route exact path='/gallery' element={<Gallery />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/team' element={<Team />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>

          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
