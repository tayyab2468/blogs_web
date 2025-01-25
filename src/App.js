import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Internship from './Components/Internship';
import Contact from './Components/Contact';
import ApplyNow from './Components/ApplyNow';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/applyNow" element={<ApplyNow />} />
        
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
