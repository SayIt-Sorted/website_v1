import React, { useState, useEffect, useRef } from 'react';
import './ChatInterface.css';

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

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI travel assistant. I'm ready to help you plan your trips! I can provide travel advice, destination recommendations, and help you plan your travel budget. Just tell me where you want to go, when, and your budget!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [showExamples] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const API_BASE_URL = 'https://travel-chatbot-ten.vercel.app';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

    const data: ChatResponse = await response.json();
    
    setSessionId(data.session_id);
    
    const botMessage = data.response.message;
    addMessage(botMessage);

    setIsLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      sendMessage(inputMessage);
    }
  };

  const handleExampleClick = (exampleMessage: string) => {
    sendMessage(exampleMessage);
  };

  const exampleMessages = [
    'Book a trip from Porto to London next weekend for 3 days under 500 euros',
    'I want to go from NYC to Paris on December 15th for a week',
    'Find me a flight and hotel from Madrid to Rome'
  ];

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>✈️ Travel Booking AI</h1>
        <p>Tell me where you want to go and I'll find the best travel package for you!</p>
      </div>

      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.isUser ? 'user' : 'bot'}`}>
            <div className="message-avatar">
              {message.isUser ? '👤' : '🤖'}
            </div>
            <div className="message-content">
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="status connected">
        ✅ Connected to travel chatbot API
      </div>

      {showExamples && (
        <div className="examples">
          <h3>Try these examples:</h3>
          <div className="example-buttons">
            {exampleMessages.map((example, index) => (
              <button
                key={index}
                className="example-button"
                onClick={() => handleExampleClick(example)}
                disabled={isLoading}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="chat-input-form">
        <div className="chat-input-container">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Tell me where you want to go..."
            disabled={isLoading}
            className="chat-input"
          />
          <button
            type="submit"
            disabled={!inputMessage.trim() || isLoading}
            className="send-button"
          >
            {isLoading ? '⏳' : '➤'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface; 