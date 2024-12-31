import { useContext } from "react";
import { MessagesContext } from "../Services/MessagesContext.js";
import { useMessages } from "../Hooks/useMessages.js";

function MessageProvider({ children }) {
  const messageUtils = useMessages();

  return (
    <MessagesContext.Provider value={messageUtils}>
      {children}
    </MessagesContext.Provider>
  );
}

function useMessagesContext() {
  return useContext(MessagesContext);
}

export default MessageProvider;
export { useMessagesContext };