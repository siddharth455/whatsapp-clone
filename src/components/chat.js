import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig.js'; // Import Firestore db instance

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Load messages from Firestore when the component mounts
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'messages'));
        const loadedMessages = [];
        querySnapshot.forEach((doc) => {
          loadedMessages.push(doc.data().content); // Get message content from each doc
        });
        setMessages(loadedMessages.reverse()); // Reverse to show newest message at the top
      } catch (error) {
        console.error('Error fetching messages: ', error);
      }
    };
    fetchMessages();
  }, []); // Empty dependency array to fetch on mount

  // Handle sending a new message
  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      try {
        // Add the message to Firestore
        await addDoc(collection(db, 'messages'), {
          content: newMessage,
          timestamp: new Date(),
        });
        setNewMessage(''); // Clear the input field
        // Re-fetch messages after sending a new one
        const querySnapshot = await getDocs(collection(db, 'messages'));
        const loadedMessages = [];
        querySnapshot.forEach((doc) => {
          loadedMessages.push(doc.data().content);
        });
        setMessages(loadedMessages.reverse());
      } catch (error) {
        console.error('Error sending message: ', error);
      }
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {/* Display all messages */}
        {messages.map((message, index) => (
          <div key={index} className="message">{message}</div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
