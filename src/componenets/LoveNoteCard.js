import React from "react";
import "./LoveNoteCard.css";

const LoveNoteCard = ({ date, message, imageUrl }) => {
  return (
    <div className="love-note-card">
      <div className="left-section">
        <div className="note-date">{date}</div>
        <div className="note-text">{message}</div>
      </div>
      <div className="image-section">
        <img src={imageUrl} alt="memory" />
      </div>
    </div>
  );
};

export default LoveNoteCard;
