import React, { useContext } from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/Logo.png'
import '../styles/navBar.css'
import { NavLink } from 'react-router-dom'
import { Theme } from '../contexts/ThemeProvider'
import Switch from './Switch'

const NavBar = () => {
  const { dark, setDark } = useContext(Theme)

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
        <li>
          <Switch checked={dark} setChecked={setDark} />
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
}

export default NavBar;
