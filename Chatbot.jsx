import React, { useState } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [chats, setChats] = useState([
    { name: "Project AI", messages: ["Hello from AI!"] },
    { name: "Marketing Bot", messages: ["Welcome to Marketing Bot"] },
    { name: "Finance Tracker", messages: ["Finance overview"] },
    { name: "Personal Assistant", messages: ["Hi, how can I help?"] },
    { name: "Fitness Coach", messages: ["Time for your workout!"] },
  ]);
  const [activeChat, setActiveChat] = useState(chats[0]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const updatedChat = {
      ...activeChat,
      messages: [...activeChat.messages, input],
    };
    const updatedChats = chats.map((chat) =>
      chat.name === activeChat.name ? updatedChat : chat
    );
    setChats(updatedChats);
    setActiveChat(updatedChat);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chatbot-panel">
      {/* New Chat */}
      <div className="chatbot-section new-chat">
        <span className="icon">➕</span>
        <span>New Chat</span>
      </div>

      {/* Research Mode */}
      <div className="chatbot-section research-mode">
        <span className="icon">🔍</span>
        <span>Research Mode</span>
      </div>

      {/* Chats Title */}
      <div className="chatbot-section chats-title">Chats</div>

      {/* Chat list */}
      <div className="chat-list">
        {chats.map((chat, idx) => (
          <div
            key={idx}
            className={`chat-item ${
              activeChat.name === chat.name ? "active" : ""
            }`}
            onClick={() => setActiveChat(chat)}
          >
            {chat.name}
          </div>
        ))}
      </div>

      {/* Active chat messages */}
      <div className="chat-window">
        {activeChat.messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${
              idx % 2 === 0 ? "bot" : "user"
            }`}
          >
            {msg}
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
