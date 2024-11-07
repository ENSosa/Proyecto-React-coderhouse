import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="py-3 mt-5">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Inicio</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Electrodomésticos</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Tecnología</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Carrito</a></li>
            </ul>
            <p className="text-center text-body-secondary">&copy; 2024 Company, Inc</p>
        </footer>
    )
}

export default Footer