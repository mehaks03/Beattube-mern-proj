import React, { useState, useEffect } from "react";
import './MovieList.css';

const MovieList = ({ title, movies, searchTerm }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [videoKey, setVideoKey] = useState(null);
  const [error, setError] = useState(null);
  const [showStickyPopup, setShowStickyPopup] = useState(null);
  const [expandedMovieId, setExpandedMovieId] = useState(null);

  useEffect(() => {
    if (movies.length === 0) {
      setError("No movies available.");
    } else {
      setError(null);
    }
  }, [movies]);

  const handlePlayClick = async (movie) => {
    try {
      if (selectedMovie === movie.id) {
        setSelectedMovie(null);
        setVideoKey(null);
      } else {
        setSelectedMovie(movie.id);
        const trailerKey = await fetchTrailerKey(movie.title);
        if (trailerKey) {
          setVideoKey(trailerKey);
        } else {
          setError("No trailer available for this movie.");
        }
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while trying to fetch the video.");
    }
  };

  const fetchTrailerKey = async (movieTitle) => {
    // Replace with actual API call to fetch trailer key based on movie title
    // Example: Use a movie database API to get the trailer key
    return "example_video_key"; // Dummy key for demonstration
  };

  const handleDoubleClick = (movie) => {
    setShowStickyPopup(movie);
  };

  const closeStickyPopup = () => {
    setShowStickyPopup(null);
  };

  const closeVideoPopup = () => {
    setSelectedMovie(null);
    setVideoKey(null);
  };

  const toggleExpandMovie = (movieId) => {
    setExpandedMovieId(expandedMovieId === movieId ? null : movieId);
  };

  return (
    <div className="movie-container">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="scrollable">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onDoubleClick={() => handleDoubleClick(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
              />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-rating">{movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} ⭐</p>
                <p className="movie-overview">
                  {expandedMovieId === movie.id
                    ? movie.overview
                    : `${movie.overview.split(" ").slice(0, 10).join(" ")}...`}
                </p>
                <div className="button-container">
                  <button className="show-more" onClick={() => toggleExpandMovie(movie.id)}>
                    {expandedMovieId === movie.id ? "Show Less" : "Show More"}
                  </button>
                  <button className="play-button" onClick={() => handlePlayClick(movie)}>
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-white">No results found for "{searchTerm}"</p>
        )}
      </div>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {selectedMovie && videoKey && (
        <div className="video-popup">
          <div className="video-content">
            <iframe
              title="Movie Trailer"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button className="close-button" onClick={closeVideoPopup}>✖</button>
          </div>
        </div>
      )}

      {showStickyPopup && (
        <div className="sticky-popup">
          <div className="popup-content">
            <h3 className="text-lg font-bold">{showStickyPopup.title}</h3>
            <p>{showStickyPopup.overview}</p>
            <p>Rating: {showStickyPopup.vote_average ? showStickyPopup.vote_average.toFixed(1) : "N/A"} ⭐</p>
            <button onClick={closeStickyPopup} className="close-button">✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
