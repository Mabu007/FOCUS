import React, { useState } from "react";
import "./Brain.css"; // create this for styling

export default function Brain() {
  // Example concepts
  const [concepts, setConcepts] = useState([
    "Neural Networks",
    "Reinforcement Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Generative AI",
  ]);

  return (
    <div className="brain-panel">
      {/* New Concept button */}
      <div className="brain-section new-concept">
        <button>
          <span className="icon">➕</span> New Concept
        </button>
      </div>

      {/* Concepts Title */}
      <div className="brain-section concepts-title">Concepts</div>

      {/* Concept list */}
      <div className="concept-list">
        {concepts.map((concept, idx) => (
          <div key={idx} className="concept-item">
            {concept}
          </div>
        ))}
      </div>
    </div>
  );
}
