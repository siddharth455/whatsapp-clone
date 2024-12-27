import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { db } from '../firebaseConfig'; // Firebase Firestore
import { addDoc, collection, onSnapshot, query, where, orderBy, serverTimestamp } from 'firebase/firestore';
import { db as indexedDb } from '../utils/db'; // IndexedDB utils

const useMessages = (contactId) => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const loadMessages = async () => {
      try {
        // Load messages from IndexedDB for offline support
        const messages = await indexedDb.messages.where('contactId').equals(contactId).toArray();
        dispatch({ type: 'SET_MESSAGES', payload: messages });

        // Listen for real-time updates from Firestore
        const messagesRef = collection(db, 'messages');
        const q = query(messagesRef, where('contactId', '==', contactId), orderBy('createdAt', 'asc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              const newMessage = { id: change.doc.id, ...change.doc.data() };
              dispatch({ type: 'ADD_MESSAGE', payload: newMessage });

              // Sync with IndexedDB
              indexedDb.messages.put(newMessage);
            }
          });
        });

        return unsubscribe;
      } catch (error) {
        console.error('Error loading messages:', error);
        // Optionally dispatch an error to your state
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load messages.' });
      }
    };

    loadMessages().then((unsubscribe) => {
      return () => {
        if (unsubscribe) unsubscribe(); // Clean up Firestore listener on unmount
      };
    });

  }, [contactId, dispatch]);

  const sendMessage = async (message) => {
    try {
      const newMessage = {
        text: message,
        contactId,
        createdAt: serverTimestamp(), // Use Firestore's server timestamp
        sender: 'You',
      };

      // Save to Firestore
      const docRef = await addDoc(collection(db, 'messages'), newMessage);

      // Save to IndexedDB with the generated Firestore ID
      const finalMessage = { id: docRef.id, ...newMessage, createdAt: new Date() }; // Use Date for IndexedDB
      await indexedDb.messages.add(finalMessage);

      // Update the global state
      dispatch({ type: 'ADD_MESSAGE', payload: finalMessage });
    } catch (error) {
      console.error('Error sending message:', error);
      // Optionally dispatch an error to your state
      dispatch({ type: 'SET_ERROR', payload: 'Failed to send message.' });
    }
  };

  return { messages: state.messages, sendMessage };
};

export default useMessages;
