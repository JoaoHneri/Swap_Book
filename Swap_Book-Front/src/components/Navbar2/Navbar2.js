import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from "react-router-dom";
import { UserContext } from "../UseContext/UserContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './Nav.css'



function Navbar2({setSearchProducts}) {
  const [userData, setUserData] = useContext(UserContext);

  const navigate = useNavigate();

  async function logoutHandler(e) {
    localStorage.setItem('email', '')
    localStorage.setItem('name', '')
    localStorage.setItem('id', '')
    localStorage.removeItem('IsLogged')
    await navigate('/')
    window.location.reload(true)
    e.preventDefault()
  }

  async function navigacao() {
    navigate('/')
    await navigate('/')
    window.location.reload(true)
  }

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand to="/"  onClick={function(e) {navigacao()}} href="#">
          <img
            src="https://via.placeholder.com/60x60.png?text=Logo"
            height="60"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <form className="form">
            <button>
              <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            <input className="text" onChange={(e) => setSearchProducts(e.target.value)}  placeholder="Pesquisar Livro" required="" type="text"></input>
            <button className="reset" type="reset">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </form>
          <Nav className="align-icons">
                <Link className="icon"><FaUserCircle className="icon-size" />  {  userData.isLogged ? (
                  <p className="user-name">{userData.name}</p>    
                ) : null}</Link>
                <Link   className="icon"><AiOutlineShoppingCart className="icon-size" /></Link>
                {userData.isLogged ? (
                <Link  to="/dashboard"><Button variant="primary" >Anunciar</Button></Link>
                ) : null}
                 {userData.isLogged ? null : (
                <Link to="/login"><Button variant="primary" >Entrar</Button></Link>
                )}
                {userData.isLogged ? (
                <Link  to="/meus_anuncios"><Button variant="primary" >Meus Anuncios</Button></Link>
                ) : null}  
                {userData.isLogged ? (
                  <Link ><FiLogOut className="icon-size" onClick={logoutHandler}/> </Link>
                  ) : null}
</Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navbar2;
