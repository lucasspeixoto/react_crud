import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";
//eslint-disable-next-line
export default props => (
  <header className="menu-area">
    <nav className="menu">
      {/* REFATORAR igual em Header.jsx - Criar novo componente, importar nesse arquivo e passar os parâmetros */}
      <Link to="/">
        <i className="fa fa-home"></i> Início
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i> Usuários
      </Link>
    </nav>
  </header>
);
