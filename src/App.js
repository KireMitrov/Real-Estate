import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
