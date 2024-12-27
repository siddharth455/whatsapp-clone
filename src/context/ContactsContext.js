// src/context/ContactsContext.js
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  contacts: []
};

const ContactsContext = createContext();

const contactsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};

export const ContactsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  return (
    <ContactsContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error('useContacts must be used within a ContactsProvider');
  }
  return context;
};
