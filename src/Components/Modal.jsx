import { X } from "lucide-react";
import ReactDOM from "react-dom";
import {useForm} from '../Hooks/useForm.js'
import { useMessagesContext } from "../Context/MessageContext.jsx";

function Modal({isOpen, onClose, message}) {

  const { formValues, handleInputChange, handleSubmit } = useForm(onClose, message);
  const { editing, noEditing } = useMessagesContext();
  const closeModal = ()=>{
    noEditing();
    onClose();
  }

  if(!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="overlay__content">
        <div className="header-content">
          <div className="header-content-texts">
            <h3>{editing ? "Edit Message" :"New Message"}</h3>
            <p>Write your Username and Message below.</p>
          </div>
          <div className="header-content-icon">
            <button className="icon-button-x" onClick={closeModal}>
              <X/>
            </button>
          </div>
        </div>

        <form className="formulario" onSubmit={handleSubmit}>

          <label htmlFor="userName">
            UserName:
            <input type="text" name="userName" id="userName" placeholder="UserName...." maxLength={50}
            autoComplete="false"
            required
            value={formValues.userName}
            onChange={handleInputChange}/>
          </label>
            
          <textarea maxLength={200} name="message" id="message" placeholder="Type your message here"
          required
          value={formValues.message}
          onChange={handleInputChange}/>

          <button>
            {editing ? "Edit" : "Send"}
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root")
  )
}

export default Modal