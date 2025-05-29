// import React, { useState, useEffect, useRef } from "react";
// import { Send, ArrowLeft, User, X } from "lucide-react";
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// const SimpleChat = () => {
//   const { user } = useSelector((state) => state.auth) || { user: null };
//   const [contacts, setContacts] = useState([]);
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   // Fetch contacts on component mount
//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   // Fetch messages when a contact is selected
//   useEffect(() => {
//     if (selectedContact) {
//       fetchMessages(selectedContact.contactId, selectedContact.contactModel);
//     }
//   }, [selectedContact]);

//   // Scroll to bottom of messages
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Fetch contacts from API
//   const fetchContacts = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       const response = await axios.get('/api/serviceteam/messages/contacts', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setContacts(response.data.data);
//     } catch (error) {
//       console.error('Error fetching contacts:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch messages for a specific contact
//   const fetchMessages = async (contactId, contactModel) => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       const response = await axios.get(`/api/serviceteam/messages/${contactId}/${contactModel}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setMessages(response.data.data);
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Send a message
//   const sendMessage = async () => {
//     if (!newMessage.trim() || !selectedContact) return;

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post('/api/serviceteam/messages', {
//         receiverId: selectedContact.contactId,
//         receiverModel: selectedContact.contactModel,
//         content: newMessage
//       }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       // Add the new message to the messages array
//       setMessages([...messages, response.data.data]);
//       setNewMessage("");
      
//       // Update the last message in contacts
//       updateContactLastMessage(selectedContact.contactId, newMessage);
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   // Delete a message
//   const deleteMessage = async (messageId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`/api/serviceteam/messages/${messageId}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       // Update messages to mark as deleted
//       setMessages(messages.map(msg => 
//         msg._id === messageId ? { ...msg, isDeleted: true } : msg
//       ));
//     } catch (error) {
//       console.error('Error deleting message:', error);
//     }
//   };

//   // Update the last message in contacts
//   const updateContactLastMessage = (contactId, lastMessage) => {
//     setContacts(contacts.map(contact => 
//       contact.contactId === contactId 
//         ? { ...contact, lastMessage, lastInteraction: new Date() } 
//         : contact
//     ));
//   };

//   // Format timestamp
//   const formatTime = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   return (
//     <div className="flex flex-col h-full bg-white rounded-lg shadow-sm">
//       {/* Header */}
//       {!selectedContact ? (
//         <div className="border-b border-gray-200 p-4">
//           <h1 className="text-xl font-semibold text-black">Messages</h1>
//         </div>
//       ) : (
//         <div className="border-b border-gray-200 p-3 flex items-center justify-between">
//           <button 
//             onClick={() => setSelectedContact(null)} 
//             className="text-black"
//           >
//             <ArrowLeft className="w-5 h-5" />
//           </button>
//           <div className="text-center">
//             <p className="font-medium text-black">{selectedContact.name}</p>
//           </div>
//           <div className="w-5"></div> {/* Spacer for alignment */}
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="flex-1 overflow-hidden">
//         {!selectedContact ? (
//           <div className="h-full overflow-y-auto">
//             {loading ? (
//               <div className="flex items-center justify-center h-full">
//                 <p>Loading contacts...</p>
//               </div>
//             ) : contacts.length > 0 ? (
//               contacts.map((contact) => (
//                 <div 
//                   key={contact._id} 
//                   className="p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
//                   onClick={() => setSelectedContact(contact)}
//                 >
//                   <div className="flex items-center">
//                     <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
//                       <User className="w-6 h-6 text-gray-500" />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex justify-between">
//                         <p className="font-medium text-black">{contact.name}</p>
//                         <span className="text-xs text-gray-500">
//                           {new Date(contact.lastInteraction).toLocaleDateString()}
//                         </span>
//                       </div>
//                       <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
//                     </div>
//                     {contact.unreadCount > 0 && (
//                       <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
//                         {contact.unreadCount}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="flex flex-col items-center justify-center h-full p-4 text-center">
//                 <div className="bg-gray-100 p-3 rounded-full mb-3">
//                   <User className="w-6 h-6 text-gray-500" />
//                 </div>
//                 <h3 className="font-medium text-black mb-1">No contacts yet</h3>
//                 <p className="text-gray-500 text-sm">
//                   Messages from users will appear here
//                 </p>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="h-full flex flex-col">
//             {/* Chat messages */}
//             <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
//               {loading ? (
//                 <div className="flex items-center justify-center h-full">
//                   <p>Loading messages...</p>
//                 </div>
//               ) : messages.length > 0 ? (
//                 <>
//                   {messages.map((msg) => {
//                     const isServiceTeam = msg.senderModel === 'ServiceTeam' && 
//                                          msg.sender === (user?._id || '');
                    
//                     return (
//                       <div 
//                         key={msg._id} 
//                         className={`flex mb-3 ${isServiceTeam ? 'justify-end' : 'justify-start'}`}
//                       >
//                         <div className="relative max-w-xs">
//                           {!msg.isDeleted ? (
//                             <div 
//                               className={`rounded-lg p-3 ${
//                                 isServiceTeam 
//                                   ? 'bg-blue-100' 
//                                   : 'bg-gray-200'
//                               }`}
//                             >
//                               <p className="text-black">{msg.content}</p>
//                               <div className="flex items-center justify-end mt-1 space-x-2">
//                                 <p className="text-xs text-gray-500">{formatTime(msg.time)}</p>
//                                 {isServiceTeam && (
//                                   <button 
//                                     onClick={() => deleteMessage(msg._id)}
//                                     className="text-gray-500 hover:text-red-500"
//                                   >
//                                     <X className="w-3 h-3" />
//                                   </button>
//                                 )}
//                               </div>
//                             </div>
//                           ) : (
//                             <div className="max-w-xs rounded-lg p-3 bg-gray-100 italic">
//                               <p className="text-gray-400 text-sm">Message deleted</p>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     );
//                   })}
//                   <div ref={messagesEndRef} />
//                 </>
//               ) : (
//                 <div className="flex flex-col items-center justify-center h-full text-center">
//                   <p className="text-gray-500">No messages yet</p>
//                   <p className="text-gray-500 text-sm">Start the conversation!</p>
//                 </div>
//               )}
//             </div>

//             {/* Message input */}
//             <div className="bg-white border-t border-gray-200 p-3">
//               <div className="flex items-center">
//                 <input
//                   type="text"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//                   placeholder="Type a message..."
//                   className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
//                 />
//                 <button 
//                   onClick={sendMessage}
//                   className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none"
//                   disabled={!newMessage.trim()}
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SimpleChat;


import React, { useState, useEffect, useRef } from "react";
import { Send, ArrowLeft, User, X } from "lucide-react";
import { useSelector } from 'react-redux';
import axios from 'axios';

const SimpleChat = () => {
  const { user } = useSelector((state) => state.auth) || { user: null };
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    if (selectedContact) {
      fetchMessages(selectedContact.contactId, selectedContact.contactModel);
    }
  }, [selectedContact]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/serviceteam/messages/contacts', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setContacts(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setContacts([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (contactId, contactModel) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await axios.get(`/api/serviceteam/messages/${contactId}/${contactModel}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const messagesData = Array.isArray(response.data.data) ? response.data.data : [];
      setMessages(messagesData);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedContact) return;

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/serviceteam/messages', {
        receiverId: selectedContact.contactId,
        receiverModel: selectedContact.contactModel,
        content: newMessage
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setMessages(prev => [...prev, response.data.data]);
      setNewMessage("");
      updateContactLastMessage(selectedContact.contactId, newMessage);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const deleteMessage = async (messageId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/serviceteam/messages/${messageId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setMessages(prev =>
        prev.map(msg =>
          msg._id === messageId ? { ...msg, isDeleted: true } : msg
        )
      );
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const updateContactLastMessage = (contactId, lastMessage) => {
    setContacts(prev =>
      prev.map(contact =>
        contact.contactId === contactId
          ? { ...contact, lastMessage, lastInteraction: new Date() }
          : contact
      )
    );
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm">
      {/* Header */}
      {!selectedContact ? (
        <div className="border-b border-gray-200 p-4">
          <h1 className="text-xl font-semibold text-black">Messages</h1>
        </div>
      ) : (
        <div className="border-b border-gray-200 p-3 flex items-center justify-between">
          <button onClick={() => setSelectedContact(null)} className="text-black">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="text-center">
            <p className="font-medium text-black">{selectedContact.name}</p>
          </div>
          <div className="w-5"></div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {!selectedContact ? (
          <div className="h-full overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <p>Loading contacts...</p>
              </div>
            ) : Array.isArray(contacts) && contacts.length > 0 ? (
              contacts.map((contact) => (
                <div
                  key={contact._id}
                  className="p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedContact(contact)}
                >
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <User className="w-6 h-6 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium text-black">{contact.name}</p>
                        <span className="text-xs text-gray-500">
                          {new Date(contact.lastInteraction).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                    </div>
                    {contact.unreadCount > 0 && (
                      <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                        {contact.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                <div className="bg-gray-100 p-3 rounded-full mb-3">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="font-medium text-black mb-1">No contacts yet</h3>
                <p className="text-gray-500 text-sm">
                  Messages from users will appear here
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="h-full flex flex-col">
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <p>Loading messages...</p>
                </div>
              ) : Array.isArray(messages) && messages.length > 0 ? (
                <>
                  {messages.map((msg) => {
                    const isServiceTeam = msg.senderModel === 'ServiceTeam' && msg.sender === (user?._id || '');
                    return (
                      <div
                        key={msg._id}
                        className={`flex mb-3 ${isServiceTeam ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className="relative max-w-xs">
                          {!msg.isDeleted ? (
                            <div className={`rounded-lg p-3 ${isServiceTeam ? 'bg-blue-100' : 'bg-gray-200'}`}>
                              <p className="text-black">{msg.content}</p>
                              <div className="flex items-center justify-end mt-1 space-x-2">
                                <p className="text-xs text-gray-500">{formatTime(msg.time)}</p>
                                {isServiceTeam && (
                                  <button
                                    onClick={() => deleteMessage(msg._id)}
                                    className="text-gray-500 hover:text-red-500"
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                )}
                              </div>
                            </div>
                          ) : (
                            <div className="max-w-xs rounded-lg p-3 bg-gray-100 italic">
                              <p className="text-gray-400 text-sm">Message deleted</p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-gray-500">No messages yet</p>
                  <p className="text-gray-500 text-sm">Start the conversation!</p>
                </div>
              )}
            </div>

            {/* Message input */}
            <div className="bg-white border-t border-gray-200 p-3">
              <div className="flex items-center">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                />
                <button
                  onClick={sendMessage}
                  className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none"
                  disabled={!newMessage.trim()}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleChat;
