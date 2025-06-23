// import { createContext, useContext, useState, useEffect } from "react";

// const ChatContext = createContext();

// export const ChatProvider = ({ children }) => {
//   const [contacts, setContacts] = useState([]);
//   const [activeChat, setActiveChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [serviceTeamMembers, setServiceTeamMembers] = useState([]);
//   const [socket, setSocket] = useState(null);

//   // Fetch contacts when activeChat changes
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await fetch('/api/chat/chatlist');
//         const data = await response.json();
//         if (data.success) {
//           setContacts(data.users);
//           // Set admin as default contact
//           const admin = data.users.find(user => user.accountType === 'admin');
//           if (admin) setActiveChat(admin);
//         }
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//       }
//     };

//     fetchContacts();
//   }, []);

//   return (
//     <ChatContext.Provider
//       value={{
//         contacts,
//         activeChat,
//         messages,
//         serviceTeamMembers,
//         socket,
//         setActiveChat,
//         setMessages,
//         setContacts,
//         setServiceTeamMembers,
//         setSocket,
//       }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const useChat = () => useContext(ChatContext);






// // frontend/src/components/Chat/ChatContext.jsx
// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const ChatContext = createContext();

// export const ChatProvider = ({ children }) => {
//   const [contacts, setContacts] = useState([]);
//   const [activeChat, setActiveChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [loadingContacts, setLoadingContacts] = useState(true);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await axios.get('/api/chat/contacts');
//         setContacts(response.data);

//         // Auto-select admin if available
//         const admin = response.data.find(user => user.accountType === 'admin');
//         if (admin) setActiveChat(admin);

//       } catch (error) {
//         console.error("Error fetching contacts:", error);
//       } finally {
//         setLoadingContacts(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   return (
//     <ChatContext.Provider
//       value={{
//         contacts,
//         activeChat,
//         messages,
//         loadingContacts,
//         setActiveChat,
//         setMessages,
//       }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const useChat = () => useContext(ChatContext);


















// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";
// import socket from './ChatSocket';

// const ChatContext = createContext();

// export const ChatProvider = ({ children }) => {
//   const [contacts, setContacts] = useState([]);
//   const [activeChat, setActiveChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [loadingContacts, setLoadingContacts] = useState(true);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await axios.get('/api/chat/contacts');
//         setContacts(response.data);

//         // Auto-select admin if available
//         const admin = response.data.find(user => user.accountType === 'admin');
//         if (admin) setActiveChat(admin);

//       } catch (error) {
//         console.error("Error fetching contacts:", error);
//       } finally {
//         setLoadingContacts(false);
//       }
//     };

//     useEffect(() => {
//       setupMessageListener((message) => {
//         if (activeChat && message.from === activeChat._id) {
//           setMessages(prev => [...prev, message]);
//         }
//       });

//       return () => {
//         socket.off('receive-message');
//       };
//     }, [activeChat]);

//     fetchContacts();

//     // Setup socket listeners
//     socket.on('new-message', (message) => {
//       if (activeChat && message.from === activeChat._id) {
//         setMessages(prev => [...prev, message]);
//       }
//     });

//     return () => {
//       socket.off('new-message');
//     };
//   }, [activeChat]);

//   return (
//     <ChatContext.Provider
//       value={{
//         contacts,
//         activeChat,
//         messages,
//         loadingContacts,
//         setActiveChat,
//         setMessages,
//       }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const useChat = () => useContext(ChatContext);

















import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import socket from './ChatSocket';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
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

        // Auto-select admin if available
        const admin = response.data.find(user => user.accountType === 'admin');
        if (admin) setActiveChat(admin);

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
