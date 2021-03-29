import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

//import Header from '../components/templates/Header'
import Logo from '../components/templates/Logo'
import Nav from '../components/templates/Nav'
import Home from '../components/home/Home'
import Footer from '../components/templates/Footer'

//eslint-disable-next-line
export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />

    </div>