import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";
import { HashRouter } from "react-router-dom";
//No lugar do HashRouter, podemos usar o BrowserRouter, o que pode gerar problemas em produção

//import Header from '../components/templates/Header'
import Logo from "../components/templates/Logo";
import Nav from "../components/templates/Nav";
import Routes from "./Routes";
import Footer from "../components/templates/Footer";

//eslint-disable-next-line
export default props => (
  <HashRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </HashRouter>
);
