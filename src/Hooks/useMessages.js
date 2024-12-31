import { useEffect, useState } from "react";
import {
  fetchMessages,
  createMessage,
  updateMessage,
  deleteMessage,
} from "../Services/apiService.js";

export const useMessages = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  const getMessages = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchMessages();
      setMessages(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addMessage = async (newMessage) => {
    try {
      const message = await createMessage(newMessage);
      setMessages(prevMessages => [...prevMessages, message]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const editMessage = async (id, updatedMessage) => {
    try {
      const message = await updateMessage(id, updatedMessage);
      setMessages(messages.map((msg) => (msg.id === id ? message : msg)));
      await getMessages();
    } catch (err) {
      console.log(err.message);
    }
  };

  const removeMessage = async (id) => {
    try {
      await deleteMessage(id);
      setMessages(messages.filter((msg) => msg.id !== id));
      console.log("Exito")
    } catch (err) {
      console.log(err);
    }
  };

  const isEditing = ()=>{
    setEditing(true)
  }

  const noEditing = ()=>{
    setEditing(false)
  }

  useEffect(() => {
    getMessages();
  }, []);

  return {
    messages,
    isLoading,
    editing,
    error,
    noEditing,
    isEditing,
    getMessages,
    addMessage,
    editMessage,
    removeMessage,
  };
}
