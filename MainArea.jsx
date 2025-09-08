import React, { useState } from "react";
import "./MainArea.css";

export default function MainArea({ activeChat, setActiveChat, chats }) {
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add message to the active chat
    const updatedChat = {
      ...activeChat,
      messages: [...activeChat.messages, input],
    };

    // Update chats array
    const updatedChats = chats.map((chat) =>
      chat.name === activeChat.name ? updatedChat : chat
    );

    setActiveChat(updatedChat); // Update active chat
    setInput("");

    // Optional: fake bot reply
    setTimeout(() => {
      setActiveChat({
        ...updatedChat,
        messages: [...updatedChat.messages, "Got it! (This is a placeholder reply)"],
      });
    }, 1000);
  };

  return (
    <main className="main-area">
      <div className="chat-window">
        {activeChat.messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${idx % 2 === 0 ? "bot" : "user"}`}>
            {msg}
          </div>
        ))}
      </div>

      <form className="chat-input" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
