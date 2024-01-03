import Signup from './pages/Signup';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import Dashbaord from './pages/Dashbaord';
import Login from './pages/Login';
import Navbar from './component/Navbar';

function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/dashboard" element={<Dashbaord />} /> 
          <Route path="/signin" element={<Signup />} /> 
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </BrowserRouter>
    
    </>
   
  );
}

export default App;
