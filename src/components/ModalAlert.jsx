import React from 'react';
import '../styles/modal.css'

const ModalAlert = ({ isModalVisible, modalMessage, orderId, closeModal }) => {
    if (!isModalVisible) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{modalMessage}</h2>
                {orderId && <p>Número de orden: {orderId}</p>}
                <button onClick={closeModal}>Cerrar</button>
            </div>
        </div>
    );
};

export default ModalAlert;
