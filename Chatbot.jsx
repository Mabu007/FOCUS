import React from "react";
import "./Chatbot.css";

export default function Chatbot({ chats, activeChat, setActiveChat }) {
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
            className={`chat-item ${activeChat.name === chat.name ? "active" : ""}`}
            onClick={() => setActiveChat(chat)}
          >
            {chat.name}
          </div>
        ))}
      </div>
    </div>
  );
}
