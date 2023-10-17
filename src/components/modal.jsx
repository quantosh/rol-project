import React from 'react';
import '../styles/modal.css';

const Modal = ({ show, title, handleClose, handleAction, textValue, setTextValue, actionButtonText, cancelButtonText }) => {
    if (!show){
        return null;
    }
    
    return (
        <div className="card-body">
            <div className="modal-content">
                <h2>{title}</h2>
                <input
                    type="text"
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    placeholder="Name"
                />
                <div className="modal-actions">
                    <button onClick={handleAction}>{actionButtonText}</button>
                    <button onClick={handleClose}>{cancelButtonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
