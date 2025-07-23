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
    message: string;
    type: string;
  };
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI travel assistant. I can help you book complete trips with flights and accommodation. Just tell me where you want to go, when, and your budget!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [showExamples, setShowExamples] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // Updated to use the deployed API URL
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://travel-chatbot-3ai3qvrip-joao-esteves-projects.vercel.app';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    checkConnection();
    const interval = setInterval(checkConnection, 30000);
    return () => clearInterval(interval);
  }, []);

  const checkConnection = async () => {
    try {
      // Updated to use the correct health endpoint for the deployed API
      const response = await fetch(`${API_BASE_URL}/api/health`);
      if (response.ok) {
        setIsConnected(true);
        setShowExamples(true);
      } else {
        throw new Error('Backend not responding');
      }
    } catch (error) {
      // If health check fails, try the main chat endpoint to see if API is available
      try {
        const testResponse = await fetch(`${API_BASE_URL}/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: 'test',
            session_id: null
          })
        });
        
        if (testResponse.ok) {
          setIsConnected(true);
          setShowExamples(true);
        } else {
          throw new Error('API not responding');
        }
      } catch (testError) {
        setIsConnected(false);
        setShowExamples(false);
      }
    }
  };

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
    if (!message.trim() || !isConnected) return;

    // Add user message to chat
    addMessage(message, true);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Updated to use the correct chat endpoint for the deployed API
      const response = await fetch(`${API_BASE_URL}/chat`, {
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
      setSessionId(data.session_id);

      // Add bot response to chat
      addMessage(data.response.message);

      // If this was a complete request, show a new session message
      if (data.response.type === 'complete') {
        setTimeout(() => {
          addMessage('Ready to plan another trip? Just tell me where you\'d like to go next!');
        }, 1000);
      }

    } catch (error) {
      console.error('Error:', error);
      addMessage('Sorry, I encountered an error. Please try again.');
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

      <div className={`status ${isConnected ? 'connected' : 'error'}`}>
        {isConnected 
          ? '✅ Connected to travel chatbot API' 
          : '❌ Cannot connect to API. Please check your connection.'
        }
      </div>

      {showExamples && (
        <div className="example-messages">
          <h4>💡 Try these examples:</h4>
          {exampleMessages.map((example, index) => (
            <div 
              key={index}
              className="example-message" 
              onClick={() => handleExampleClick(example)}
            >
              {example}
            </div>
          ))}
        </div>
      )}

      <div className="chat-input-container">
        <form className="chat-input-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="chat-input" 
            placeholder="Tell me where you want to go..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            disabled={isLoading || !isConnected}
            autoComplete="off"
          />
          <button 
            type="submit" 
            className="send-button" 
            disabled={isLoading || !isConnected || !inputMessage.trim()}
          >
            {isLoading ? (
              <div className="loading"></div>
            ) : (
              <span>➤</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface; 