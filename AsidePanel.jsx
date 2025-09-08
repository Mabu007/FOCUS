import React from "react";

function AsidePanel({ activePanel }) {
  return (
    <div className="aside-panel open">
      <h3>{activePanel.toUpperCase()} PANEL</h3>
      <p>Contents for {activePanel}</p>
    </div>
  );
}

export default AsidePanel;
