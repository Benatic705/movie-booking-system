import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingConfirmation.css";

function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const movie = location.state?.movie || "Selected Movie";
  const theatre = location.state?.theatre || "PVR Cinemas";
  const date = location.state?.date || "Selected Date";
  const showtime = location.state?.showtime || "Selected Showtime";
  const seats = location.state?.seats || [];
  const total = location.state?.total || 0;

  const bookingId =
    location.state?.bookingId ||
    `BK${Date.now().toString().slice(-6)}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="confirmation-page">

      {/* SUCCESS */}
      <div className="success-icon">
        ✓
      </div>

      <h1>Booking Confirmed!</h1>

      <p className="success-message">
        Your movie tickets have been booked successfully.
      </p>

      {/* E-TICKET */}
      <div className="ticket">

        {/* TICKET TOP */}
        <div className="ticket-header">

          <div>
            <span className="brand">
              BOOKEASY
            </span>

            <h2>E-TICKET</h2>
          </div>

          <div className="booking-status">
            ✓ CONFIRMED
          </div>

        </div>

        {/* MOVIE */}
        <div className="movie-section">

          <div className="movie-icon">
            🎬
          </div>

          <div>
            <small>MOVIE</small>
            <h2>{movie}</h2>
          </div>

        </div>

        {/* DETAILS */}
        <div className="ticket-details">

          <div className="detail">
            <span>THEATRE</span>
            <strong>{theatre}</strong>
          </div>

          <div className="detail">
            <span>DATE</span>
            <strong>{date}</strong>
          </div>

          <div className="detail">
            <span>SHOWTIME</span>
            <strong>{showtime}</strong>
          </div>

          <div className="detail">
            <span>SEATS</span>
            <strong>
              {Array.isArray(seats)
                ? seats.join(", ")
                : seats}
            </strong>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="ticket-divider">
          <span></span>
          <span></span>
        </div>

        {/* BOTTOM */}
        <div className="ticket-bottom">

          <div>
            <small>BOOKING ID</small>
            <strong>{bookingId}</strong>
          </div>

          <div className="total-box">
            <small>TOTAL PAID</small>
            <strong>₹{total}</strong>
          </div>

        </div>

        {/* BARCODE */}
        <div className="barcode">
          <div className="barcode-lines">
            || ||| | |||| || ||| | |||| || |
          </div>

          <span>{bookingId}</span>
        </div>

      </div>

      {/* BUTTONS */}
      <div className="confirmation-buttons">

        <button
          className="print-btn"
          onClick={handlePrint}
        >
          🖨 Print / Save E-Ticket
        </button>

        <button
          className="home-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

      </div>

    </div>
  );
}

export default BookingConfirmation;