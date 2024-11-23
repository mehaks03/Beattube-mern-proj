// Browse.jsx
import React, { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";

const Browse = () => {
  const [showVideo, setShowVideo] = useState(true); // State to control video background visibility

  return (
    <div className="bg-transparent min-h-screen">
      <Header setShowVideo={setShowVideo} /> {/* Pass down setter */}
      <div>
        <MainContainer showVideo={showVideo} />
        <MovieContainer />
      </div>
    </div>
  );
};

export default Browse;
