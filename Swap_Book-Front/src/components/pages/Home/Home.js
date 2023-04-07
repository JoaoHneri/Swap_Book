import React from "react";
import Cards from "../../Cards/Cards.js";
import CarouselFadeExample from "../../Carousel/Carousel.js";
import Categorias from "../../Categorias/Categorias.js";
import Navbar2 from "../../Navbar2/Navbar2.js";
import Trotes from "../../Trotes/Trotes.js";
import Footer from "../../Footer/Footer.js";
import api from "../../../Services/Api";
import { useState, useEffect } from "react";


const Home = () => {

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [productsData, setProductsData] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");
  // const [productsByPrice, setProductsByPrice] = useState(100);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(()=> {
    getUserLocation()
  }, [])

  async function getUserLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude, longitude} = position.coords
      setLatitude(latitude)
      setLongitude(longitude)
      console.log(latitude,longitude)
    }, (err)=> {
      console.log(err)
    }, {timeout: 10000})
  }

  useEffect(()=> {
    getNearProducts()
  },[latitude, longitude])

  async function getNearProducts(){
    try{
      const nearProducts = await api.get(`/product/cords?latitude=${latitude}&longitude=${longitude}`)
      const {data} = nearProducts
      const limitedItens = data.slice(0, 5);
      setProductsData(limitedItens)

    }catch(err){
      alert("Erro ao carregar os produtos")
    }
  }

  async function getProducts(){
    try{
      const Products = await api.get(`/product/`)
      const {data} = Products
      const allProducts = data.slice(0, 5);
      setAllBooks(allProducts)

    }catch(err){
      alert("Erro ao carregar os produtos")
    }
  }

  useEffect(()=> {
    getProducts()
  })

  useEffect(()=> {
    getSearchProducts()
  },[searchProducts])

  function getSearchProducts(){
    const filteredProducts = productsData.filter(product =>
        (product.name.toLowerCase().includes(searchProducts.toLowerCase()))
      )
      setFilteredData(filteredProducts)
      console.log(filteredProducts)
  }


  return (
    <div>
    <Navbar2 setSearchProducts={setSearchProducts} />
    <div className="d-flex">
      {searchProducts ? 
      filteredData ? filteredData.map(product =>(
        <Cards key={product._id}
         name={product.name} 
         price={product.price} 
         synopsis={product.synopsis}/>
      )) : <div></div>
      : null}
      
    </div>
    <CarouselFadeExample />
    <Categorias />
    <div className="text-center"><h2>LIVROS:</h2>
    <div className="d-flex">
      {allBooks.map(product =>(
        <Cards key={product._id}
         name={product.name} 
         price={product.price} 
         synopsis={product.synopsis}/>
      ))}
    </div>
    </div>
    <Trotes />
    <div className="text-center"><h2>VEJA OS ITENS PRÓXIMOS DE VOCÊ</h2>
    <div className="d-flex">
      {productsData.map(product =>(
        <Cards key={product._id}
         name={product.name} 
         price={product.price} 
         synopsis={product.synopsis}/>
      ))}
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default Home;
