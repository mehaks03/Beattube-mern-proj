import React from "react";
import { PlayIcon } from "@heroicons/react/24/outline";

const VideoTitle = ({ isMuted, onUnmute }) => {
  return (
    <div className="absolute inset-0 bottom-0 flex flex-col justify-center text-white p-4 bg-gradient-to-t from-black via-transparent to-black">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 opacity-50">
        Discover the Beauty of Nature
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6 opacity-30">
        Join us on a breathtaking journey through the world's most stunning landscapes, showcasing the wonders of nature and the thrill of adventure.
      </p>
      <div className="flex space-x-4">
        <button
          className="flex items-center bg-red-600 bg-opacity-30 px-6 py-2 rounded-md hover:bg-red-700 hover:bg-opacity-65 transition-colors"
          onClick={onUnmute}
        >
          <PlayIcon className="w-6 h-6 mr-2" />
          {isMuted ? "Play" : "Playing..."}
        </button>
        <button className="bg-gray-600 px-6 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-70 transition-colors bg-opacity-30">
          Watch More 
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
