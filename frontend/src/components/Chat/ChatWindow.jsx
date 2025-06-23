// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux"; // <-- Add this import
// import { useChat } from "../../components/Chat/ChatContext";
// import axios from "axios";

// const ChatWindow = () => {
//   const { user } = useSelector((state) => state.auth); // Now this will work
//   const { activeChat, setActiveChat, messages, setMessages, socket } = useChat();
//   const [messageInput, setMessageInput] = useState("");
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const config = {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         };
//         const { data } = await axios.get(
//           `/api/chat/chatlist/${user._id}`,
//           config
//         );
//         setContacts(data.users);
//       } catch (error) {
//         console.error("Error fetching contacts:", error);
//       }
//     };

//     if (user?.token) {
//       fetchContacts();
//     }
//   }, [user]);

//   const handleSendMessage = () => {
//     if (messageInput.trim() && activeChat) {
//       const newMessage = {
//         fromUserId: user._id,
//         toUserId: activeChat._id,
//         message: messageInput,
//       };

//       sendMessage(newMessage);
//       setMessages([...messages, newMessage]);
//       setMessageInput("");

//       axios.post("/api/chat/messages", newMessage, {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       });
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg z-50">
//       {/* ... rest of your component ... */}
//     </div>
//   );
// };

// export default ChatWindow;






// import React, { useState, useEffect, useContext } from 'react';
// import { useChat } from './ChatContext';
// import { sendMessage, receiveMessage } from './ChatSocket';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const ChatWindow = () => {
//   const { user } = useSelector((state) => state.auth);
//   const { activeChat, setActiveChat, messages, setMessages, contacts } = useChat();
//   const [messageInput, setMessageInput] = useState('');
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (activeChat) {
//       const fetchMessages = async () => {
//         try {
//           const config = {
//             headers: {
//               Authorization: `Bearer ${user.token}`,
//             },
//           };
//           const { data } = await axios.post(
//             '/api/chat/messages',
//             {
//               userId: user._id,
//               toUserId: activeChat._id,
//             },
//             config
//           );
//           setMessages(data.messages);
//         } catch (error) {
//           console.error('Error fetching messages:', error);
//         }
//       };
//       fetchMessages();
//     }
//   }, [activeChat, user]);

//   useEffect(() => {
//     receiveMessage((newMessage) => {
//       if (activeChat && newMessage.fromUserId === activeChat._id) {
//         setMessages((prev) => [...prev, newMessage]);
//       }
//     });
//   }, [activeChat]);

//   const handleSendMessage = () => {
//     if (messageInput.trim() && activeChat) {
//       const newMessage = {
//         fromUserId: user._id,
//         toUserId: activeChat._id,
//         message: messageInput,
//       };

//       sendMessage(newMessage);
//       setMessages((prev) => [...prev, newMessage]);
//       setMessageInput('');

//       axios.post('/api/chat/messages', newMessage, {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       });
//     }
//   };

//   if (!isOpen) {
//     return (
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition-colors"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//         </svg>
//       </button>
//     );
//   }

//   return (
//     <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl z-50 flex flex-col border border-gray-200">
//       <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
//         <h3 className="font-semibold">
//           {activeChat ? `Chat with ${activeChat.fullName}` : 'CommunityFix Chat'}
//         </h3>
//         <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </button>
//       </div>

//       <div className="flex-1 p-4 overflow-y-auto" style={{ height: '300px' }}>
//         {messages.length > 0 ? (
//           messages.map((msg, idx) => (
//             <div
//               key={idx}
//               className={`mb-3 max-w-xs p-3 rounded-lg ${msg.fromUserId === user._id ? 'bg-blue-100 ml-auto' : 'bg-gray-100 mr-auto'}`}
//             >
//               <p className="text-sm">{msg.message}</p>
//               <p className="text-xs text-gray-500 mt-1">
//                 {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//               </p>
//             </div>
//           ))
//         ) : (
//           <div className="text-center text-gray-500 py-8">
//             {activeChat ? `Start chatting with ${activeChat.fullName}` : 'Select a contact to start chatting'}
//           </div>
//         )}
//       </div>

//       {activeChat && (
//         <div className="p-3 border-t">
//           <div className="flex">
//             <input
//               type="text"
//               value={messageInput}
//               onChange={(e) => setMessageInput(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//               className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
//               placeholder="Type a message..."
//             />
//             <button
//               onClick={handleSendMessage}
//               className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition-colors"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWindow;













// import React, { useState, useEffect } from 'react';
// import { useChat } from './ChatContext';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// const ChatWindow = () => {
//   const { user } = useSelector((state) => state.auth);
//   const { contacts, activeChat, setActiveChat, messages, setMessages } = useChat();
//   const [messageInput, setMessageInput] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const [showContacts, setShowContacts] = useState(false);

//   useEffect(() => {
//     if (activeChat) {
//       const fetchMessages = async () => {
//         try {
//           const config = {
//             headers: {
//               Authorization: `Bearer ${user.token}`,
//             },
//           };
//           const { data } = await axios.post(
//             '/api/chat/messages',
//             {
//               userId: user._id,
//               toUserId: activeChat._id,
//             },
//             config
//           );
//           setMessages(data.messages);
//         } catch (error) {
//           console.error('Error fetching messages:', error);
//         }
//       };
//       fetchMessages();
//     }
//   }, [activeChat, user]);

//   const handleSendMessage = () => {
//     if (messageInput.trim() && activeChat) {
//       const newMessage = {
//         fromUserId: user._id,
//         toUserId: activeChat._id,
//         message: messageInput,
//       };

//       // In a real implementation, you would send this via Socket.IO
//       setMessages((prev) => [...prev, newMessage]);
//       setMessageInput('');
//     }
//   };

//   if (!isOpen) {
//     return (
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition-colors"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//         </svg>
//       </button>
//     );
//   }

//   return (
//     <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl z-50 flex flex-col border border-gray-200">
//       <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
//         <h3 className="font-semibold">
//           {activeChat ? `Chat with ${activeChat.fullName}` : 'CommunityFix Chat'}
//         </h3>
//         <div className="flex space-x-2">
//           {contacts.length > 0 && (
//             <button 
//               onClick={() => setShowContacts(!showContacts)}
//               className="text-white hover:text-gray-200"
//               title="Contacts"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
//               </svg>
//             </button>
//           )}
//           <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {showContacts && (
//         <div className="absolute right-0 top-12 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-10">
//           <div className="p-2 max-h-60 overflow-y-auto">
//             <h4 className="font-medium px-2 py-1 text-sm text-gray-700">Select a contact</h4>
//             {contacts.map((contact) => (
//               <div
//                 key={contact._id}
//                 onClick={() => {
//                   setActiveChat(contact);
//                   setShowContacts(false);
//                 }}
//                 className={`p-2 hover:bg-blue-50 cursor-pointer flex items-center ${
//                   activeChat?._id === contact._id ? 'bg-blue-100' : ''
//                 }`}
//               >
//                 <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
//                   {contact.fullName.charAt(0)}
//                 </div>
//                 <div>
//                   <p className="font-medium text-sm">{contact.fullName}</p>
//                   <p className="text-xs text-gray-500 capitalize">{contact.accountType}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="flex-1 p-4 overflow-y-auto" style={{ height: '300px' }}>
//         {activeChat ? (
//           messages.length > 0 ? (
//             messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`mb-3 max-w-xs p-3 rounded-lg ${
//                   msg.fromUserId === user._id ? 'bg-blue-100 ml-auto' : 'bg-gray-100 mr-auto'
//                 }`}
//               >
//                 <p className="text-sm">{msg.message}</p>
//                 <p className="text-xs text-gray-500 mt-1">
//                   {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <div className="text-center text-gray-500 py-8">
//               No messages yet. Start the conversation!
//             </div>
//           )
//         ) : (
//           <div className="text-center text-gray-500 py-8">
//             <p>Select a contact to start chatting</p>
//             {contacts.length > 0 && (
//               <button
//                 onClick={() => setShowContacts(true)}
//                 className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//               >
//                 Choose Contact
//               </button>
//             )}
//           </div>
//         )}
//       </div>

//       {activeChat && (
//         <div className="p-3 border-t">
//           <div className="flex">
//             <input
//               type="text"
//               value={messageInput}
//               onChange={(e) => setMessageInput(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//               className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
//               placeholder="Type a message..."
//             />
//             <button
//               onClick={handleSendMessage}
//               className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition-colors"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWindow;

















// // frontend/src/components/Chat/ChatWindow.jsx
// import React, { useState, useEffect } from 'react';
// import { useChat } from './ChatContext';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// const ChatWindow = () => {
//   const { user } = useSelector((state) => state.auth);
//   const { contacts, activeChat, setActiveChat, messages, setMessages, loadingContacts } = useChat();
//   const [messageInput, setMessageInput] = useState('');
//   const [isOpen, setIsOpen] = useState(true);
//   const [showContacts, setShowContacts] = useState(false);

//   useEffect(() => {
//     if (activeChat) {
//       const fetchMessages = async () => {
//         try {
//           const { data } = await axios.get(`/api/chat/messages/${activeChat._id}`, {
//             headers: { Authorization: `Bearer ${user.token}` }
//           });
//           setMessages(data);
//         } catch (error) {
//           console.error('Error fetching messages:', error);
//         }
//       };
//       fetchMessages();
//     }
//   }, [activeChat, user.token]);

//   const handleSendMessage = async () => {
//     if (!messageInput.trim() || !activeChat) return;

//     const newMessage = {
//       from: user._id,
//       to: activeChat._id,
//       text: messageInput,
//       createdAt: new Date()
//     };

//     try {
//       await axios.post('/api/chat/messages', newMessage, {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });
//       setMessages([...messages, newMessage]);
//       setMessageInput('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   if (!isOpen) {
//     return (
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//         </svg>
//       </button>
//     );
//   }

//   return (
//     <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl z-50 flex flex-col border border-gray-200">
//       <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
//         <h3 className="font-semibold">
//           {activeChat ? `Chat with ${activeChat.fullName}` : 'CommunityFix Chat'}
//         </h3>
//         <div className="flex space-x-2">
//           <button 
//             onClick={() => setShowContacts(!showContacts)}
//             className="text-white hover:text-gray-200"
//             title="Contacts"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
//             </svg>
//           </button>
//           <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {showContacts && (
//         <div className="absolute right-0 top-12 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-10 max-h-60 overflow-y-auto">
//           <div className="p-2">
//             <h4 className="font-medium px-2 py-1 text-sm text-gray-700 border-b">Select a contact</h4>
//             {loadingContacts ? (
//               <div className="p-4 text-center">Loading contacts...</div>
//             ) : contacts.length > 0 ? (
//               contacts.map((contact) => (
//                 <div
//                   key={contact._id}
//                   onClick={() => {
//                     setActiveChat(contact);
//                     setShowContacts(false);
//                   }}
//                   className={`p-2 hover:bg-blue-50 cursor-pointer flex items-center ${
//                     activeChat?._id === contact._id ? 'bg-blue-100' : ''
//                   }`}
//                 >
//                   <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
//                     {contact.fullName.charAt(0)}
//                   </div>
//                   <div>
//                     <p className="font-medium text-sm">{contact.fullName}</p>
//                     <p className="text-xs text-gray-500 capitalize">{contact.accountType}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="p-4 text-center text-gray-500">No contacts available</div>
//             )}
//           </div>
//         </div>
//       )}

//       <div className="flex-1 p-4 overflow-y-auto" style={{ height: '300px' }}>
//         {activeChat ? (
//           messages.length > 0 ? (
//             messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`mb-3 max-w-xs p-3 rounded-lg ${
//                   msg.from === user._id ? 'bg-blue-100 ml-auto' : 'bg-gray-100 mr-auto'
//                 }`}
//               >
//                 <p className="text-sm">{msg.text}</p>
//                 <p className="text-xs text-gray-500 mt-1">
//                   {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <div className="text-center text-gray-500 py-8">
//               No messages yet. Start the conversation!
//             </div>
//           )
//         ) : (
//           <div className="text-center text-gray-500 py-8">
//             <p>Select a contact to start chatting</p>
//             <button
//               onClick={() => setShowContacts(true)}
//               className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//             >
//               {loadingContacts ? 'Loading...' : 'Choose Contact'}
//             </button>
//           </div>
//         )}
//       </div>

//       {activeChat && (
//         <div className="p-3 border-t">
//           <div className="flex">
//             <input
//               type="text"
//               value={messageInput}
//               onChange={(e) => setMessageInput(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//               className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
//               placeholder="Type a message..."
//             />
//             <button
//               onClick={handleSendMessage}
//               className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWindow;











import React, { useState, useEffect } from 'react';
import { useChat } from './ChatContext';
import { useSelector } from 'react-redux';
import axios from 'axios';

const ChatWindow = () => {
  const { user } = useSelector((state) => state.auth);
  const { contacts, activeChat, setActiveChat, messages, setMessages, loadingContacts } = useChat();
  const [messageInput, setMessageInput] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [showContacts, setShowContacts] = useState(false);

  // Auto-select admin on first load
  useEffect(() => {
    if (contacts.length > 0 && !activeChat) {
      const admin = contacts.find(c => c.accountType === 'admin');
      if (admin) setActiveChat(admin);
    }
  }, [contacts, activeChat, setActiveChat]);

  useEffect(() => {
    if (activeChat) {
      const fetchMessages = async () => {
        try {
          const { data } = await axios.get(`/api/chat/messages/${activeChat._id}`, {
            headers: { Authorization: `Bearer ${user.token}` }
          });
          setMessages(data);
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      };
      fetchMessages();
    }
  }, [activeChat, user.token]);

 const handleSendMessage = async () => {
  if (!messageInput.trim() || !activeChat) return;

  try {
    const { data: savedMessage } = await axios.post('/api/chat/messages', {
      to: activeChat._id,
      text: messageInput
    }, {
      headers: { Authorization: `Bearer ${user.token}` }
    });

    setMessages([...messages, savedMessage]);
    setMessageInput('');
  } catch (error) {
    console.error('Error sending message:', error);
  }
};


  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 hover:bg-blue-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col border border-gray-200" style={{ height: '500px' }}>
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="font-semibold text-lg">
          {activeChat ? `Chat with ${activeChat.fullName}` : 'CommunityFix Chat'}
        </h3>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowContacts(!showContacts)}
            className="text-white hover:text-gray-200 p-1"
            title="Contacts"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </button>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {showContacts && (
        <div className="absolute right-0 top-16 w-72 bg-white shadow-lg rounded-md border border-gray-200 z-10 max-h-80 overflow-y-auto">
          <div className="p-2">
            <h4 className="font-medium px-2 py-2 text-md text-gray-700 border-b">Select a contact</h4>
            {loadingContacts ? (
              <div className="p-4 text-center">Loading contacts...</div>
            ) : contacts.length > 0 ? (
              contacts.map((contact) => (
                <div
                  key={contact._id}
                  onClick={() => {
                    setActiveChat(contact);
                    setShowContacts(false);
                  }}
                  className={`p-3 hover:bg-blue-50 cursor-pointer flex items-center ${activeChat?._id === contact._id ? 'bg-blue-100' : ''
                    }`}
                >
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 text-lg font-medium">
                    {contact.fullName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-md">{contact.fullName}</p>
                    <p className="text-sm text-gray-500 capitalize">{contact.accountType}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">No contacts available</div>
            )}
          </div>
        </div>
      )}

      <div className="flex-1 p-4 overflow-y-auto" style={{ height: '350px' }}>
        {activeChat ? (
          messages.length > 0 ? (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-4 max-w-xs p-4 rounded-lg ${msg.from === user._id ? 'bg-blue-100 ml-auto' : 'bg-gray-100 mr-auto'
                  }`}
              >
                <p className="text-md">{msg.text}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-lg">No messages yet</p>
              <p className="text-sm">Start the conversation with {activeChat.fullName}</p>
            </div>
          )
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-lg mb-3">Select a contact to start chatting</p>
            <button
              onClick={() => setShowContacts(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 text-md"
            >
              {loadingContacts ? 'Loading...' : 'Choose Contact'}
            </button>
          </div>
        )}
      </div>

      {activeChat && (
        <div className="p-4 border-t">
          <div className="flex">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  console.log("Sending:", messageInput, "to", activeChat);

                  await handleSendMessage();
                }
              }}
              className="flex-1 p-3 border rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 text-md"
              placeholder="Type your message here..."
            />

            <button
              onClick={handleSendMessage}
              disabled={!messageInput.trim() || !activeChat}
              className={`px-6 rounded-r text-md ${!messageInput.trim() || !activeChat
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
            >
              Send
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;