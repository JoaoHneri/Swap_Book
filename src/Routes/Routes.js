import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import LoginPage from "../components/Login/Login";
import RegisterPage from "../components/Login/Register";
import BookDetails from "../components/pages/BooksDetails/BooksDetails";
import { useState,useContext } from "react";
import { UserContext } from "../components/UseContext/UserContext";

const Rotas = () => {
    const [userData, setUserData] = useContext(UserContext)
  return (
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/details" Component={BookDetails} />
          <Route
            path="/dashboard"
            element={userData.isLogged ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route exact path="/login" Component={LoginPage} />
          <Route exact path="/registrar" Component={RegisterPage} />
        </Routes>
      </Router>
  );
};

export default Rotas;
