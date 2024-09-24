import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/Logo.png'
import './styles/navBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="logo" className="logo-img" />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#tecnologia">Tecnología</a></li>
        <li><a href="#electrodomesticos">Electrodomésticos</a></li>
        <CartWidget />
      </ul>
    </div>
  );
}

export default NavBar