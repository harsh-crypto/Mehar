// src/components/LoverAudioPlayer.js
import React, { useRef, useState } from "react";
import "./LoverAudioPlayer.css";

const LoverAudioPlayer = () => {
  const iframeRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // postMessage to YouTube API to mute/unmute
    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: isMuted ? "unMute" : "mute",
        args: [],
      }),
      "*"
    );
    setIsMuted(prev => !prev);
  };

  return (
    <div className="audio-player-wrapper">
      <iframe
        ref={iframeRef}
        className="audio-iframe"
        title="Lover by Taylor Swift"
        width="0"
        height="0"
        src="https://www.youtube.com/embed/-BjZmE2gtdo?autoplay=1&loop=1&playlist=-BjZmE2gtdo&mute=1&enablejsapi=1"
        allow="autoplay"
      />
      <button className="mute-btn" onClick={toggleMute}>
        {isMuted ? "🔇 Unmute" : "🔊 Mute"}
      </button>
    </div>
  );
};

export default LoverAudioPlayer;
