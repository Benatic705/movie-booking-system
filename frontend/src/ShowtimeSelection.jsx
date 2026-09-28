import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SeatSelection.css";

function SeatSelection() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedSeats, setSelectedSeats] = useState([]);

  const movie = location.state?.movie || "Selected Movie";
  const theatre = location.state?.theatre || "Selected Theatre";
  const date = location.state?.date || "Selected Date";
  const showtime = location.state?.showtime || "Selected Showtime";

  const rows = ["A", "B", "C", "D", "E", "F"];
  const seatsPerRow = 8;
  const price = 180;

  const bookedSeats = ["A3", "B5", "D2", "E7"];

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    setSelectedSeats((current) =>
      current.includes(seat)
        ? current.filter((item) => item !== seat)
        : [...current, seat]
    );
  };

  const total = selectedSeats.length * price;

  const confirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    navigate("/payment", {
      state: {
        movie,
        theatre,
        date,
        showtime,
        seats: selectedSeats,
        total,
      },
    });
  };

  return (
    <div className="seat-page">

      <div className="seat-header">
        <div>
          <span>BOOK YOUR SEATS</span>

          <h1>Select your seats</h1>

          <p>
            {movie} · {date} · {showtime}
          </p>
        </div>

        <div className="screen-info">
          SCREEN
        </div>
      </div>

      <div className="screen">
        SCREEN
      </div>

      <div className="seat-layout">

        {rows.map((row) => (
          <div className="seat-row" key={row}>

            <span className="row-name">
              {row}
            </span>

            {Array.from(
              { length: seatsPerRow },
              (_, index) => {

                const seat = `${row}${index + 1}`;

                const booked = bookedSeats.includes(seat);
                const selected = selectedSeats.includes(seat);

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
                    onClick={() => toggleSeat(seat)}
                  >
                    {index + 1}
                  </button>
                );
              }
            )}

          </div>
        ))}

      </div>

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

      <div className="booking-summary">

        <div>
          <small>SELECTED SEATS</small>

          <strong>
            {selectedSeats.length > 0
              ? selectedSeats.join(", ")
              : "No seats selected"}
          </strong>
        </div>

        <div>
          <small>TOTAL</small>

          <strong>
            ₹{total}
          </strong>
        </div>

        <button
          type="button"
          className="confirm-btn"
          disabled={selectedSeats.length === 0}
          onClick={confirmBooking}
        >
          Confirm Booking →
        </button>

      </div>

    </div>
  );
}

export default SeatSelection;