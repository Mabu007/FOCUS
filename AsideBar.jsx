import React from "react";

function AsideBar({ activePanel, togglePanel }) {
  // toggle logic: if the clicked panel is already active, close it
  const handleClick = (panelName) => {
    if (activePanel === panelName) {
      togglePanel(null); // close panel
    } else {
      togglePanel(panelName); // open panel
    }
  };

  return (
    <aside className="aside-bar">
      <button onClick={() => handleClick("chatbot")}>💬</button>
      <button onClick={() => handleClick("brain")}>🧠</button>
      <button onClick={() => handleClick("planning")}>📅</button>
      <button onClick={() => handleClick("organizing")}>📂</button>
      <button onClick={() => handleClick("leading")}>⭐</button>
      <button onClick={() => handleClick("controlling")}>📊</button>
    </aside>
  );
}

export default AsideBar;
