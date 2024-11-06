import React, { useState } from 'react';
import '../styles/buyerForm.css';

const BuyerForm = ({ buyer, setBuyer, handlePurchase, setFormVisible }) => {
    const [emailConfirmation, setEmailConfirmation] = useState('');

    const isFormValid = () => {
        return (
            buyer.name &&
            buyer.lastName &&
            buyer.email &&
            emailConfirmation &&
            buyer.email === emailConfirmation
        );
    };

    return (
        <div className="purchase-form">
            <h3>Ingresa tus datos</h3>
            <input
                type="text"
                placeholder="Nombre"
                value={buyer.name}
                onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Apellido"
                value={buyer.lastName}
                onChange={(e) => setBuyer({ ...buyer, lastName: e.target.value })}
            />
            <input
                type="email"
                placeholder="Correo Electrónico"
                value={buyer.email}
                onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
            />
            <input
                type="email"
                placeholder="Confirma tu Correo Electrónico"
                value={emailConfirmation}
                onChange={(e) => setEmailConfirmation(e.target.value)}
            />
            <button onClick={handlePurchase} disabled={!isFormValid()}>Confirmar Compra</button>

            <button onClick={() => setFormVisible(false)}>Cancelar</button>

            {!isFormValid() && buyer.email && emailConfirmation && (
                <p style={{ color: 'red' }}>Los correos electrónicos no coinciden.</p>
            )}
        </div>
    );
};

export default BuyerForm;
