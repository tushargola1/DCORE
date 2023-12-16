import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';

function App() {


  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Carousel />} />
    <Route path="/about" element={<AboutUs/>} />
    <Route path="/gallery" element={<Gallery/>} />
      
    </Routes>
    <Footer/>
    </Router>
    
      
      
   </>
  )
}

export default App
