import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";

function App() {
  const movie = {
    title: "Inception",
    release_date: "2010-07-16",
    url: "https://image.tmdb.org/t/p/w500/8h58l2b1d3k4c5e6f7g8h9i0j1k2l3m4.jpg",
  };
  return (
    <div>
      <MovieCard movie={movie}></MovieCard>
      <Home />
    </div>
  );
}

export default App;
