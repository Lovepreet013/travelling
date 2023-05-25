import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Trip from '../components/Trip';

const Services = () => {
  return (
    <>
      <Navbar/> 
      <Hero cName = "about-hero" heroImg = "/assets/night.jpg" title = "Services"/>
      <Trip/>
      <Footer/>
    </>
  )
}

export default Services
