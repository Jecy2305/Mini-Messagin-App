import { useMessagesContext } from '../Context/MessageContext.jsx';
import Message from "./Message.jsx";
import ReactDOM from "react-dom";

function MessagesList() {

  const { messages, isLoading } = useMessagesContext();

  if (isLoading) {
    return ReactDOM.createPortal(
      <div className="overlay">
        <div className="overlay__content">
          <h2>Loading...</h2>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }

  return (
    <div className="content-menssages-list">
      {messages.length > 0 ? (
        messages.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))
      ) : (
        <h2>0 Messages</h2>
      )}
    </div>
  );
}

export default MessagesList;
