import React, { useEffect } from 'react';
import ChatInterface from './ChatInterface';
import './ChatModal.css';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('chat-modal-open');
    } else {
      document.body.classList.remove('chat-modal-open');
    }

    return () => {
      document.body.classList.remove('chat-modal-open');
    };
  }, [isOpen]);

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