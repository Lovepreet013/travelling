import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Navbar/> 
      <Hero cName = "about-hero" heroImg = "/assets/2.jpg" title = "Contact"/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact;
