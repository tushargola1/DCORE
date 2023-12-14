import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'
import AboutUs from './components/AboutUs';

function App() {


  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Carousel />} />
    <Route path="/about" element={<AboutUs/>} />
      
    </Routes>
    <Footer/>
    </Router>
    
      
      
   </>
  )
}

export default App
