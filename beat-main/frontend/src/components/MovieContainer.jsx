import React from 'react';
import MovieList from './MovieList';
import { useSearch } from '../context/SearchContext';

const MovieContainer = () => {
  const { searchTerm } = useSearch();
  const [allMovies, setAllMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  };

  const API_URLS = {
    NOW_PLAYING: "https://api.themoviedb.org/3/movie/now_playing",
    POPULAR: "https://api.themoviedb.org/3/movie/popular",
    TOP_RATED: "https://api.themoviedb.org/3/movie/top_rated",
    UPCOMING: "https://api.themoviedb.org/3/movie/upcoming",
  };

  const fetchAllMovies = async () => {
    const urls = [
      API_URLS.NOW_PLAYING,
      API_URLS.POPULAR,
      API_URLS.TOP_RATED,
      API_URLS.UPCOMING,
    ];

    try {
      const results = await Promise.all(
        urls.map(url => fetch(url, API_OPTIONS).then(res => res.json()))
      );
      setAllMovies(results.map(data => data.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to fetch movies. Please try again later.");
      setAllMovies([]);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchAllMovies();
  }, []);

  const filteredMovies = allMovies.map(category =>
    category ? category.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) : []
  );

  const hasResults = filteredMovies.some(category => category.length > 0);

  return (
    <div>
      {loading && <p className="text-center text-xl text-white">Loading...</p>}
      {error && <p className="text-center text-xl text-red-500">{error}</p>}
      {!loading && !error && (
        hasResults ? (
          <>
            <MovieList title="Now Playing" movies={filteredMovies[0]} searchTerm={searchTerm} />
            <MovieList title="Popular" movies={filteredMovies[1]} searchTerm={searchTerm} />
            <MovieList title="Top Rated" movies={filteredMovies[2]} searchTerm={searchTerm} />
            <MovieList title="Upcoming" movies={filteredMovies[3]} searchTerm={searchTerm} />
          </>
        ) : (
          <p className="text-center text-xl text-white">
            No results found for "{searchTerm}"
          </p>
        )
      )}
    </div>
  );
};

export default MovieContainer;
