// import { ArrowLeft, Send, Trash2, MoreVertical } from "lucide-react";
// import { useState, useEffect, useRef } from "react";

// const ChatApp = () => {
//   // State management
//   const [contacts, setContacts] = useState([
//     { 
//       id: 1, 
//       name: "Kamran Choudhry", 
//       lastMessage: "Bhai kam karo tak", 
//       time: "10:30 AM", 
//       unread: 2, 
//       avatar: "KC",
//       online: true,
//       messages: [
//         { id: 1, text: "Hey, how are you?", sent: true, time: "10:25 AM" },
//         { id: 2, text: "I'm good, thanks!", sent: false, time: "10:26 AM" },
//         { id: 3, text: "Bhai kam karo tak", sent: false, time: "10:30 AM" }
//       ] 
//     },
//     { 
//       id: 2, 
//       name: "Nizam Khan", 
//       lastMessage: "Thank you.", 
//       time: "Yesterday", 
//       unread: 0,
//       avatar: "NK",
//       online: false,
//       messages: [
//         { id: 1, text: "Did you get the files?", sent: true, time: "Yesterday" },
//         { id: 2, text: "Yes, thank you.", sent: false, time: "Yesterday" }
//       ] 
//     },
//     { 
//       id: 3, 
//       name: "Usman Admin", 
//       lastMessage: "Aj kal bare reports arhy.", 
//       time: "Monday", 
//       unread: 5,
//       avatar: "UA",
//       online: true,
//       messages: [
//         { id: 1, text: "We need to discuss the reports", sent: false, time: "Monday" },
//         { id: 2, text: "Aj kal bare reports arhy.", sent: false, time: "Monday" }
//       ] 
//     },
//   ]);

//   const [activeContact, setActiveContact] = useState(null);
//   const [newMessage, setNewMessage] = useState("");
//   const [view, setView] = useState("list"); // 'list' or 'chat'
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [contactToDelete, setContactToDelete] = useState(null);
//   const messagesEndRef = useRef(null);

//   // Auto-scroll to bottom of messages
//   useEffect(() => {
//     scrollToBottom();
//   }, [activeContact?.messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Contact actions
//   const openChat = (contact) => {
//     // Mark messages as read
//     const updatedContacts = contacts.map(c => 
//       c.id === contact.id ? { ...c, unread: 0 } : c
//     );
//     setContacts(updatedContacts);
//     setActiveContact(contact);
//     setView("chat");
//   };

//   const sendMessage = () => {
//     if (!newMessage.trim() || !activeContact) return;

//     const newMsg = {
//       id: Date.now(),
//       text: newMessage,
//       sent: true,
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };

//     const updatedContacts = contacts.map(contact => {
//       if (contact.id === activeContact.id) {
//         return {
//           ...contact,
//           lastMessage: newMessage,
//           time: "Just now",
//           messages: [...contact.messages, newMsg]
//         };
//       }
//       return contact;
//     });

//     setContacts(updatedContacts);
//     setActiveContact(prev => ({
//       ...prev,
//       lastMessage: newMessage,
//       time: "Just now",
//       messages: [...prev.messages, newMsg]
//     }));
//     setNewMessage("");
    
//     // Simulate reply after 1-3 seconds
//     setTimeout(() => {
//       const replies = [
//         "Okay",
//         "Thanks!",
//         "I'll get back to you",
//         "Can we talk later?",
//         "Got it!",
//         "👍"
//       ];
//       const replyMsg = {
//         id: Date.now(),
//         text: replies[Math.floor(Math.random() * replies.length)],
//         sent: false,
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };

//       setContacts(prevContacts => 
//         prevContacts.map(contact => {
//           if (contact.id === activeContact.id) {
//             return {
//               ...contact,
//               lastMessage: replyMsg.text,
//               time: "Just now",
//               messages: [...contact.messages, replyMsg]
//             };
//           }
//           return contact;
//         })
//       );

//       // If we're currently viewing this chat, update the active contact
//       if (activeContact && view === "chat") {
//         setActiveContact(prev => ({
//           ...prev,
//           lastMessage: replyMsg.text,
//           time: "Just now",
//           messages: [...prev.messages, replyMsg]
//         }));
//       }
//     }, 1000 + Math.random() * 2000);
//   };

//   const confirmDelete = (contact) => {
//     setContactToDelete(contact);
//     setShowDeleteModal(true);
//   };

//   const deleteChat = () => {
//     if (!contactToDelete) return;
    
//     setContacts(contacts.filter(contact => contact.id !== contactToDelete.id));
//     if (activeContact?.id === contactToDelete.id) {
//       setActiveContact(null);
//       setView("list");
//     }
//     setShowDeleteModal(false);
//     setContactToDelete(null);
//   };

//   return (
//     <div className="flex flex-col h-screen bg-white">
//       {/* Header */}
//       {view === "list" ? (
//         <div className="border-b border-gray-200 p-4">
//           <h1 className="text-xl font-semibold text-black">Messages</h1>
//         </div>
//       ) : (
//         <div className="border-b border-gray-200 p-3 flex items-center">
//           <button 
//             onClick={() => setView("list")} 
//             className="mr-2 p-1 text-black"
//           >
//             <ArrowLeft className="w-5 h-5" />
//           </button>
//           <div className="flex items-center flex-1">
//             <div className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center font-medium">
//               {activeContact?.avatar}
//             </div>
//             <div className="ml-3">
//               <p className="font-medium text-black">{activeContact?.name}</p>
//               <p className="text-xs text-gray-500">
//                 {activeContact?.online ? "Online" : "Offline"}
//               </p>
//             </div>
//           </div>
//           <button 
//             onClick={() => confirmDelete(activeContact)}
//             className="text-gray-600 hover:text-gray-900"
//           >
//             <Trash2 className="w-5 h-5" />
//           </button>
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="flex-1 overflow-hidden">
//         {view === "list" ? (
//           <div className="h-full overflow-y-auto">
//             {contacts.map(contact => (
//               <div 
//                 key={contact.id} 
//                 className="p-4 border-b border-gray-100 flex items-center cursor-pointer hover:bg-gray-50"
//                 onClick={() => openChat(contact)}
//               >
//                 <div className="relative">
//                   <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center font-medium">
//                     {contact.avatar}
//                   </div>
//                   {contact.online && (
//                     <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
//                   )}
//                 </div>
//                 <div className="ml-3 flex-1 min-w-0">
//                   <div className="flex justify-between items-center">
//                     <p className="font-medium text-black truncate">{contact.name}</p>
//                     <p className="text-xs text-gray-500 whitespace-nowrap ml-2">{contact.time}</p>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
//                     {contact.unread > 0 && (
//                       <span className="bg-gray-200 text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                         {contact.unread}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="h-full flex flex-col">
//             {/* Chat messages */}
//             <div 
//               className="flex-1 overflow-y-auto p-4 bg-white"
//             >
//               {activeContact?.messages.map(msg => (
//                 <div 
//                   key={msg.id} 
//                   className={`flex mb-3 ${msg.sent ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div 
//                     className={`max-w-xs rounded-lg p-3 ${msg.sent ? 'bg-gray-100' : 'bg-gray-200'} shadow-sm`}
//                   >
//                     <p className="text-black">{msg.text}</p>
//                     <p className="text-xs text-gray-500 text-right mt-1">{msg.time}</p>
//                   </div>
//                 </div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Message input */}
//             <div className="bg-white p-3 border-t border-gray-200">
//               <div className="flex items-center">
//                 <input
//                   type="text"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//                   placeholder="Type a message"
//                   className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-500 text-black"
//                 />
//                 <button 
//                   onClick={sendMessage}
//                   className="ml-2 bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 focus:outline-none"
//                   disabled={!newMessage.trim()}
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Delete confirmation modal */}
//       {showDeleteModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
//           <div className="bg-white rounded-lg p-4 w-80">
//             <h3 className="font-medium text-lg mb-2 text-black">Delete chat?</h3>
//             <p className="text-gray-600 mb-4">All messages with {contactToDelete?.name} will be permanently deleted.</p>
//             <div className="flex justify-end space-x-2">
//               <button 
//                 className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
//                 onClick={() => setShowDeleteModal(false)}
//               >
//                 Cancel
//               </button>
//               <button 
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                 onClick={deleteChat}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatApp;




import { ArrowLeft, Send, X, Check, User, MessageSquare } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ServiceChatApp = () => {
  // Sample data for service requests
  const [serviceRequests, setServiceRequests] = useState([
    {
      id: 1,
      service: "Car Wash",
      customer: "Ali Khan",
      status: "accepted", // 'pending', 'accepted', 'completed'
      provider: "Usman Car Care",
      price: "Rs. 1500",
      chat: [
        { 
          id: 1, 
          sender: "customer", 
          text: "I need my car washed today", 
          time: "10:00 AM",
          deleted: false
        },
        { 
          id: 2, 
          sender: "provider", 
          text: "I can do it for Rs. 1500", 
          time: "10:05 AM",
          deleted: false
        },
        { 
          id: 3, 
          sender: "customer", 
          text: "Okay, please come at 3 PM", 
          time: "10:10 AM",
          deleted: false
        }
      ]
    },
    {
      id: 2,
      service: "AC Repair",
      customer: "Sara Ahmed",
      status: "pending",
      provider: "",
      price: "",
      chat: []
    }
  ]);

  const [activeRequest, setActiveRequest] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [showDeleteOption, setShowDeleteOption] = useState(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [activeRequest?.chat]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Accept service request
  const acceptRequest = (requestId) => {
    setServiceRequests(prev => prev.map(req => 
      req.id === requestId 
        ? { ...req, status: "accepted", provider: "Your Service Team" } 
        : req
    ));
  };

  // Send message
  const sendMessage = () => {
    if (!newMessage.trim() || !activeRequest) return;

    const newMsg = {
      id: Date.now(),
      sender: "provider", // or "customer" in real app
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      deleted: false
    };

    setServiceRequests(prev => 
      prev.map(req => 
        req.id === activeRequest.id 
          ? { ...req, chat: [...req.chat, newMsg] } 
          : req
      )
    );

    setActiveRequest(prev => ({
      ...prev,
      chat: [...prev.chat, newMsg]
    }));
    setNewMessage("");
  };

  // Delete specific message
  const deleteMessage = (messageId) => {
    setServiceRequests(prev => 
      prev.map(req => 
        req.id === activeRequest.id 
          ? { 
              ...req, 
              chat: req.chat.map(msg => 
                msg.id === messageId ? { ...msg, deleted: true } : msg
              ) 
            } 
          : req
      )
    );

    setActiveRequest(prev => ({
      ...prev,
      chat: prev.chat.map(msg => 
        msg.id === messageId ? { ...msg, deleted: true } : msg
      )
    }));
    setShowDeleteOption(null);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      {!activeRequest ? (
        <div className="border-b border-gray-200 p-4">
          <h1 className="text-xl font-semibold text-black">Service Requests</h1>
        </div>
      ) : (
        <div className="border-b border-gray-200 p-3 flex items-center justify-between">
          <button 
            onClick={() => setActiveRequest(null)} 
            className="text-black"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="text-center">
            <p className="font-medium text-black">{activeRequest.service}</p>
            <p className="text-xs text-gray-500">
              {activeRequest.status === "accepted" 
                ? `Connected with ${activeRequest.customer}`
                : "Waiting for provider"}
            </p>
          </div>
          <div className="w-5"></div> {/* Spacer for alignment */}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {!activeRequest ? (
          <div className="h-full overflow-y-auto">
            {serviceRequests.map(request => (
              <div 
                key={request.id} 
                className="p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
                onClick={() => setActiveRequest(request)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-black">{request.service}</p>
                    <p className="text-sm text-gray-600">
                      {request.status === "pending" 
                        ? "Waiting for provider"
                        : `Connected with ${request.customer}`}
                    </p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    request.status === "pending" 
                      ? "bg-yellow-100 text-yellow-800" 
                      : "bg-green-100 text-green-800"
                  }`}>
                    {request.status}
                  </span>
                </div>
                {request.status === "accepted" && (
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    <span>{request.chat.length} messages</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full flex flex-col">
            {/* Service info bar */}
            {activeRequest.status === "accepted" && (
              <div className="bg-blue-50 p-3 border-b border-blue-100">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-black">Service: {activeRequest.service}</p>
                    <p className="text-xs text-gray-600">Price: {activeRequest.price}</p>
                  </div>
                  <button className="text-blue-600 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            )}

            {/* Chat messages */}
            <div 
              className="flex-1 overflow-y-auto p-4 bg-gray-50"
            >
              {activeRequest.status === "pending" ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-black mb-1">Accept this request to start chatting</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Customer is waiting for a service provider
                  </p>
                  <button 
                    onClick={() => acceptRequest(activeRequest.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    Accept Request
                  </button>
                </div>
              ) : (
                <>
                  {activeRequest.chat.map(msg => (
                    <div 
                      key={msg.id} 
                      className={`flex mb-3 ${msg.sender === "provider" ? 'justify-end' : 'justify-start'}`}
                      onMouseEnter={() => setShowDeleteOption(msg.id)}
                      onMouseLeave={() => setShowDeleteOption(null)}
                    >
                      <div className="relative">
                        {!msg.deleted ? (
                          <div 
                            className={`max-w-xs rounded-lg p-3 ${
                              msg.sender === "provider" 
                                ? 'bg-blue-100' 
                                : 'bg-gray-200'
                            }`}
                          >
                            <p className="text-black">{msg.text}</p>
                            <div className="flex items-center justify-end mt-1 space-x-2">
                              <p className="text-xs text-gray-500">{msg.time}</p>
                              {msg.sender === "provider" && showDeleteOption === msg.id && (
                                <button 
                                  onClick={() => deleteMessage(msg.id)}
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
                  ))}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Message input */}
            {activeRequest.status === "accepted" && (
              <div className="bg-white p-3 border-t border-gray-200">
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceChatApp;