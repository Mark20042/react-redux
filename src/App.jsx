import { useSelector } from "react-redux";

const App = () => {
  const movies = useSelector((state) => state.movies.list);
  console.log(movies);
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies ? (
          movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
        ) : (
          <li>No movies</li>
        )}
      </ul>
    </div>
  );
};

export default App;
