import '../styles/modal.css'

const Modal = ({ show, title, handleClose, handleAction, textValue, setTextValue, actionButtonText, cancelButtonText, placeholder, hideTextBox }) => {
  if (!show) {
    return null
  }

  return (
        <div className="card-body">
            <div className="modal-content">
            <h2>{title}</h2>
                {!hideTextBox && (
                    <input
                        type="text"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                        placeholder={placeholder}
                    />
                )}
                <div className="modal-actions">
                    <button onClick={handleAction}>{actionButtonText}</button>
                    <button onClick={handleClose}>{cancelButtonText}</button>
                </div>
            </div>
        </div>
  )
}

export default Modal
