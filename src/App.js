
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Destination from './Components/Destination';
import Contact from './Components/Contact';
import Package from './Components/Package';
import BookNow from './Components/BookNow';
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/destination" element={<Destination />} />
     <Route path="/package" element={<Package />} />
     <Route path="/booknow" element={<BookNow />} />
     
     <Route path="/contact" element={<Contact />} />


     </Routes>
   </BrowserRouter>
  );
}

export default App;
