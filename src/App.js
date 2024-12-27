import React, { useState, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import useContacts from './hooks/useContacts';
import ContactList from './components/ContactList';
import ChatWindow from './components/ChatWindow';
import './index.css';
import { SocketProvider } from './context/SocketContext';
import Chat from './components/chat'
 const App = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const contacts = useContacts();  // Fetching contacts

  useEffect(() => {
    if (contacts && contacts.length > 0) {
      setSelectedContact(contacts[0]);
    }
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SocketProvider> {/* Wrap the app with SocketProvider */}
      <AppProvider>
        <div className="app">
          <div className="sidebar">
            <div className="sidebar-header">
              <div className="sidebar-header-left">
                <h2>WhatsApp</h2>
              </div>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search contacts"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <ContactList contacts={filteredContacts} onSelectContact={setSelectedContact} />
          </div>
          
          <div className="chat">
            {selectedContact ? (
              <ChatWindow contact={selectedContact} messages={selectedContact.messages} />
            ) : (
              <div className="welcome-message">
                <h2>Select a contact to start chatting</h2>
              </div>
            )}
          </div>
        </div>
      </AppProvider>
    </SocketProvider>
  );
};

export default App;
