import React from "react";
import Cards from "../../Cards/Cards.js";
import CarouselFadeExample from "../../Carousel/Carousel.js";
import Categorias from "../../Categorias/Categorias.js";
import Navbar2 from "../../Navbar2/Navbar2.js";
import Trotes from "../../Trotes/Trotes.js";
import Footer from "../../Footer/Footer.js";



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
