import React from "react";
import Navbar2 from "../../Navbar2/Navbar2";
import "./Dashboard.css";
import { useState, useContext } from "react";
import api from "../../../Services/Api";
import { UserContext } from "../../UseContext/UserContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const [userData, setUserData] = useContext(UserContext);
  const [productName, setProductName] = useState('')
  const [productYear, setProductYear] = useState(0)
  const [categoria, setCategoria] = useState('')
  const [autorProduct, setAutorProduct] = useState('')
  const [productPrice, setProductPrice] = useState(0)
  const [sisnopseProduct, setSinopseProduct] = useState('')
  const navigate = useNavigate()

  async function newProducthandler(e){
    e.preventDefault();
    try{
      await api.post(`${userData._id}/product`,{
        name: productName,
        price: productPrice,
        author: autorProduct,
        category: categoria,
        synopsis:sisnopseProduct,
        year: productYear
      }, {headers:{
        auth: `${userData._id}`
      }})
      alert("produto cadastrado com sucesso!")
      navigate('/meus_anuncios')
    }catch(err){
      alert("falha ao adicionar Livro")
    }
  }

  return (
    <>
      <Navbar2 />
      <section className="input-section">
        <form className="">
          <h1 className="text-center"> Adicionar um Produto</h1>
          <div className="products-inputs">

            <input type="file" placeholder="Imagem"></input>

            <input type="text"
             className="" 
             onChange={(e)=> setProductName(e.target.value)} 
             placeholder="Nome do Livro" 
             value={productName}/>

            <input type="number" 
            className="" 
            placeholder="Ano"
            
            onChange={(e)=> setProductYear(e.target.value)} />

            <input type="text" 
            className="" 
            placeholder="Autor"
            value={autorProduct}
            onChange={(e)=> setAutorProduct(e.target.value)} />

            <select className="mb-3" 
            onChange={(e)=> 
            setCategoria(e.target.value)}
            value={categoria}
             name="Categorias">
              <option value=""selected> Categória </option>
              <option value="Ficção" > Ficção</option>
              <option value="Ação">Ação</option>
              <option value="Suspense">Suspense</option>
              <option value="Historia">História</option>
              <option value="Bibliografia">Bibliografia</option>
              <option value="Terror">Terror</option>
              <option value="Romance">Romance</option>
              <option value="Fantasia">Fantasia</option>
            </select>

            <input type="number" 
            className="" 
            placeholder="Preço" 
            onChange={(e)=> setProductPrice(e.target.value)}
            />

            <input type="text" className="" placeholder="Sinopse" onChange={(e)=> setSinopseProduct(e.target.value)}/>

            <button className="btn btn-primary" onClick={newProducthandler}>Adicionar Livro</button>
          </div>
          
        </form>
      </section>
    </>
  );
};

export default Dashboard;
