import React, { useState, useEffect, useRef } from 'react';
import './ChatInterface.css';
import logo from '../logo.png';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatResponse {
  session_id: string;
  response: {
    type: string;
    message: string;
    travel_request?: any;
    package?: any;
    email_sent?: boolean;
  };
}

interface ChatInterfaceProps {
  onClose?: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hey nomad! 🌍 Ready to turn your laptop into a passport? Just tell me where you want to go and I'll handle the rest. No more 3am Googling sessions!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const API_BASE_URL = 'https://travel-chatbot-ten.vercel.app';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBottomImmediate = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle mobile keyboard events
  useEffect(() => {
    const handleResize = () => {
      // When viewport changes (keyboard appears/disappears), scroll to bottom
      setTimeout(scrollToBottomImmediate, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const addMessage = (content: string, isUser: boolean = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    addMessage(message, true);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          session_id: sessionId
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ChatResponse = await response.json();
      
      if (data.session_id) {
        setSessionId(data.session_id);
      }
      
      const botMessage = data.response?.message || 'Got it! Let me work my magic... ✨';
      addMessage(botMessage);

    } catch (error) {
      console.error('Error:', error);
      addMessage('Oops! Something went sideways. Let\'s try that again? 🔄');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      sendMessage(inputMessage);
    }
  };

  const handleQuickMessage = (message: string) => {
    sendMessage(message);
  };

  const quickMessages = [
    '🌍 Travelling to Lisbon',
    '✈️ Flying from Heathrow',
    '🏨 Staying near the beach',
    '💻 Coworking space with WiFi'
  ];

  return (
    <div className="chat-interface">
      {/* Header */}
      <div className="chat-header">
        <div className="header-content">
          <div className="header-avatar">
            <img src={logo} alt="Say It. Sorted" className="header-logo" />
          </div>
          <div className="header-info">
            <div className="title-row">
              <h1>Your AI Travel Buddy</h1>
              <div className="status-dot"></div>
            </div>
            <p>Online • Type It. Sorted.</p>
          </div>
          {onClose && (
            <button className="close-btn" onClick={onClose}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="messages-container" ref={messagesContainerRef}>
        <div className="messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.isUser ? 'user' : 'bot'}`}>
              <div className="message-bubble">
                {message.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <div className="quick-messages">
          {quickMessages.map((msg, index) => (
            <button
              key={index}
              className="quick-message-btn"
              onClick={() => handleQuickMessage(msg)}
              disabled={isLoading}
            >
              {msg}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="input-container">
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Where's your laptop taking you?"
            disabled={isLoading}
            className="message-input"
          />
          <button
            type="submit"
            disabled={!inputMessage.trim() || isLoading}
            className="send-btn"
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface; 