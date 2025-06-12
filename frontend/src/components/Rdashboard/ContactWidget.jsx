// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Send, X, Check, MessageSquare, ChevronUp, ChevronDown } from "lucide-react";

// const ContactWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [activeRequest, setActiveRequest] = useState(null);
//   const messagesEndRef = useRef(null);

//   // Sample data for service requests (would come from backend in real app)
//   const [serviceRequests, setServiceRequests] = useState([
//     {
//       id: 1,
//       service: "Plumbing Issue",
//       status: "accepted",
//       provider: "Service Team",
//       chat: [
//         { 
//           id: 1, 
//           sender: "customer", 
//           text: "I have a leaking pipe in my kitchen", 
//           time: "10:00 AM",
//           deleted: false
//         },
//         { 
//           id: 2, 
//           sender: "provider", 
//           text: "We'll send someone within 2 hours", 
//           time: "10:05 AM",
//           deleted: false
//         }
//       ]
//     }
//   ]);

//   // Auto-scroll to bottom of messages
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, activeRequest?.chat]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Send message
//   const sendMessage = () => {
//     if (!newMessage.trim()) return;

//     const newMsg = {
//       id: Date.now(),
//       sender: "customer",
//       text: newMessage,
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//       deleted: false
//     };

//     // In a real app, this would update the backend
//     if (activeRequest) {
//       setServiceRequests(prev => 
//         prev.map(req => 
//           req.id === activeRequest.id 
//             ? { ...req, chat: [...req.chat, newMsg] } 
//             : req
//         )
//       );
      
//       setActiveRequest(prev => ({
//         ...prev,
//         chat: [...prev.chat, newMsg]
//       }));
//     } else {
//       // Create new request if none exists
//       const newRequest = {
//         id: Date.now(),
//         service: "New Service Request",
//         status: "pending",
//         provider: "",
//         chat: [newMsg]
//       };
      
//       setServiceRequests(prev => [...prev, newRequest]);
//       setActiveRequest(newRequest);
//     }

//     setNewMessage("");
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-6">
//       {/* Header */}
//       <div 
//         className="flex items-center justify-between p-4 cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="flex items-center">
//           <MessageSquare className="w-5 h-5 text-blue-600 mr-2" />
//           <h3 className="font-medium text-gray-900">Chat Section</h3>
//         </div>
//         {isOpen ? (
//           <ChevronUp className="w-5 h-5 text-gray-500" />
//         ) : (
//           <ChevronDown className="w-5 h-5 text-gray-500" />
//         )}
//       </div>

//       {/* Content */}
//       {isOpen && (
//         <div className="border-t border-gray-200">
//           {activeRequest ? (
//             <div className="flex flex-col h-64">
//               {/* Chat messages */}
//               <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
//                 {activeRequest.chat.map(msg => (
//                   <div 
//                     key={msg.id} 
//                     className={`flex mb-3 ${msg.sender === "customer" ? 'justify-end' : 'justify-start'}`}
//                   >
//                     <div 
//                       className={`max-w-xs rounded-lg p-3 ${
//                         msg.sender === "customer" 
//                           ? 'bg-blue-100' 
//                           : 'bg-gray-200'
//                       }`}
//                     >
//                       <p className="text-black">{msg.text}</p>
//                       <p className="text-xs text-gray-500 text-right mt-1">{msg.time}</p>
//                     </div>
//                   </div>
//                 ))}
//                 <div ref={messagesEndRef} />
//               </div>

//               {/* Message input */}
//               <div className="bg-white border-t border-gray-200 p-3">
//                 <div className="flex items-center">
//                   <input
//                     type="text"
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                     onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//                     placeholder="Type your message..."
//                     className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
//                   />
//                   <button 
//                     onClick={sendMessage}
//                     className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none"
//                     disabled={!newMessage.trim()}
//                   >
//                     <Send className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="p-4 h-64 flex flex-col items-center justify-center text-center">
//               <div className="bg-blue-100 p-3 rounded-full mb-3">
//                 <MessageSquare className="w-6 h-6 text-blue-600" />
//               </div>
//               <h3 className="font-medium text-black mb-1">No active service requests</h3>
//               <p className="text-gray-600 text-sm mb-4">
//                 Submit a complaint to start chatting with the service team
//               </p>
//               <button 
//                 onClick={() => {
//                   const newRequest = {
//                     id: Date.now(),
//                     service: "New Service Request",
//                     status: "pending",
//                     provider: "",
//                     chat: []
//                   };
//                   setServiceRequests(prev => [...prev, newRequest]);
//                   setActiveRequest(newRequest);
//                 }}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
//               >
//                 Start New Request
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactWidget;









"use client";

import { useState, useEffect, useRef } from "react";
import { Send, X, ArrowLeft, MessageSquare, ChevronUp, ChevronDown } from "lucide-react";

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [activeRequest, setActiveRequest] = useState(null);
  const messagesEndRef = useRef(null);

  // Sample data for service requests
  const [serviceRequests, setServiceRequests] = useState([
    {
      id: 1,
      service: "Plumbing Issue",
      status: "accepted", // 'pending', 'accepted', 'completed'
      provider: "Service Team",
      chat: [
        { 
          id: 1, 
          sender: "customer", 
          text: "Hello, I have a leaking pipe in my kitchen", 
          time: "10:00 AM",
        },
        { 
          id: 2, 
          sender: "provider", 
          text: "Hello! We'll send a plumber within 2 hours", 
          time: "10:05 AM",
        },
        { 
          id: 3, 
          sender: "customer", 
          text: "Thank you! The leak is under the sink", 
          time: "10:07 AM",
        },
        { 
          id: 4, 
          sender: "provider", 
          text: "Our technician Usman is on the way", 
          time: "10:30 AM",
        }
      ]
    },
    {
      id: 2,
      service: "Electrical Problem",
      status: "pending",
      provider: "",
      chat: []
    }
  ]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [activeRequest?.chat]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Send message
  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "customer",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Update the active request
    const updatedRequest = {
      ...activeRequest,
      chat: [...activeRequest.chat, newMsg]
    };

    setServiceRequests(prev => 
      prev.map(req => 
        req.id === activeRequest.id ? updatedRequest : req
      )
    );
    
    setActiveRequest(updatedRequest);
    setNewMessage("");

    // Simulate service team reply after 1-3 seconds
    if (activeRequest.status === "accepted") {
      const replies = [
        "We've received your message",
        "Our team will look into this",
        "Can you provide more details?",
        "Thank you for your patience",
        "We'll update you shortly"
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      
      setTimeout(() => {
        const replyMsg = {
          id: Date.now(),
          sender: "provider",
          text: randomReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setServiceRequests(prev => 
          prev.map(req => 
            req.id === activeRequest.id 
              ? { ...req, chat: [...req.chat, replyMsg] } 
              : req
          )
        );
        
        if (activeRequest) {
          setActiveRequest(prev => ({
            ...prev,
            chat: [...prev.chat, replyMsg]
          }));
        }
      }, 1000 + Math.random() * 2000);
    }
  };

  // Create new service request
  const createNewRequest = () => {
    const newRequest = {
      id: Date.now(),
      service: "New Service Request",
      status: "pending",
      provider: "",
      chat: []
    };
    setServiceRequests(prev => [...prev, newRequest]);
    setActiveRequest(newRequest);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-6">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <MessageSquare className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="font-medium text-gray-900">Service Team Chat</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </div>

      {/* Content */}
      {isOpen && (
        <div className="border-t border-gray-200">
          {activeRequest ? (
            <div className="flex flex-col" style={{ height: '400px' }}> {/* ADJUST HEIGHT HERE - Current: 400px */}
              {/* Chat header with back button */}
              <div className="border-b border-gray-200 p-3 flex items-center justify-between bg-gray-50">
                <button 
                  onClick={() => setActiveRequest(null)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="text-center">
                  <p className="font-medium text-gray-900">{activeRequest.service}</p>
                  <p className="text-xs text-gray-500">
                    {activeRequest.status === "accepted" 
                      ? `Connected with ${activeRequest.provider}`
                      : "Waiting for provider"}
                  </p>
                </div>
                <div className="w-5"></div>
              </div>

              {/* Chat messages */}
              <div 
                className="flex-1 overflow-y-auto p-4 bg-gray-50" 
                style={{ maxHeight: 'calc(400px - 112px)' }} /* ADJUST TO MATCH MAIN HEIGHT - 112px accounts for header/input */
              >
                {activeRequest.chat.length > 0 ? (
                  activeRequest.chat.map(msg => (
                    <div 
                      key={msg.id} 
                      className={`flex mb-3 ${msg.sender === "customer" ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-xs rounded-lg p-3 ${
                          msg.sender === "customer" 
                            ? 'bg-blue-100' 
                            : 'bg-gray-200'
                        }`}
                      >
                        <p className="text-black">{msg.text}</p>
                        <p className="text-xs text-gray-500 text-right mt-1">{msg.time}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    No messages yet
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Message input */}
              <div className="bg-white border-t border-gray-200 p-3">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
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
          ) : (
            <div className="p-4" style={{ height: '400px' }}> {/* ADJUST HEIGHT HERE - Should match chat view height */}
              {/* List of service requests */}
              <div className="h-full flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  {serviceRequests.map(request => (
                    <div 
                      key={request.id} 
                      className="p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
                      onClick={() => setActiveRequest(request)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900">{request.service}</p>
                          <p className="text-sm text-gray-600">
                            {request.status === "pending" 
                              ? "Waiting for provider"
                              : `Connected with ${request.provider}`}
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
                      {request.chat.length > 0 && (
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          <span>{request.chat.length} messages</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Start new request button */}
                <button 
                  onClick={createNewRequest}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium w-full"
                >
                  Start New Request
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactWidget;