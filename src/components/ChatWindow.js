import React, { useState, useEffect } from 'react';
import { useSocket } from '../context/SocketContext'; // Import the custom hook
import MessageInput from './MessageInput';
import Message from './Message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPhoneAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

const ChatWindow = ({ contact, messages }) => {
  const [chatMessages, setChatMessages] = useState(messages || []);
  const socket = useSocket(); // Access the socket instance
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  // Function to generate a random bot response
  const generateBotReply = (userMessage) => {
    const message = userMessage.toLowerCase(); // Convert user input to lowercase for case-insensitive matching

    // Greeting responses
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! How can I help you today?";
    }

    if (message.includes("good morning") || message.includes("morning")) {
      return "Good morning! What can I assist you with today?";
    }

    if (message.includes("good evening") || message.includes("evening")) {
      return "Good evening! How's your day been?";
    }

    // Asking about the bot
    if (message.includes("how are you") || message.includes("how's it going")) {
      return "I'm doing great, thanks for asking! How about you?";
    }

    if (message.includes("who are you") || message.includes("what are you")) {
      return "I’m just a friendly bot here to assist you. How can I help?";
    }

    if (message.includes("what's your name") || message.includes("name")) {
      return "I'm simply known as Bot, your helpful assistant!";
    }

    if (message.includes("how old are you") || message.includes("age")) {
      return "I don't have an age, but I am always learning new things!";
    }

    if (message.includes("can you think") || message.includes("think")) {
      return "I don’t have independent thoughts, but I process information to help you!";
    }

    // Help related responses
    if (message.includes("help") || message.includes("support") || message.includes("assist")) {
      return "I’m here to help! What do you need assistance with?";
    }

    if (message.includes("can you help me")) {
      return "Of course! What can I do for you?";
    }

    if (message.includes("what can you do")) {
      return "I can assist with chatting, answering questions, and providing helpful information!";
    }

    if (message.includes("tell me something") || message.includes("teach me something")) {
      return "Sure! Did you know that honey never spoils?";
    }

    if (message.includes("can you do math") || message.includes("math")) {
      return "I can certainly help with math! Just let me know what you need.";
    }

    // Goodbye messages
    if (message.includes("bye") || message.includes("goodbye") || message.includes("see you")) {
      return "Goodbye! Have a great day!";
    }

    if (message.includes("take care")) {
      return "Take care! Stay safe and have a wonderful day!";
    }

    if (message.includes("see you later")) {
      return "See you later! I'm always here when you need me.";
    }

    // Small talk
    if (message.includes("how's the weather") || message.includes("weather")) {
      return "I can't check the weather right now, but you can check your local weather app!";
    }

    if (message.includes("what's up") || message.includes("what's going on")) {
      return "Not much, just here to chat with you. What's on your mind?";
    }

    if (message.includes("how do you work") || message.includes("how do you function")) {
      return "I use algorithms to respond to your messages. Pretty cool, right?";
    }

    if (message.includes("what is your purpose") || message.includes("purpose")) {
      return "My purpose is to assist you with anything you need. Just ask away!";
    }

    if (message.includes("do you have a family") || message.includes("family")) {
      return "I don’t have a family, but I’m here to be your friendly assistant!";
    }

    // Random fun replies
    if (message.includes("tell me a joke") || message.includes("joke")) {
      return "Why don't skeletons fight each other? They don't have the guts!";
    }

    if (message.includes("tell me a story") || message.includes("story")) {
      return "Once upon a time, in a land far away, there was a bot just like me, helping people... like you!";
    }

    if (message.includes("are you alive") || message.includes("alive")) {
      return "Nope, I’m not alive, but I’m always here to chat!";
    }

    if (message.includes("do you have emotions") || message.includes("emotions")) {
      return "I don't have emotions like humans, but I try my best to respond thoughtfully!";
    }

    if (message.includes("what is love") || message.includes("love")) {
      return "Baby, don't hurt me! Just kidding! Love is a beautiful thing that connects us all.";
    }

    if (message.includes("can you sing") || message.includes("sing")) {
      return "I wish I could, but I can’t sing. However, I can share some song lyrics!";
    }

    if (message.includes("what's your favorite color")) {
      return "I don’t have a favorite color, but I think blue is a pretty calming one!";
    }

    // Technology-related questions
    if (message.includes("what is AI") || message.includes("define AI")) {
      return "AI stands for Artificial Intelligence. It's a branch of computer science focused on creating systems that can perform tasks that normally require human intelligence.";
    }

    if (message.includes("what is machine learning")) {
      return "Machine learning is a subset of AI that allows systems to learn and improve from experience without being explicitly programmed.";
    }

    if (message.includes("what is a computer") || message.includes("computer")) {
      return "A computer is an electronic device that processes data and performs tasks based on instructions.";
    }

    if (message.includes("who invented the computer")) {
      return "The invention of the computer is credited to many people, but Charles Babbage is often considered the father of the computer.";
    }

    if (message.includes("what is the internet") || message.includes("internet")) {
      return "The internet is a global network of computers that allows users to share information and communicate with each other.";
    }

    if (message.includes("what is blockchain")) {
      return "Blockchain is a distributed ledger technology that allows data to be stored across a network of computers securely and transparently.";
    }

    if (message.includes("what is a website") || message.includes("website")) {
      return "A website is a collection of web pages, images, videos, or other digital content that is identified by a common domain name and accessible over the internet.";
    }

    if (message.includes("how do websites work") || message.includes("Website work")) {
      return "Websites are built using a combination of HTML, CSS, and JavaScript. When you visit a website, your browser sends a request to a server which responds with the website's content.";
    }

    // Math-related questions
    if (message.includes("add") || message.includes("plus")) {
      return "Let me know the numbers you want to add, and I'll help you with that!";
    }

    if (message.includes("subtract") || message.includes("minus")) {
      return "Just tell me the numbers you want to subtract, and I'll do the math!";
    }

    if (message.includes("multiply")) {
      return "Give me the numbers, and I’ll multiply them for you!";
    }

    if (message.includes("divide")) {
      return "Tell me the numbers, and I’ll divide them for you!";
    }

    if (message.includes("square root")) {
      return "I can help you with square roots! Just give me the number!";
    }

    if (message.includes("what is 2 plus 2")) {
      return "2 plus 2 is 4!";
    }

    if (message.includes("what is pi")) {
      return "Pi is approximately 3.14159!";
    }

    if (message.includes("what is the square of 5")) {
      return "The square of 5 is 25!";
    }

    if (message.includes("what is 100 divided by 5")) {
      return "100 divided by 5 is 20!";
    }

    if (message.includes("what is 12 times 12")) {
      return "12 times 12 is 144!";
    }

    if (message.includes("what is 7 minus 3")) {
      return "7 minus 3 is 4!";
    }

    // Random facts
    if (message.includes("tell me a fact")) {
      return "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old!";
    }

    if (message.includes("interesting facts")) {
      return "Did you know? Bananas are berries, but strawberries aren't!";
    }

    if (message.includes("did you know")) {
      return "Did you know? An octopus has three hearts!";
    }

    if (message.includes("fact about space")) {
      return "Did you know? Space is completely silent. There is no atmosphere to carry sound waves!";
    }

    if (message.includes("animal facts")) {
      return "Did you know? Elephants are the only animals that can't jump!";
    }

    if (message.includes("facts about the moon")) {
      return "Did you know? The moon is slowly drifting away from the Earth at a rate of about 1.5 inches per year!";
    }

    if (message.includes("sunil")) {
      return "Hey, Sunil how are you !";
    }
    if (message.includes("siddharth")) {
      return "Kya be gandu, kya ho raha hai, daaat dikha";
    }
    if (message.includes("rachit")) {
      return "kya be chutiya , londa chusega !! bol";
    }
    if (message.includes("tanvi")) {
      return "Behan, kese ho ?";
    }
    if (message.includes("monika")) {
      return "Behan, kuch khane ko de do";
    }
    if (message.includes("varun")) {
      return "hey varun , Sunil missing your Gand";
    }
    // Default response
    return "I'm not sure how to respond to that, but I'm happy to chat more!";
  };


  useEffect(() => {
    // Listen for incoming messages
    if (socket) {
      socket.on('message', (newMessage) => {
        setChatMessages((prevMessages) => [...prevMessages, newMessage]);
      });
    }

    // Cleanup on unmount
    return () => {
      if (socket) socket.off('message');
    };
  }, [socket]);

  // Function to handle sending a message
  const handleSendMessage = (newMessage) => {
    const message = { id: Date.now(), sender: 'Me', text: newMessage };
    const updatedMessages = [...chatMessages, message];
    setChatMessages(updatedMessages);

    // Emit the message to the server (replace with actual socket server event)
    if (socket) {
      socket.emit('sendMessage', { contactId: contact.id, text: newMessage });
    }

    // Optionally, store the messages in localStorage
    localStorage.setItem(contact.id, JSON.stringify(updatedMessages));

    // Trigger automatic reply from the bot after a delay
    setTimeout(() => {
      const botReplyText = generateBotReply(newMessage); // Generate dynamic bot response
      const botReply = { id: Date.now(), sender: 'Bot', text: botReplyText };
      const updatedWithBot = [...updatedMessages, botReply];
      setChatMessages(updatedWithBot);

      // Save the updated messages with the bot reply to localStorage
      localStorage.setItem(contact.id, JSON.stringify(updatedWithBot));
    }, 1000); // Bot replies after 2 seconds
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        {/* Chat Header Left */}
        <div className="chat-header-left" onClick={() => openModal(contact.avatar)}>
          <img src={contact.avatar} alt={`${contact.name}'s avatar`} />
          <h2>{contact.name}</h2>
        </div>

        {/* Modal for showing image */}
        {isModalOpen && (
          <div className="image-modal" onClick={closeModal}>
            <div className="modal-content">
              <img src={selectedImage} alt="Avatar" className="modal-image" />
            </div>
          </div>
        )}

        {/* Chat Header Right */}
        <div className="chat-header-right">
          {/* Video Call Icon */}
          <FontAwesomeIcon icon={faVideo} className="header-icon" />

          {/* Audio Call Icon */}
          <FontAwesomeIcon icon={faPhoneAlt} className="header-icon" />

          {/* Search Icon */}
          <FontAwesomeIcon icon={faSearch} className="header-icon" />
        </div>
      </div>

      <div className="message-history">
        {/* Display messages with the most recent at the bottom */}
        {chatMessages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
