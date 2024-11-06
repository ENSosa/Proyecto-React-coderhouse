import React, { useContext } from 'react'
import NavBar from './NavBar'
import { Theme } from '../contexts/ThemeProvider'
import '../styles/layout.css'
import Footer from './Footer'

const Layout = ({ children }) => {
  const { dark } = useContext(Theme)
  return (
    <>
      <NavBar />
      <div className={dark ? "main-container-dark" : "main-container-ligth"}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout  