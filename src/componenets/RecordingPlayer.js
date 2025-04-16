// components/RecordingPlayer.js
import React, { useRef, useState } from 'react';
import './RecordingPlayer.css';

const RecordingPlayer = ({ audioSrc, onRecordingPlay, onRecordingPause }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      onRecordingPause?.(); // unmute music
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      onRecordingPlay?.(); // mute music
    }
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
