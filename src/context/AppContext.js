import React, { createContext, useContext, useReducer } from 'react';

// Initial state setup
const initialState = {
  contacts: [],
  selectedContact: null,
  messages: []
};

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: action.payload };
    case 'SELECT_CONTACT':
      return { ...state, selectedContact: action.payload };
    case 'SET_MESSAGES':
      return { ...state, messages: action.payload };
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);

// AppProvider component that wraps the app with the context provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
