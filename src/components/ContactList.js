import React from 'react';

const ContactList = ({ contacts, onSelectContact }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="contact-item"
          onClick={() => onSelectContact(contact)}
        >
          <div className="contact-avatar">
            <img
              src={contact.avatar || 'https://via.placeholder.com/40'} // Default avatar
              alt={`${contact.name}'s avatar`}
            />
          </div>
          <div className="contact-details">
            <div className="contact-header">
              <span className="contact-name">{contact.name}</span>
              <span className="contact-time">{contact.lastActiveTime}</span>
            </div>
            <div className="contact-last-message">
              {contact.lastMessage || 'No messages yet'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
