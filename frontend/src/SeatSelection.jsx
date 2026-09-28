import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SeatSelection.css";

function SeatSelection() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedSeats, setSelectedSeats] = useState([]);

  // Get details from Date Selection
  const movie = location.state?.movie || "Selected Movie";
  const poster = location.state?.poster || "";
  const theatre = location.state?.theatre || "PVR Cinemas";
  const theatreLocation =
    location.state?.theatreLocation || "Chennai";
  const date = location.state?.date || "Selected Date";
  const showtime =
    location.state?.showtime || "Selected Showtime";
  const price = 180;

  const rows = ["A", "B", "C", "D", "E", "F"];
  const seatsPerRow = 8;

  // Already booked seats
  const bookedSeats = [
    "A3",
    "B5",
    "D2",
    "E7",
  ];

  // SELECT / UNSELECT SEAT
  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) {
      return;
    }

    setSelectedSeats((currentSeats) => {
      if (currentSeats.includes(seat)) {
        return currentSeats.filter(
          (item) => item !== seat
        );
      }

      return [...currentSeats, seat];
    });
  };

  // TOTAL
  const total =
    selectedSeats.length * price;

  // CONFIRM BOOKING
  const confirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    navigate("/payment", {
      state: {
        movie,
        poster,
        theatre,
        theatreLocation,
        date,
        showtime,
        seats: selectedSeats,
        total,
      },
    });
  };

  return (
    <div className="seat-page">

      {/* HEADER */}
      <div className="seat-header">

        <div>

          <span>
            BOOK YOUR SEATS
          </span>

          <h1>
            Select your seats
          </h1>

          <p>
            {movie} · {date} · {showtime}
          </p>

          <p>
            🎬 {theatre}
          </p>

        </div>

        <div className="screen-info">
          SCREEN
        </div>

      </div>


      {/* SCREEN */}
      <div className="screen">
        SCREEN
      </div>


      {/* SEAT LAYOUT */}
      <div className="seat-layout">

        {rows.map((row) => (

          <div
            className="seat-row"
            key={row}
          >

            <span className="row-name">
              {row}
            </span>

            {Array.from(
              { length: seatsPerRow },
              (_, index) => {

                const seatNumber =
                  index + 1;

                const seat =
                  `${row}${seatNumber}`;

                const booked =
                  bookedSeats.includes(seat);

                const selected =
                  selectedSeats.includes(seat);

                return (
                  <button
                    key={seat}
                    type="button"
                    className={`seat ${
                      booked
                        ? "booked"
                        : selected
                        ? "selected"
                        : ""
                    }`}
                    disabled={booked}
                    onClick={() =>
                      toggleSeat(seat)
                    }
                  >
                    {seatNumber}
                  </button>
                );
              }
            )}

          </div>
        ))}

      </div>


      {/* LEGEND */}
      <div className="seat-legend">

        <div>
          <span className="legend available"></span>
          Available
        </div>

        <div>
          <span className="legend selected-legend"></span>
          Selected
        </div>

        <div>
          <span className="legend booked-legend"></span>
          Booked
        </div>

      </div>


      {/* BOOKING SUMMARY */}
      <div className="booking-summary">

        <div>

          <small>
            SELECTED SEATS
          </small>

          <strong>
            {selectedSeats.length > 0
              ? selectedSeats.join(", ")
              : "No seats selected"}
          </strong>

        </div>


        <div>

          <small>
            TOTAL
          </small>

          <strong>
            ₹{total}
          </strong>

        </div>


        {/* CONFIRM BUTTON */}
        <button
          type="button"
          className="confirm-btn"
          disabled={
            selectedSeats.length === 0
          }
          onClick={confirmBooking}
        >
          Confirm Booking →
        </button>

      </div>

    </div>
  );
}

export default SeatSelection;