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
              <div className="bg-white pr-12 border-t border-gray-200">
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
                    className="mr-5 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none"
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