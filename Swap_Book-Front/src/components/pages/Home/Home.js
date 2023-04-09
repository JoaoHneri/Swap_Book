import React from "react";
import Cards from "../../Cards/Cards.js";
import CarouselFadeExample from "../../Carousel/Carousel.js";
import Categorias from "../../Categorias/Categorias.js";
import Navbar2 from "../../Navbar2/Navbar2.js";
import Trotes from "../../Trotes/Trotes.js";
import Footer from "../../Footer/Footer.js";
import api from "../../../Services/Api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UseContext/UserContext.js";

const Home = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [productsData, setProductsData] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");
  const [intProducts, setIntProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState("");
  const [CategoredProducts, setCategoredProducts] = useState([]);
  const [userData, setUserData] = useContext(UserContext);

  useEffect(() => {
    getUserLocation();
  }, []);

  async function getUserLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      { timeout: 10000 }
    );
  }

  useEffect(() => {
    getNearProducts();
  }, [latitude, longitude]);

  async function getNearProducts() {
    try {
      const nearProducts = await api.get(
        `/product/cords?latitude=${latitude}&longitude=${longitude}`
      );
      const { data } = nearProducts;
      const limitedItens = data.slice(0, 5);
      setProductsData(limitedItens);
    } catch (err) {
      console.log("Erro ao carregar os produtos");
    }
  }

  async function getProducts() {
    try {
      const Products = await api.get(`/product/`);
      const { data } = Products;
      const allProducts = data.slice(0, 5);
      setAllBooks(allProducts);
      setIntProducts(data);
    } catch (err) {
      console.log("Erro ao carregar os produtos");
    }
  }

  useEffect(() => {
    getProducts();
  }, [productsData, allBooks]);

  useEffect(() => {
    getSearchProducts();
  }, [searchProducts, allBooks]);

  function getSearchProducts() {
    const filteredProducts = intProducts.filter((product) =>
      product.name.toLowerCase().includes(searchProducts.toLowerCase())
    );
    setFilteredData(filteredProducts);
  }

  function getCategoryBooks() {
    const CategoredProducts = intProducts.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );
    const categories = CategoredProducts.slice(0, 5);
    setCategoredProducts(categories);
  }
  useEffect(() => {
    getCategoryBooks();
  }, [category, intProducts]);

  return (
    <div>
      <Navbar2 setSearchProducts={setSearchProducts} />
      <div className="d-flex">
        {searchProducts ? (
          filteredData ? (
            filteredData.map((product) => (
              <Cards
                key={product._id}
                name={product.name}
                price={product.price}
                synopsis={product.synopsis}
              />
            ))
          ) : null
        ) : (
          <div>
            <CarouselFadeExample />
            <Categorias setCategory={setCategory} />
            <div className="text-center">
              <h2>{category}</h2>
              <div className="d-flex">
                {CategoredProducts.map((product) => (
                  <Cards
                    key={product._id}
                    name={product.name}
                    price={product.price}
                    synopsis={product.synopsis}
                  />
                ))}
              </div>
            </div>
            <Trotes />
            <div className="text-center">
              <h2>VEJA OS LIVROS PRÓXIMOS DE VOCÊ</h2>
              {userData.isLogged ? (
                <Link to="/map_products">
                  <p>Veja no Mapa</p>
                </Link>
              ) : null}

              <div className="d-flex">
                {productsData.map((product) => (
                  <Cards
                    key={product._id}
                    name={product.name}
                    price={product.price}
                    synopsis={product.synopsis}
                  />
                ))}
              </div>
            </div>
            {/* <div className="text-center">
              <h2>LIVROS:</h2>
              <div className="d-flex">
                {allBooks.map((product) => (
                  <Cards
                    key={product._id}
                    name={product.name}
                    price={product.price}
                    synopsis={product.synopsis}
                  />
                ))}
              </div>
            </div> */}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
