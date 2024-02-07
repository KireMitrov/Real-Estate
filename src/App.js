import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import ScrowToTop from './components/ScrowToTop/ScrowToTop';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ScrowToTop />
    </div>
  );
}

export default App;
