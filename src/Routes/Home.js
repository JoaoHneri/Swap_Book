import React from "react";
import Cards from "../components/Cards/Cards.js";
import CarouselFadeExample from "../components/Carousel/Carousel.js";
import Categorias from "../components/Categorias/Categorias.js";
import Navbar2 from "../components/Navbar2/Navbar2.js";
import Trotes from "../components/Trotes/Trotes.js";
import Footer from "../components/Footer/Footer.js";



const Home = () => {
  
  return (
    <div>
    <Navbar2 />
    <CarouselFadeExample />
    <Categorias />
    <Cards />
    <Trotes />
    <Cards/>
    <Footer />
    </div>
  );
};

export default Home;
