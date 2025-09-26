import React, { useState } from 'react';
import { FaSearch, FaPaperPlane, FaCircle } from 'react-icons/fa';

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      company: 'TechCorp Inc.',
      lastMessage: 'Thank you for your application. We would like to schedule an interview.',
      time: '2 min ago',
      unread: true,
      avatar: 'MR',
    },
    {
      id: 2,
      name: 'John Smith',
      company: 'StartupXYZ',
      lastMessage: 'Great to see your resume! Can we set up a call?',
      time: '1 hour ago',
      unread: true,
      avatar: 'JS',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      company: 'Enterprise Solutions',
      lastMessage: 'We received your application and will be in touch soon.',
      time: 'Yesterday',
      unread: false,
      avatar: 'SJ',
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'Maria Rodriguez',
      message: 'Hi! Thank you for applying to our Software Developer position.',
      time: '10:30 AM',
      isMe: false,
    },
    {
      id: 2,
      sender: 'Me',
      message: 'Thank you for considering my application! I\'m very excited about this opportunity.',
      time: '10:35 AM',
      isMe: true,
    },
    {
      id: 3,
      sender: 'Maria Rodriguez',
      message: 'Thank you for your application. We would like to schedule an interview. Are you available next week?',
      time: '2 min ago',
      isMe: false,
    },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const selectedConv = conversations.find(conv => conv.id === selectedConversation);

  return (
    <div style={{ display: 'flex', height: '100vh', paddingTop: '0', backgroundColor: '#f8f9fa' }}>
      {/* Conversations List */}
      <div style={{ width: '350px', backgroundColor: 'white', borderRight: '1px solid #e5e7eb' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
            Messages
          </h1>
          <div style={{ position: 'relative' }}>
            <FaSearch style={{ position: 'absolute', left: '12px', top: '12px', color: '#9ca3af' }} />
            <input
              type="text"
              placeholder="Search conversations..."
              style={{
                width: '100%',
                padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '0.9rem',
              }}
            />
          </div>
        </div>

        <div style={{ overflowY: 'auto', height: 'calc(100vh - 160px)' }}>
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedConversation(conv.id)}
              style={{
                padding: '1rem 1.5rem',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer',
                backgroundColor: selectedConversation === conv.id ? '#f0f7ff' : 'transparent',
                transition: 'background-color 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#4f46e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    flexShrink: 0,
                  }}
                >
                  {conv.avatar}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#333', margin: 0 }}>
                      {conv.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {conv.unread && <FaCircle style={{ color: '#4f46e5', fontSize: '0.5rem' }} />}
                      <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{conv.time}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#6c757d', margin: '0 0 0.25rem 0' }}>
                    {conv.company}
                  </p>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: conv.unread ? '#333' : '#9ca3af',
                      margin: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      fontWeight: conv.unread ? '500' : 'normal',
                    }}
                  >
                    {conv.lastMessage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {selectedConv && (
          <>
            {/* Chat Header */}
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', backgroundColor: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#4f46e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.8rem',
                  }}
                >
                  {selectedConv.avatar}
                </div>
                <div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0, color: '#333' }}>
                    {selectedConv.name}
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
                    {selectedConv.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', backgroundColor: '#fafafa' }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    justifyContent: msg.isMe ? 'flex-end' : 'flex-start',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      maxWidth: '70%',
                      padding: '0.75rem 1rem',
                      borderRadius: '18px',
                      backgroundColor: msg.isMe ? '#4f46e5' : 'white',
                      color: msg.isMe ? 'white' : '#333',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem', lineHeight: '1.4' }}>
                      {msg.message}
                    </p>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        opacity: 0.7,
                        color: msg.isMe ? 'rgba(255, 255, 255, 0.8)' : '#9ca3af',
                      }}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div style={{ padding: '1.5rem', borderTop: '1px solid #e5e7eb', backgroundColor: 'white' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-end' }}>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '24px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '44px',
                    minHeight: '44px',
                  }}
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </>
        )}

        {!selectedConv && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: '#9ca3af',
              fontSize: '1.1rem',
            }}
          >
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;