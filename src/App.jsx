import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Spinner from './components/Spinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Router>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Carousel />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </>
  );
}

export default App;
