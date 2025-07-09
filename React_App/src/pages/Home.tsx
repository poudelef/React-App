import MovieCard from "../components/MovieCard";

const Home = () => {
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
  return (
    <div className="Home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
