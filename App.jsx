import React, { useState } from "react";
import AsideBar from "./components/AsideBar";
import AsidePanel from "./components/AsidePanel";
import MainArea from "./components/MainArea";
import "./index.css";

export default function App() {
  // Active panel state (null = no panel open)
  const [activePanel, setActivePanel] = useState(null);

  // Chats state shared between sidebar and main area
  const [chats, setChats] = useState([
    { name: "Project AI", messages: ["Hello from AI!"] },
    { name: "Marketing Bot", messages: ["Welcome to Marketing Bot"] },
    { name: "Finance Tracker", messages: ["Finance overview"] },
    { name: "Personal Assistant", messages: ["Hi, how can I help?"] },
    { name: "Fitness Coach", messages: ["Time for your workout!"] },
  ]);

  // Currently active chat
  const [activeChat, setActiveChat] = useState(chats[0]);

  // Toggle panel function
  const togglePanel = (panelName) => {
    setActivePanel((prev) => (prev === panelName ? null : panelName));
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1>My App</h1>
        <div>⚙️</div>
      </header>

      {/* App Body */}
      <div className="app-body">
        {/* Sidebar */}
        <AsideBar activePanel={activePanel} togglePanel={togglePanel} />

        {/* Main + Panel Wrapper */}
        <div className={`main-panel-wrapper ${activePanel ? "panel-open" : ""}`}>
          {/* Aside Panel */}
          {activePanel && (
            <AsidePanel
              activePanel={activePanel}
              chats={chats}
              activeChat={activeChat}
              setActiveChat={setActiveChat}
            />
          )}

          {/* Main Chat Area */}
          <MainArea activeChat={activeChat} setActiveChat={setActiveChat} chats={chats} />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">© 2025 ePlug</footer>
    </div>
  );
}
