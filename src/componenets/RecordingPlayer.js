// components/RecordingPlayer.js
import React, { useRef, useState } from 'react';
import './RecordingPlayer.css';

const RecordingPlayer = ({ audioSrc, onPlay, onPause }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      onPause && onPause();
    } else {
      audioRef.current.play();
      onPlay && onPlay();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="recording-player">
      <button onClick={toggleAudio} className="recording-button">
        {isPlaying ? '⏸ Pause My Voice' : '▶️ Play My Voice'}
      </button>
      <audio ref={audioRef} src={audioSrc} preload="auto" />
    </div>
  );
};


export default RecordingPlayer;
