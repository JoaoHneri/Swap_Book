import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import {FiLogOut} from "react-icons/fi"
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./Navbar2.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../UseContext/UserContext";

function Navbar2() {
  const [userData, setUserData] = useContext(UserContext)
  console.log(userData.isLogged)

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold text-gray-800">Swap Book</h1>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Pesquisar Livro"
              className="border border-gray-500 rounded-full py-2 px-4 w-full lg:w-64"
            />
            <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              Pesquisar
            </button>
          </div>
          <div className="d-flex flex-wrap">
            <h1 className={`${styles.icons} px-2`}>
              <FaUserCircle />
            </h1>
            <h1 className={`${styles.icons} px-2`}>
              <AiOutlineShoppingCart />
            </h1>
              <div>{userData.isLogged ?
              <Link to="/dashboard">
              <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              Anunciar
            </button></Link> 
            : null
            }</div> 
            <div>{userData.isLogged ? null :
            <Link to="/login">
            <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              Entrar
            </button>
          </Link>
            }</div>
            <div>
            {userData.isLogged ? <Link to="/logout">
            <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              <FiLogOut/>
            </button>
          </Link> : null}
            </div> 
            </div>
          </div>
      </header>
    </>
  );
}

export default Navbar2;
