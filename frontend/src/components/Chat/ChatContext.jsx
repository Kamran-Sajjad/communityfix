import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import socket from './ChatSocket';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [activeChat, setActiveChat] = useState(null);  // Store the current active chat
  const [messages, setMessages] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = user?.token;

        const response = await axios.get('/api/chat/contacts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setContacts(response.data);

        // Automatically select the first contact if no active chat exists
        const firstContact = response.data[0]; 
        if (firstContact && !activeChat) {
          setActiveChat(firstContact); // Default to the first contact if no active chat
        }

      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoadingContacts(false);
      }
    };

    fetchContacts();

    socket.on('new-message', (message) => {
      if (activeChat && message.from === activeChat._id) {
        setMessages(prev => [...prev, message]);
      }
    });

    return () => {
      socket.off('new-message');
    };
  }, [activeChat]);

  useEffect(() => {
    const setupMessageListener = (callback) => {
      socket.on('receive-message', callback);
    };

    const listener = (message) => {
      if (activeChat && message.from === activeChat._id) {
        setMessages(prev => [...prev, message]);
      }
    };

    setupMessageListener(listener);

    return () => {
      socket.off('receive-message', listener);
    };
  }, [activeChat]);

  return (
    <ChatContext.Provider
      value={{
        contacts,
        activeChat,
        messages,
        loadingContacts,
        setActiveChat,
        setMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
