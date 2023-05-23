import React, { useState } from 'react'
import { useEffect ,useContext } from 'react'
import { UserContext } from "../../UseContext/UserContext";
import api from "../../../Services/Api";
import Navbar2 from '../../Navbar2/Navbar2';
import MyCards from './MyCards';
import styles from './myCards.module.css'
import Footer from '../../Footer/Footer';
import Loader from '../../loading/Loader';

function MyAnnuncements() {
  const [userData, setUserData] = useContext(UserContext);
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  async function getUsersProduct(){
    const usersProductData = await api.get(`/product/${userData._id}`,{
      headers: {
        auth: userData._id
      }
    })
    const {data} = usersProductData
    setProductsData(data)
    setLoading(true);
    
  }

  useEffect(()=> {
    getUsersProduct()
  })

  return (
    <div>
      <Navbar2/>
      <h1 className='text-center'>Meus Anúncios</h1>
      {!loading ? <Loader/> : null}
      <div className={``}>
        <div className={`${styles.container}`}>
      {productsData.map(product => (
       <MyCards key={product._id} _id={product._id} name={product.name} src={product.src} price={product.price} synopsis={product.synopsis}/> 
      ))}
      </div>
      </div>
      <Footer/>
      </div>
      
  )
}

export default MyAnnuncements
