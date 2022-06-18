import React from 'react';
import './Modal.css'
import ReactDOM from 'react-dom';

function Modal({children, onClose}){
    return (
        <div className="Modal">
            <div className="Modal-content">
                <div className="Modal-header">
                    <button className="Modal-close" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className="Modal-body">
                    {children}
                </div>
            </div>
        </div>
    )
}


export default function ModalPortal({children, onClose}){
    //ReactDOM.createPortal renderiza un componente en una posición especifica del DOM. Para que el modal salga encima de todo,
    //lo sacamos del arbol principal "root" y lo renderizamos en un div que hemos creado llamado 'modal-root'
    return ReactDOM.createPortal(
        <Modal onClose={onClose}>
            {children}
        </Modal>,
        document.getElementById('modal-root')
    )
}