import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DateSelection.css";

function DateSelection() {
  const navigate = useNavigate();
  const location = useLocation();

  const movie = location.state?.movie || "Selected Movie";
  const poster = location.state?.poster || "";
  const theatre = location.state?.theatre || "PVR Cinemas";
  const theatreLocation =
    location.state?.theatreLocation || "Chennai";
  const price = location.state?.price || "₹180";

  const [selectedDate, setSelectedDate] = useState("");

  const dates = [
    { day: "SUN", date: "27", month: "SEP" },
    { day: "MON", date: "28", month: "SEP" },
    { day: "TUE", date: "29", month: "SEP" },
    { day: "WED", date: "30", month: "SEP" },
    { day: "THU", date: "01", month: "OCT" },
    { day: "FRI", date: "02", month: "OCT" },
    { day: "SAT", date: "03", month: "OCT" },
  ];

  const showtimes = [
    "9:30 AM",
    "12:30 PM",
    "3:30 PM",
    "7:30 PM",
    "10:30 PM",
  ];

  // DATE SELECT
  const handleDateSelect = (item) => {
    const dateValue =
      `${item.day}, ${item.date} ${item.month} 2026`;

    setSelectedDate(dateValue);
  };

  // SHOWTIME SELECT → SEAT SELECTION
  const handleShowtimeSelect = (time) => {
    if (!selectedDate) {
      alert("Please select a date first");
      return;
    }

    navigate("/seats", {
      state: {
        movie: movie,
        poster: poster,
        theatre: theatre,
        theatreLocation: theatreLocation,
        date: selectedDate,
        showtime: time,
        price: price,
      },
    });
  };

  return (
    <div className="date-page">

      {/* HEADER */}
      <div className="date-header">

        <div>
          <span className="date-label">
            SELECT DATE & SHOWTIME
          </span>

          <h1>Choose your date</h1>

          <p>
            Select a date and showtime for your movie.
          </p>
        </div>

        <div className="booking-info">

          <span>
            🎬 {movie}
          </span>

          <span>
            📍 {theatre}
          </span>

        </div>

      </div>


      {/* DATE CARDS */}
      <div className="dates-container">

        {dates.map((item, index) => {

          const dateValue =
            `${item.day}, ${item.date} ${item.month} 2026`;

          const selected =
            selectedDate === dateValue;

          return (
            <button
              key={index}
              type="button"
              className={`date-card ${
                index === 0 ? "today" : ""
              } ${selected ? "selected" : ""}`}
              onClick={() => handleDateSelect(item)}
            >

              {index === 0 && (
                <span className="today-text">
                  TODAY
                </span>
              )}

              <span className="day">
                {item.day}
              </span>

              <strong className="date-number">
                {item.date}
              </strong>

              <span className="month">
                {item.month}
              </span>

            </button>
          );
        })}

      </div>


      {/* SHOWTIME */}
      {selectedDate && (
        <div className="showtime-section">

          <div className="showtime-heading">

            <span>
              AVAILABLE SHOWTIMES
            </span>

            <h2>
              Choose your show
            </h2>

            <p>
              {selectedDate}
            </p>

          </div>


          <div className="showtime-list">

            {showtimes.map((time) => (

              <button
                key={time}
                type="button"
                className="showtime-card"
                onClick={() =>
                  handleShowtimeSelect(time)
                }
              >

                <div className="time-icon">
                  🕐
                </div>

                <div className="time-info">

                  <h3>
                    {time}
                  </h3>

                  <p>
                    Available seats
                  </p>

                </div>

                <div className="time-arrow">
                  →
                </div>

              </button>

            ))}

          </div>

        </div>
      )}


      {/* BOOKING SUMMARY */}
      <div className="movie-summary">

        <div className="summary-icon">
          🎬
        </div>

        <div>

          <small>
            YOUR BOOKING
          </small>

          <h2>
            {movie}
          </h2>

          <p>
            📍 {theatre}
          </p>

          {selectedDate && (
            <p>
              📅 {selectedDate}
            </p>
          )}

        </div>

      </div>


      {/* BACK */}
      <button
        type="button"
        className="back-button"
        onClick={() =>
          navigate("/theatre", {
            state: {
              movie,
              poster,
              theatre,
              theatreLocation,
              price,
            },
          })
        }
      >
        ← Back
      </button>

    </div>
  );
}

export default DateSelection;