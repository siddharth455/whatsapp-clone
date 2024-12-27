import React from 'react';

const Message = ({ message }) => {
  // Determine the message alignment based on the sender
  const isSender = message.sender === 'Me';

  return (
    <div
      className={`message ${isSender ? 'sender' : 'receiver'}`}
      style={{
        backgroundColor: isSender ? '#dcf8c6' : '#f0f0f0', // Light green for sender, light grey for receiver
        textAlign: isSender ? 'right' : 'left', // Align sender messages to the right, receiver messages to the left
      }}
    >
      <span>{message.text}</span>
    </div>
  );
};

export default Message;

