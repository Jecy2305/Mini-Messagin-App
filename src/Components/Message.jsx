import { Edit2, Trash2 } from "lucide-react";
import Modal from "./Modal.jsx";
import { useState } from "react";
import { useMessagesContext } from "../Context/MessageContext.jsx";

function Message({message}) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const {removeMessage, isEditing} = useMessagesContext();
    const handleEdit = ()=>{
        setIsModalOpen(true)
        isEditing();
    }

  return (

    <>
        <article>
            <div className="article-content">

                {/*<div className="article-content-img">
                </div>*/}

                <div className="article-content-texts">

                    <div className="article-content-texts-header">
                        <span id="span-content-username">{message.userName}</span>
                        <span id="span-content-time">{message.sendTimeMessage}</span>
                    </div>
                    
                    <p>{message.message}</p>
                    
                </div>


            </div>
            <div className="article-buttons">
                <button id="article-buttons-button-edit" onClick={handleEdit}>
                    <Edit2></Edit2>
                </button>

                <button id="article-buttons-button-delete" onClick={()=>removeMessage(message.id)}>
                    <Trash2></Trash2>
                </button>
            </div>
        </article>

        <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        message={message}
      />
    </>

  )
}

export default Message