const Modal = ({ show, title, handleClose, handleAction, textValue, setTextValue, actionButtonText, cancelButtonText, placeholder, hideTextBox }) => {
  if (!show) {
    return null
  }

  return (
        <dialog id="modal_notification " className="card">
            <div className="card-body ">
                <form className="dialog bg-slate-300">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <h3 className="font-bold text-lg">{title}</h3>
                <div className="flex gap-1">
                    {!hideTextBox && (
                        <input
                            type="text"
                            value={textValue}
                            onChange={(e) => setTextValue(e.target.value)}
                            placeholder={placeholder}
                            className='input input-bordered w-full max-w-xs'
                        />
                    )}
                    <button className='btn btn-success' onClick={handleAction}>{actionButtonText}</button>
                    <button className='btn' onClick={handleClose}>{cancelButtonText}</button>
                </div>
            </div>
        </dialog >
  )
}

export default Modal
