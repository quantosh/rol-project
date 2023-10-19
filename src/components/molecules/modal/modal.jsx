import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

const Modal = ({ show, title, handleClose, handleAction, textValue, setTextValue, actionButtonText, cancelButtonText, placeholder, hideTextBox, buttonTextContent, buttonStyle = 'btn-primary' }) => {
  return (
    <Dialog.Root open={show} modal>
      <Dialog.Trigger asChild>
          <button className={`btn ${buttonStyle}`}>{buttonTextContent}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-20 z-10 fixed inset-0" />
          <Dialog.Content className={`flex flex-col z-20 fixed top-1/2 left-1/2 justify-center
        translate-x-[-50%] translate-y-[-50%] shadow-md gap-2 card`}>
            <div className='card-body bg-base-100 rounded-lg'>
              <Dialog.Close asChild>
                <button className="absolute right-3 top-3 rounded-full bg-slate-600 bg-opacity-25" aria-label="Close">
                    <Cross2Icon />
                </button>
              </Dialog.Close>
              <Dialog.Title className="font-bold text-lg">{title}</Dialog.Title>
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
                  <Dialog.Close asChild>
                      <button className='btn btn-success' onClick={handleAction}>{actionButtonText}</button>
                  </Dialog.Close>
              </div>
              <Dialog.Close asChild>
                  <button className='btn' onClick={handleClose}>{cancelButtonText}</button>
              </Dialog.Close>
              <Dialog.Close asChild>
              </Dialog.Close>
            </div>
          </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
