// src/hooks/useContacts.js
import { useState, useEffect } from 'react';

const useContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Simulate fetching contacts data (this can be replaced with real API or Firebase calls)
    const fetchContacts = async () => {
        const contactData = [
                {
                  id: 1,
                  name: 'Sunil Kumar',
                  avatar: 'https://media.licdn.com/dms/image/v2/D5635AQE8O0j9-LhpTg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1725381421965?e=1735657200&v=beta&t=0EYC2tW33Swh592lY3DiIM8JUXzDMLrQGItso0f6_Ck',
                  lastMessage: 'Got your call, let’s chat.',
                  lastActiveTime: '10:50 AM',
                  messages: [
                    { id: 1, text: 'Can you send the files?', sender: 'Me', time: '2:50 PM' },
                    { id: 2, text: 'Check your email.', sender: 'Liam', time: '3:00 PM' },
                    { id: 3, text: 'Got it, thanks!', sender: 'Me', time: '3:05 PM' },
                    { id: 4, text: 'You’re welcome.', sender: 'Liam', time: '3:10 PM' }
                  ]
                },
                {
                  id: 2,
                  name: 'Monika',
                  avatar: 'https://via.placeholder.com/40/FF0000',
                  lastMessage: 'Talk soon!',
                  lastActiveTime: '9:50 AM',
                  messages: [
                    { id: 1, text: 'Can you send the files?', sender: 'Me', time: '2:50 PM' },
                    { id: 2, text: 'Check your email.', sender: 'Liam', time: '3:00 PM' },
                    { id: 3, text: 'Got it, thanks!', sender: 'Me', time: '3:05 PM' },
                    { id: 4, text: 'You’re welcome.', sender: 'Liam', time: '3:10 PM' }
                  ]
                },
                {
                  id: 3,
                  name: 'Rachit',
                  avatar: 'https://via.placeholder.com/40/008000',
                  lastMessage: 'See you soon!',
                  lastActiveTime: '9:50 AM',
                  messages: [
                    { id: 1, text: 'Can you send the files?', sender: 'Me', time: '2:50 PM' },
                    { id: 2, text: 'Check your email.', sender: 'Liam', time: '3:00 PM' },
                    { id: 3, text: 'Got it, thanks!', sender: 'Me', time: '3:05 PM' },
                    { id: 4, text: 'You’re welcome.', sender: 'Liam', time: '3:10 PM' }
                  ]
                },
                {
                  id: 4,
                  name: 'Tanvi',
                  avatar: 'https://via.placeholder.com/40/800080',
                  lastMessage: 'See you soon!',
                  lastActiveTime: '12:20 PM',
                  messages: [
                    { id: 1, text: 'Can you send the files?', sender: 'Me', time: '2:50 PM' },
                    { id: 2, text: 'Check your email.', sender: 'Liam', time: '3:00 PM' },
                    { id: 3, text: 'Got it, thanks!', sender: 'Me', time: '3:05 PM' },
                    { id: 4, text: 'You’re welcome.', sender: 'Liam', time: '3:10 PM' }
                  ]
                },
                {
                  id: 5,
                  name: 'Chris Brown',
                  avatar: 'https://via.placeholder.com/40/FFA500',
                  lastMessage: 'You too!',
                  lastActiveTime: '3:05 PM',
                  messages: [
                    { id: 1, text: 'Can you send the files?', sender: 'Me', time: '2:50 PM' },
                    { id: 2, text: 'Check your email.', sender: 'Liam', time: '3:00 PM' },
                    { id: 3, text: 'Got it, thanks!', sender: 'Me', time: '3:05 PM' },
                    { id: 4, text: 'You’re welcome.', sender: 'Liam', time: '3:10 PM' }
                  ]
                },
                {
                  id: 6,
                  name: 'Sophia Wilson',
                  avatar: 'https://via.placeholder.com/40/FF69B4',
                  lastMessage: 'Okay, I’ll talk to you soon.',
                  lastActiveTime: '10:30 AM',
                  messages: [
                    { id: 1, text: 'Can you send the files?', sender: 'Me', time: '2:50 PM' },
                    { id: 2, text: 'Check your email.', sender: 'Liam', time: '3:00 PM' },
                    { id: 3, text: 'Got it, thanks!', sender: 'Me', time: '3:05 PM' },
                    { id: 4, text: 'You’re welcome.', sender: 'Liam', time: '3:10 PM' }
                    ]
                },
                {
                  id: 7,
                  name: 'Liam Martinez',
                  avatar: 'https://via.placeholder.com/40/00CED1',
                  lastMessage: 'You too!',
                  lastActiveTime: '3:30 PM',
                  messages: [
                    { id: 1, text: 'Can you send the files?', sender: 'Me', time: '2:50 PM' },
                    { id: 2, text: 'Check your email.', sender: 'Liam', time: '3:00 PM' },
                    { id: 3, text: 'Got it, thanks!', sender: 'Me', time: '3:05 PM' },
                    { id: 4, text: 'You’re welcome.', sender: 'Liam', time: '3:10 PM' }
                  ]
                }
                
              ];
              
            // Repeat similar logic for other contacts to ensure 7-8 messages for each.
        
          
          

      setContacts(contactData);
    };

    fetchContacts();
  }, []);

  return contacts;
};

export default useContacts;
