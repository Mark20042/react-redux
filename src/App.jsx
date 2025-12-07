import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "./store/movies";
import { setType } from "./store/users";
import { useState } from "react";
const App = () => {
  const [types, setTypes] = useState([]);
  const [movie, setMovie] = useState([]);
  // Access movies from the Redux store
  const movies = useSelector((state) => state.movies.list);
  const user = useSelector((state) => state.users);
  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    dispatch(addMovie(movie));
  };

  const handleSetType = () => {
    dispatch(setType(types));
  };

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
      <input
        type="text"
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Movie Title"
      />
      <button onClick={handleAddMovie}>Add Movie</button>
      <hr />
      <h3>User Type: {user.type}</h3>
      <input
        type="text"
        placeholder="User Type"
        onChange={(e) => setTypes(e.target.value)}
      />

      <button onClick={handleSetType}>Set User Type</button>
    </div>
  );
};

export default App;
