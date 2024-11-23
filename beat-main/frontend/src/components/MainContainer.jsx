import React, { useState } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ({ showVideo }) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="relative overflow-hidden">
      {showVideo && <VideoBackground isMuted={isMuted} onUnmute={toggleMute} />}
      <VideoTitle isMuted={isMuted} onUnmute={toggleMute} />
    </div>
  );
};

export default MainContainer;
