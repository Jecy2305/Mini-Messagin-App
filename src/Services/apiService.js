const API_URL = "https://localhost:44364/api";

const apiRequest = async (endpoint, method = "GET", body = null) => {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}/${endpoint}`, options);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error en la solicitud");
  }
  return response.json();
};

export const fetchMessages = () => apiRequest("Messages");
export const createMessage = (message) => apiRequest("Messages", "POST", message);
export const updateMessage = (id, updatedMessage) => apiRequest(`Messages/${id}`, "PUT", updatedMessage);
export const deleteMessage = (id) => apiRequest(`Messages/${id}`, "DELETE");
