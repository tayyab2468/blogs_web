
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import World from './Components/World';
import Sports from './Components/Sports';
import Technology from './Components/Technology';
import Health from './Components/Health';
import Business from './Components/Business';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
function App() {
  return (
    
    <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home />} />
     <Route path="/home" element={<Home />} />
     <Route path="/business" element={<Business />} />
     <Route path="/health" element={<Health />} />
     <Route path="/technology" element={<Technology />} />
     <Route path="/sports" element={<Sports />} />
     <Route path="/world" element={<World />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />


     </Routes>
   </BrowserRouter>
  );
}

export default App;
