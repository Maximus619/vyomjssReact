import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Events from './components/Events';
import Art from './components/Art';
import Gallery from './components/Gallery';
import Team from './components/Team';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/events' element={<Events />} />
            <Route exact path='/art' element={<Art />} />
            <Route exact path='/gallery' element={<Gallery />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/team' element={<Team />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
