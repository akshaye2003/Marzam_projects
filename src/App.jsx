import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

// import { BrowserRouter as Router } from 'react-router-dom';
// import Gallery from './Components/Gallery/Gallery';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Program' title='What we offer' />
        <Programs />
        <About />
        <Title subtitle='Gallery' title='Photos' />
        <Campus />
        {/* <Title subtitle='TESTIMONIALS' title='What The Student Says'/>
        <Testimonials/> */}
        <Title subtitle='Contact Us' title='Get In Touch' />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;
