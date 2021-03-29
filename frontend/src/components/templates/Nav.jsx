import './Nav.css'
import React from 'react'

//eslint-disable-next-line
export default props =>
    <header className="menu-area">
        <nav className="menu">
            {/* REFATORAR igual em Header.jsx - Criar novo componente, importar nesse arquivo e passar os parâmetros */}
            <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </header>