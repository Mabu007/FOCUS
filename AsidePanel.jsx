import React from "react";
import ChatbotPanel from "../panels/Chatbot";
import BrainPanel from "../panels/Brain";
import PlanningPanel from "../panels/Planning";
import LeadingPanel from "../panels/Leading";
import ControllingPanel from "../panels/Controlling";

export default function AsidePanel({ activePanel, chats, activeChat, setActiveChat }) {
  const renderPanelContent = () => {
    switch (activePanel) {
      case "chatbot":
        return <ChatbotPanel chats={chats} activeChat={activeChat} setActiveChat={setActiveChat} />;
      case "brain":
        return <BrainPanel />;
      case "planning":
        return <PlanningPanel />;
      case "leading":
        return <LeadingPanel />;
      case "controlling":
        return <ControllingPanel />;
      default:
        return <div>Select a panel</div>;
    }
  };

  return <div className="aside-panel open">{renderPanelContent()}</div>;
}
