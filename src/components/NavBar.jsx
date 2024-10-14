import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/Logo.png'
import './styles/navBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to={'/'}>INICIO</NavLink>
        </li>
        <li>
          <NavLink to={'/category/electrodomesticos'}>ELECTRODOMÉSTICOS</NavLink>
        </li>
        <li>
          <NavLink to={'/category/tecnologia'}>TECNOLOGÍA</NavLink>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
}

export default NavBar;
