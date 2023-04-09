import React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { useState, useEffect } from "react";
import api from "../../Services/Api";
import Cards from "../Cards/Cards";
import Navbar2 from "../Navbar2/Navbar2";

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [intProducts, setIntProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();
  const [searchProducts, setSearchProducts] = useState("");


  useEffect(() => {
    getSearchProducts();
  }, [searchProducts, intProducts]);

  function getSearchProducts() {
    const filteredProducts = intProducts.filter((product) =>
      product.name.toLowerCase().includes(searchProducts.toLocaleLowerCase())
    );
    setIntProducts(filteredProducts);
    
  }

 

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
    getUserLocation();
  });

  return (<>
    <Navbar2 setSearchProducts={setSearchProducts}/>
    <Map
      initialViewState={{
        latitude: latitude,
        longitude: longitude,
        zoom: 8,
      }}
      style={{ width: window.innerWidth, height: "500px"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1Ijoic2lsYXNtYXRvcyIsImEiOiJjbGc3ZGk1bHAwM3g1M2VwOXkzcDJocnFuIn0.65mSwnqFVa_SlKp_rPSuEw"
    >
      {intProducts.map((product) => (
        <Marker
          key={product._id}
          latitude={product.location.coordinates[0]}
          longitude={product.location.coordinates[1]}
        >
          <div className="Marker">
            <button
              className="btn btn-primary "
              onClick={(e) => {
                e.preventDefault();
                setSelectedProduct(product);

              }}
            >
              {product.name}
            </button>
          </div>
        </Marker>
      ))}

      {selectedProduct? (
        <Popup
          latitude={selectedProduct.location.coordinates[0]}
          longitude={selectedProduct.location.coordinates[1]}
          onClose={() => {
            setSelectedProduct(null);
          }}
        >
          <Cards
          key={selectedProduct._id}
            name={selectedProduct.name}
            price={selectedProduct.price}
            userName={selectedProduct.user.name}
            userWhats={selectedProduct.user.whatsapp}
          />
        </Popup>
      ) : null}

    </Map>
    </>
  );
}

export default App;
