import React, { useState } from "react";
import "./MainArea.css";

export default function ChatMainArea({ chats, activeChat, setActiveChat }) {
  const [input, setInput] = useState("");

  // Send message function
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const updatedChat = {
      ...activeChat,
      messages: [...activeChat.messages, input],
    };

    // Update chats array
    const updatedChats = chats.map((chat) =>
      chat.name === activeChat.name ? updatedChat : chat
    );

    setActiveChat(updatedChat);

    // Reset input
    setInput("");

    // Fake bot reply
    setTimeout(() => {
      const botReply = {
        ...updatedChat,
        messages: [...updatedChat.messages, "Got it! (placeholder reply)"],
      };
      const newChats = updatedChats.map((chat) =>
        chat.name === botReply.name ? botReply : chat
      );
      setActiveChat(botReply);
    }, 1000);
  };

  if (!activeChat) return <div className="main-area">Select a chat to start</div>;

  return (
    <main className="main-area">
      {/* Chat messages */}
      <div className="chat-window">
        {activeChat.messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${idx % 2 === 0 ? "bot" : "user"}`}
          >
            {msg}
          </div>
        ))}
      </div>

      {/* Chat input */}
      <form className="chat-input" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
