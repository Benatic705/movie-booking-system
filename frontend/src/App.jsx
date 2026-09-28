import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Movies from "./Movies";
import TheatreSelection from "./TheatreSelection";
import DateSelection from "./DateSelection";
import SeatSelection from "./SeatSelection";
import Payment from "./Payment";
import BookingConfirmation from "./BookingConfirmation";

import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="overlay">
        <div className="content">
          <h1>MOVIE BOOKING SYSTEM</h1>

          <p>Welcome to our Movie Booking System</p>

          <button onClick={() => navigate("/movies")}>
            Browse Movies →
          </button>
        </div>
      </div>
    </div>
  );
}

function MoviePage() {
  const navigate = useNavigate();

  const selectMovie = (movie) => {
    navigate("/theatre", {
      state: {
        movie: movie.title,
        poster: movie.image,
      },
    });
  };

  return <Movies onSelectMovie={selectMovie} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/movies"
          element={<MoviePage />}
        />

        <Route
          path="/theatre"
          element={<TheatreSelection />}
        />

        <Route
          path="/date"
          element={<DateSelection />}
        />

        {/* THIS IS THE IMPORTANT ROUTE */}
        <Route
          path="/seats"
          element={<SeatSelection />}
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

        <Route
          path="/confirmation"
          element={<BookingConfirmation />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;