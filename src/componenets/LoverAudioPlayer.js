// src/components/LoverAudioPlayer.js
import React, { useRef, useEffect, useState } from "react";
import "./LoverAudioPlayer.css";

const LoverAudioPlayer = ({ isMuted: externallyMuted }) => {
  const iframeRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Sync external mute change
  useEffect(() => {
    if (iframeRef.current && typeof externallyMuted === "boolean") {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: externallyMuted ? "mute" : "unMute",
          args: [],
        }),
        "*"
      );
      setIsMuted(externallyMuted);
    }
  }, [externallyMuted]);

  // Toggle mute on button click
  const toggleMute = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const nextMuted = !isMuted;

    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: nextMuted ? "mute" : "unMute",
        args: [],
      }),
      "*"
    );
    setIsMuted(nextMuted);
  };

  return (
    <div className="audio-player-wrapper">
      <iframe
  ref={iframeRef}
  className="audio-iframe"
  title="Call It What You Want by Taylor Swift"
  width="0"
  height="0"
  src="https://www.youtube.com/embed/nP5ykUoQlQI?autoplay=1&loop=1&playlist=nP5ykUoQlQI&mute=1&enablejsapi=1"
  allow="autoplay"
/>
      <button className="mute-btn" onClick={toggleMute}>
        {isMuted ? "🔇 Unmute" : "🔊 Mute"}
      </button>
    </div>
  );
};

export default LoverAudioPlayer;
