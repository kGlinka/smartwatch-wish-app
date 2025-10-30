import { useState } from 'react'

function Messages({ onBack }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Piekarnia', text: 'Mogę przygotowac twoje zamówienie na za 2 godziny!' },
    { id: 2, sender: 'You', text: 'Jakie smai macie' },
    { id: 3, sender: 'piekarnia', text: 'Mamy czekoladowe babeczki' },
    { id: 4, sender: 'Zen Spa', text: 'Mamy terminy na masaż we wtorek' }
  ])
  
  const [newMessage, setNewMessage] = useState('')

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: 'You',
        text: newMessage
      }])
      setNewMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="messages">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <h2>Messages</h2>

      <div className="message-list">
        {messages.map(msg => (
          <div key={msg.id} className="message-item">
            <div className="message-sender">{msg.sender}</div>
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
      </div>

      <div className="message-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="send-btn" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  )
}

export default Messages
