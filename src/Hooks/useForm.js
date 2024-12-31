import { useState, useEffect } from "react";
import { useMessagesContext } from "../Context/MessageContext.jsx";

export const useForm = (onClose, message) => {
  const { addMessage, editMessage, editing } = useMessagesContext();
  const [formValues, setFormValues] = useState({
    id: 0,
    userName: "",
    message: "",
  });

  useEffect(() => {
    if (message) {
      setFormValues({
        id: message.id,
        userName: message.userName,
        message: message.message,
      });
    }
  }, [message]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValues.userName && formValues.message) {
      const newMessage = {
        userName: formValues.userName,
        message: formValues.message,
      };

      if (editing) {
        await editMessage(formValues.id, formValues);
      } else {
        await addMessage(newMessage);
      }
      resetForm();
      onClose();
    }
  };

  const resetForm = () => {
    setFormValues({
      userName: "",
      message: "",
    });
  };

  return {
    formValues,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};
