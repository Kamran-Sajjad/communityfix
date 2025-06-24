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

//   // Fetch messages for the selected active chat
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

//     try {
//       const { data: savedMessage } = await axios.post('/api/chat/messages', {
//         to: activeChat._id,
//         text: messageInput
//       }, {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });

//       setMessages([...messages, savedMessage]);
//       setMessageInput('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   const handleSelectContact = (contact) => {
//     setActiveChat(contact); // Update activeChat to the selected contact
//     setShowContacts(false); // Close the contact list after selection
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
//     <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl z-50 flex flex-col border border-gray-200" style={{ height: '450px' }}>
//       <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
//         <h3 className="font-semibold text-md">
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
//         <div className="absolute right-0 top-11 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-10 max-h-72 overflow-y-auto">
//           <div className="p-2">
//             <h4 className="font-medium px-2 py-1 text-sm text-gray-700 border-b">Select a contact</h4>
//             {loadingContacts ? (
//               <div className="p-3 text-center text-sm">Loading contacts...</div>
//             ) : contacts.length > 0 ? (
//               contacts.map((contact) => (
//                 <div
//                   key={contact._id}
//                   onClick={() => handleSelectContact(contact)}  // Select the clicked contact as the active chat
//                   className={`p-2 hover:bg-blue-50 cursor-pointer flex items-center ${activeChat?._id === contact._id ? 'bg-blue-100' : ''}`}
//                 >
//                   <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 text-md font-medium">
//                     {contact.fullName.charAt(0)}
//                   </div>
//                   <div>
//                     <p className="font-medium text-sm">{contact.fullName}</p>
//                     <p className="text-xs text-gray-500 capitalize">{contact.accountType}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="p-3 text-center text-sm text-gray-500">No contacts available</div>
//             )}
//           </div>
//         </div>
//       )}

//       <div className="flex-1 p-3 overflow-y-auto" style={{ height: '300px' }}>
//         {activeChat ? (
//           messages.length > 0 ? (
//             messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`mb-2 max-w-[80%] p-2 rounded-lg ${
//                   msg.fromUserId === user._id 
//                     ? 'bg-blue-100 ml-auto'  // Your messages (blue)
//                     : 'bg-gray-200 mr-auto'   // Receiver messages (grey)
//                 }`}
//               >
//                 <p className="text-sm">{msg.text}</p>
//                 <p className="text-xs text-gray-500 mt-1">
//                   {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <div className="flex flex-col items-center justify-center h-full text-gray-500">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//               </svg>
//               <p className="text-sm">No messages yet</p>
//               <p className="text-xs">Start the conversation with {activeChat.fullName}</p>
//             </div>
//           )
//         ) : (
//           <div className="flex flex-col items-center justify-center h-full text-gray-500">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//             <p className="text-sm mb-2">Select a contact to start chatting</p>
//             <button
//               onClick={() => setShowContacts(true)}
//               className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 text-sm"
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
//               className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
//               placeholder="Type your message..."
//             />
//             <button
//               onClick={handleSendMessage}
//               className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 text-sm"
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
//   const { contacts, activeChat, setActiveChat, messages, setMessages, loadingContacts, searchQuery, handleSearchChange, filteredContacts } = useChat();
//   const [messageInput, setMessageInput] = useState('');
//   const [isOpen, setIsOpen] = useState(true);
//   const [showContacts, setShowContacts] = useState(false);

//   // Fetch messages for the selected active chat
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

//     try {
//       const { data: savedMessage } = await axios.post('/api/chat/messages', {
//         to: activeChat._id,
//         text: messageInput
//       }, {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });

//       setMessages([...messages, savedMessage]);
//       setMessageInput('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   const handleSelectContact = (contact) => {
//     setActiveChat(contact); // Update activeChat to the selected contact
//     setShowContacts(false); // Close the contact list after selection
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
//     <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl z-50 flex flex-col border border-gray-200" style={{ height: '450px' }}>
//       <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
//         <h3 className="font-semibold text-md">
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
//         <div className="absolute right-0 top-11 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-10 max-h-72 overflow-y-auto">
//           <div className="p-2">
//             <input
//               type="text"
//               placeholder="Search contacts..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="p-2 mb-2 w-full border rounded-lg"
//             />
//             {loadingContacts ? (
//               <div className="p-3 text-center text-sm">Loading contacts...</div>
//             ) : filteredContacts.length > 0 ? (
//               filteredContacts.map((contact) => (
//                 <div
//                   key={contact._id}
//                   onClick={() => handleSelectContact(contact)}  // Select the clicked contact as the active chat
//                   className={`p-2 hover:bg-blue-50 cursor-pointer flex items-center ${activeChat?._id === contact._id ? 'bg-blue-100' : ''}`}
//                 >
//                   <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 text-md font-medium">
//                     {contact.fullName.charAt(0)}
//                   </div>
//                   <div>
//                     <p className="font-medium text-sm">{contact.fullName}</p>
//                     <p className="text-xs text-gray-500 capitalize">{contact.accountType}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="p-3 text-center text-sm text-gray-500">No contacts available</div>
//             )}
//           </div>
//         </div>
//       )}

//       <div className="flex-1 p-3 overflow-y-auto" style={{ height: '300px' }}>
//         {activeChat ? (
//           messages.length > 0 ? (
//             messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`mb-2 max-w-[80%] p-2 rounded-lg ${
//                   msg.fromUserId === user._id 
//                     ? 'bg-blue-100 ml-auto'  // Your messages (blue)
//                     : 'bg-gray-200 mr-auto'   // Receiver messages (grey)
//                 }`}
//               >
//                 <p className="text-sm">{msg.text}</p>
//                 <p className="text-xs text-gray-500 mt-1">
//                   {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <div className="flex flex-col items-center justify-center h-full text-gray-500">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//               </svg>
//               <p className="text-sm">No messages yet</p>
//               <p className="text-xs">Start the conversation with {activeChat.fullName}</p>
//             </div>
//           )
//         ) : (
//           <div className="flex flex-col items-center justify-center h-full text-gray-500">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//             <p className="text-sm mb-2">Select a contact to start chatting</p>
//             <button
//               onClick={() => setShowContacts(true)}
//               className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 text-sm"
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
//               className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
//               placeholder="Type your message..."
//             />
//             <button
//               onClick={handleSendMessage}
//               className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 text-sm"
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
  const { contacts, activeChat, setActiveChat, messages, setMessages, loadingContacts, searchQuery, handleSearchChange, filteredContacts } = useChat();
  const [messageInput, setMessageInput] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [showContacts, setShowContacts] = useState(false);

  // Fetch messages for the selected active chat
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

  const handleSelectContact = (contact) => {
    setActiveChat(contact); // Update activeChat to the selected contact
    setShowContacts(false); // Close the contact list after selection
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl z-50 flex flex-col border border-gray-200" style={{ height: '450px' }}>
      <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
        <h3 className="font-semibold text-md">
          {activeChat ? `Chat with ${activeChat.fullName}` : 'CommunityFix Chat'}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowContacts(!showContacts)}
            className="text-white hover:text-gray-200"
            title="Contacts"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </button>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {showContacts && (
        <div className="absolute right-0 top-11 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-10 max-h-72 overflow-y-auto">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 mb-2 w-full border rounded-lg"
            />
            {loadingContacts ? (
              <div className="p-3 text-center text-sm">Loading contacts...</div>
            ) : filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <div
                  key={contact._id}
                  onClick={() => handleSelectContact(contact)}  // Select the clicked contact as the active chat
                  className={`p-2 hover:bg-blue-50 cursor-pointer flex items-center ${activeChat?._id === contact._id ? 'bg-blue-100' : ''}`}
                >
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 text-md font-medium">
                    {contact.fullName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{contact.fullName}</p>
                    <p className="text-xs text-gray-500 capitalize">{contact.accountType}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-3 text-center text-sm text-gray-500">No contacts available</div>
            )}
          </div>
        </div>
      )}

      <div className="flex-1 p-3 overflow-y-auto" style={{ height: '300px' }}>
        {activeChat ? (
          messages.length > 0 ? (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 max-w-[80%] p-2 rounded-lg ${
                  msg.fromUserId === user._id 
                    ? 'bg-blue-100 ml-auto'  // Your messages (blue)
                    : 'bg-gray-200 mr-auto'   // Receiver messages (grey)
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-sm">No messages yet</p>
              <p className="text-xs">Start the conversation with {activeChat.fullName}</p>
            </div>
          )
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-sm mb-2">Select a contact to start chatting</p>
            <button
              onClick={() => setShowContacts(true)}
              className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 text-sm"
            >
              {loadingContacts ? 'Loading...' : 'Choose Contact'}
            </button>
          </div>
        )}
      </div>

      {activeChat && (
        <div className="p-3 border-t">
          <div className="flex">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 text-sm"
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
