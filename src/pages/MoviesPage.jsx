import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Moviesdata from "../data/Moviesdata";
import "./MoviesPage.css";

function MoviesPage() {
  const navigate = useNavigate();
  const movies = Moviesdata;

  return (
    <>
      <Navbar />

      <div className="movies-container">
        <h1>Movies</h1>

        <div className="movies-grid">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <img src={movie.posterUrl} alt={movie.title} />

              <div className="movie-content">
                <h3>{movie.title}</h3>
                <p className="movie-year">{movie.year}</p>
                <span className="movie-genre">{movie.genre}</span>
                <p className="movie-plot">{movie.plot}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MoviesPage;
