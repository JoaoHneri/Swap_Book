import React, { useEffect, useState } from 'react';
import api from '../../../Services/Api';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar2 from '../../Navbar2/Navbar2';
import Cards from '../../Cards/Cards';

const BookDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [response, setResponse] = useState([]);
  const images = [
    'https://source.unsplash.com/random/400x400',
    'https://source.unsplash.com/random/401x401',
    'https://source.unsplash.com/random/402x402',
    'https://source.unsplash.com/random/403x403',
    'https://source.unsplash.com/random/404x404',
  ];
  const [searchProducts, setSearchProducts] = useState("");
  const [intProducts, setIntProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  async function getProducts() {
    try {
      const Products = await api.get(`/product/`);
      const { data } = Products;
      setIntProducts(data);
    } catch (err) {
      console.log("Erro ao carregar os produtos");
    }
  }

  useEffect(() => {
    getProducts();
    
  }, [intProducts]);


  function getSearchProducts() {
    const filteredProducts = intProducts.filter((product) =>
      product.name.toLowerCase().includes(searchProducts.toLowerCase())
    );
    setFilteredData(filteredProducts);
  }

  useEffect(() => {
    getSearchProducts();
    console.log(filteredData)
  }, [searchProducts]);

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  const {_id} = useParams()
  
  async function getProductsId() {
    try {
      const Products = await api.get(`/product/this/${_id}`);
      const { data } = Products;
      setResponse(data);
    } catch (err) {
      console.log("Erro ao carregar os produtos");
    }
  }

  useEffect(() => {
    getProductsId();
  }, []);

  return (
    <>
    <Navbar2 setSearchProducts={setSearchProducts} />
    <div className="d-flex">
        {searchProducts ? (
          filteredData ? (
            filteredData.map((product) => (
              <Cards
                _id={product._id}
                key={product._id}
                name={product.name}
                price={product.price}
                synopsis={product.synopsis}
              />
            ))
          ) : null
        ) : (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white rounded-lg shadow-lg p-8 w-2/3">
        <div className="flex">
          <div className="w-1/2">
            <img src={images[currentImage]} alt="Book" className="w-full" />
            <div className="flex justify-center mt-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Book"
                  className={`w-10 h-10 rounded-full cursor-pointer mx-2 ${
                    currentImage === index && 'border-2 border-blue-500'
                  }`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2 pl-6">
            <h1 className="text-3xl font-bold mb-4">{response.name}</h1>
            <h2 className="text-xl font-medium mb-4">{response.author}</h2>
            <p className="text-gray-1000 mb-4">
              {response.synopsis}
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Categoria: {response.category}</li>
              <li>Ano de Publicação: {response.year}</li>
            </ul>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Compre Agora!
            </button>
          </div>
        </div>
      </div>
      
    </div>)}
    </div>
    </>
  );
};

export default BookDetails;