import React from 'react';
import ChatInterface from './ChatInterface';
import './ChatModal.css';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="chat-modal" onClick={handleBackdropClick}>
      <div className="chat-modal-content">
        <ChatInterface onClose={onClose} />
      </div>
    </div>
  );
};

export default ChatModal; 