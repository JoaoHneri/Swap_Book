import React from "react";
import Navbar2 from "../components/Navbar2/Navbar2";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Navbar2 />
      <section className="input-section">
        <form className="">
          <h1 className="text-center"> Adicionar um Produto</h1>
          <div className="products-inputs">
            <input type="file" placeholder="Imagem"></input>
            <input type="text" className="" placeholder="Nome do Livro" />
            <input type="number" className="" placeholder="Ano" />
            <input type="text" className="" placeholder="Autor" />
            <select className="mb-3" name="Categorias">
              <option value="Romance"selected> -- </option>
              <option value="Ficção" > Ficção</option>
              <option value="Ação">Ação</option>
              <option value="Suspense">Suspense</option>
              <option value="Historia">História</option>
              <option value="Bibliografia">Bibliografia</option>
              <option value="Terror">Terror</option>
              <option value="Fantasia">Fantasia</option>
            </select>
            <input type="number" className="" placeholder="Preço" />
            <button className="btn btn-primary">Adicionar Livro</button>
          </div>
          
        </form>
      </section>
    </>
  );
};

export default Dashboard;
