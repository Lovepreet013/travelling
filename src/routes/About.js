import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs'; 

const About = () => {
  return (
    <>
        <Navbar/> 
        <Hero cName = "about-hero" heroImg = "/assets/night.jpg" title = "About Us"/>
        <AboutUs/>
        <Footer/>
    </>
  )
}

export default About;
