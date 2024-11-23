import React, { useRef, useEffect } from "react";

const VideoBackground = ({ isMuted, onUnmute }) => {
  const iframeRef = useRef(null);

  const handleMuteToggle = () => {
    if (iframeRef.current) {
      const command = isMuted ? 'mute' : 'unmute';
      iframeRef.current.contentWindow.postMessage(`{"event":"command","func":"${command}","args":""}`, '*');
    }
    if (onUnmute) onUnmute();
  };

  // Construct the YouTube embed URL based on the mute state
  const videoSrc = `https://www.youtube.com/embed/r6aYQ2a9o2c?autoplay=true&mute=${isMuted ? 1 : 0}`;

  useEffect(() => {
    // Add event listener for mute/unmute requests
    window.addEventListener("message", (event) => {
      if (event.data === "unmute") {
        handleMuteToggle();
      }
    });

    return () => {
      window.removeEventListener("message", handleMuteToggle);
    };
  }, []);

  return (
    <div className="w-screen h-screen aspect-video overflow-hidden bg-gradient-to-b from-black via-transparent to-black relative">
      <iframe
        ref={iframeRef}
        className="absolute top-0 aspect-video left-0 w-full h-full object-cover"
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 bg-black opacity-30" />
    </div>
  );
};

export default VideoBackground;
