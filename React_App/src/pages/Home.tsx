import MovieCard from "../components/MovieCard";
import { useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const movies = [
    {
      id: 1,
      title: "Inception",
      release_date: "2010-07-16",
      url: "https://example.com/inception.jpg",
    },
    {
      id: 2,
      title: "The Dark Knight",
      release_date: "2008-07-18",
      url: "https://example.com/dark_knight.jpg",
    },
    {
      id: 3,
      title: "Interstellar",
      release_date: "2014-11-07",
      url: "https://example.com/interstellar.jpg",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(setSearchTerm);
    setSearchTerm("");
  };
  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Searhc for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>{" "}
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchTerm) && (
              <MovieCard key={movie.id} movie={movie} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
