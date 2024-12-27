import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action of inserting a new line
      handleSend(); // Send the message when Enter is pressed
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyPress} // Handle Enter key press
        placeholder="Type a message"
        className="message-input-field"
      />
      <button className="send-button" onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;
