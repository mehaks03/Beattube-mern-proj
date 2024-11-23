// VideoPlayer.js
import React from "react";
import { useLocation } from "react-router-dom";

const VideoPlayer = () => {
  const location = useLocation();
  const { videoKey, title } = location.state || { videoKey: null, title: "" };

  if (!videoKey) {
    return <p className="text-red-500 text-center mt-4">No video available.</p>;
  }

  return (
    <div className="video-player-container">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <iframe
        title={title}
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoKey}`}
        frameBorder="0"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
