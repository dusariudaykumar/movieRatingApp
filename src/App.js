import "./styles.css";
import React, { useState } from "react";
const moviesDB = {
  actionMovies: [
    { name: "Aquaman Movies", rating: "6.9/10" },
    { name: "Wild Dog", rating: "6.3/10" }
  ],
  dramas: [
    { name: "The Pursuit of Happyness", rating: "8/10" },
    { name: "Interstellar", rating: "8.6/10" }
  ],
  actionAndAdventure: [
    { name: "Fast & Furious Presents: Hobbs & Shaw", rating: "6.4/10" },
    { name: "Godzilla vs Kong", rating: "6.4/10" }
  ]
};
export default function App() {
  const [movies, setMovies] = useState("dramas");
  function movieHandler(movie) {
    setMovies(movie);
  }
  return (
    <div className="App">
      <header>
        {" "}
        <h1>Movies Rating</h1>
      </header>
      <div>
        {Object.keys(moviesDB).map((movie) => (
          <button className="btn" onClick={() => movieHandler(movie)}>
            {movie}
          </button>
        ))}
      </div>
      <hr />
      <div className="movie-list">
        <ul>
          {moviesDB[movies].map((genre) => (
            <li key={genre.name}>
              <div className="movie">{genre.name}</div>
              <div className="rating">{genre.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
