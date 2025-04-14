import React, { useEffect, useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import ContinuousSlider from "./componenets/ContinousSlider";
import LoveNoteCard from "./componenets/LoveNoteCard";

import bdaygirl from './images/Snapchat-1490632394.jpg';

function App() {
  const [kisses, setKisses] = useState([]);
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);
  const handleSendKisses = () => {
    const newKisses = Array.from({ length: 50 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      delay: Math.random() * 1 + "s",
    }));
    setKisses(prev => [...prev, ...newKisses]);

    setTimeout(() => {
      setKisses([]);
    }, 3000);
  };

  return (
    <div className="App">
      <ContinuousSlider />
      <div className="confetti-layer" />
      <div className="page-content">
        <div className="left-text">
          <h1 className="headline">Happy Birthday<br />Mehar ❤️❤️❤️</h1>
          <p className="subtext">It feels like it was yesterday when we met and fell in love but its already your birthday and I am so happy that we went so ahead with each other and share this day together. I have put together some photos to relive some moment with our time together. Hope youl'l like it.</p>
          <button className="btn" onClick={handleSendKisses}>
            Tap on me!😊
          </button>
        </div>
        <div className="right-box">
          { <img src={bdaygirl} alt="my love"></img>}
        </div>
        
        {kisses.map(kiss => (
        <span
          key={kiss.id}
          className="kiss"
          style={{
            left: kiss.left,
            top: kiss.top,
            animationDelay: kiss.delay,
          }}
        >
          💋
        </span>
      ))}
      </div>
      <LoveNoteCard
        date="April 15, 2025"
        message="You walked into my life like a gentle breeze, and every moment since has been poetry in motion. Happy birthday, my starlight. 🌌"
        imageUrl="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
      />

        {/* ❤️ Footer */}
        <footer className="love-footer">
        Made with <span className="heart">❤️</span> by Harsh Malik
      </footer>
    </div>
  );
}

export default App;
