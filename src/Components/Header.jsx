import { MessageSquarePlus } from "lucide-react";
import Modal from "./Modal";
import { useState } from "react";

function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);
    
  return (
    <>
      <header>
        <div className="header-content-text">
          <h2>Mini Messaging App</h2>
        </div>
        <div className="header-content-buttons">
          <button onClick={() => setIsModalOpen(true)}>
            <MessageSquarePlus />
            <p>Message</p>
          </button>
        </div>
      </header>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
      />
    </>
  );
}

export default Header;
