import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
        <Navbar/> 
        <Hero 
            cName = "hero"
            heroImg = "/assets/12.jpg"
            title = "Your Journey Your Story"
            text = "Choose Your Favourite Destinations"
            buttonText = "Travel Plan"
            url = "/"
            btnClass = "show"
        />
        <Destinations/>
        <Trip/>
        <Footer/>
    </>
  )
}

export default Home;
