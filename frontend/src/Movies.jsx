import React from "react";
import "./Movies.css";

const movies = [
  {
    title: "Meesaya Murukku 2",
    image: "/posters/meesaya.jpg.jpeg",
    rating: "8.2",
    language: "Tamil",
    genre: "Drama • Musical",
  },
  {
    title: "Mandaadi",
    image: "/posters/mandaadi.jpg.webp",
    rating: "8.0",
    language: "Tamil",
    genre: "Drama • Action",
  },
  {
    title: "Lenin Pandiyan",
    image: "/posters/lenin.jpg.jpg",
    rating: "8.1",
    language: "Tamil",
    genre: "Drama",
  },
  {
    title: "Heart of the Beast",
    image: "/posters/heart-of-beast.jpg.jpg",
    rating: "8.3",
    language: "Tamil",
    genre: "Horror • Thriller",
  },
  {
    title: "Resident Evil",
    image: "/posters/resident-evil.jpg.jpg",
    rating: "8.0",
    language: "English",
    genre: "Horror • Action",
  },
  {
    title: "Sardar 2",
    image: "/posters/sardar2.jpg.jpg",
    rating: "7.9",
    language: "Tamil",
    genre: "Action • Thriller",
  },
  {
    title: "Vaa Van",
    image: "/posters/vvaan.jpg.jpg",
    rating: "8.1",
    language: "Tamil",
    genre: "Drama • Action",
  },
  {
    title: "Paradise",
    image: "/posters/paradise.jpg.jpg",
    rating: "8.0",
    language: "Tamil",
    genre: "Drama • Thriller",
  },
  {
    title: "Avengers",
    image: "/posters/avengers.jpg.jpg",
    rating: "8.5",
    language: "English",
    genre: "Action • Adventure",
  },
];

function Movies({ onSelectMovie }) {
  return (
    <div className="movies-page">

      <div className="movies-header">

        <div>
          <p className="small-title">NOW SHOWING</p>

          <h1>Choose Your Movie</h1>

          <p className="subtitle">
            Discover the latest movies and book your tickets.
          </p>
        </div>

        <div className="location">
          📍 Chennai
        </div>

      </div>

      <div className="movie-grid">

        {movies.map((movie, index) => (

          <div className="movie-card" key={index}>

            <img
              src={movie.image}
              alt={movie.title}
              className="movie-poster"
            />

            <div className="movie-content">

              <button
                className="book-button"
                onClick={() => onSelectMovie(movie)}
              >
                Book Tickets →
              </button>

              <div className="rating">
                ⭐ {movie.rating}
              </div>

              <h2>{movie.title}</h2>

              <p>
                {movie.language} • {movie.genre}
              </p>

              <div className="available">
                ● Available
              </div>

              <button
                className="book-button bottom-button"
                onClick={() => onSelectMovie(movie)}
              >
                Book Tickets →
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Movies;