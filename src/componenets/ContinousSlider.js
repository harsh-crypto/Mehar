import React from "react";
import "./Slider.css";

const messages = [
  "🎉 Happy Birthday Mehar! ",
  "🎂 Wish You Joy & Success! ",
  "💖 Stay Awesome Forever! ",
  "🎈 Party Like There's No Tomorrow! ",
  "🔥 You’re Aging Like Fine wine! ",
];

function ContinousSlider() {
  const repeated = messages.concat(messages); // repeat for seamless loop

  return (
    <div className="slider-wrapper">
      <div className="slider">
        {repeated.map((msg, i) => (
          <span key={i} className="slider-text">
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ContinousSlider;
