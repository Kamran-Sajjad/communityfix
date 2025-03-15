import React, { useState } from "react";
import "../styles/ChatBox.css";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I report an issue?", sender: "user" },
    { id: 2, text: "Go to the complaints section and click 'Add Complaint'.", sender: "admin" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const messageObject = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
    };

    setMessages([...messages, messageObject]);
    setNewMessage("");

    // Simulate admin reply (Replace with backend chat system later)
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: "We will look into it!", sender: "admin" },
      ]);
    }, 1000);
  };

  return (
    <div className="chat-box">
      <h3>Community Chat</h3>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
