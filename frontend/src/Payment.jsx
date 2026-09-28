import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state || {};

  const payNow = () => {
    navigate("/confirmation", {
      state: {
        movie: booking.movie,
        theatre: booking.theatre,
        date: booking.date,
        showtime: booking.showtime,
        seats: booking.seats,
        total: booking.total,
      },
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d12",
        color: "white",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <h1>Payment</h1>

      <div
        style={{
          width: "500px",
          maxWidth: "90%",
          margin: "40px auto",
          padding: "30px",
          background: "#17171e",
          borderRadius: "20px",
        }}
      >
        <h2>Booking Summary</h2>

        <p>
          Movie: {booking.movie || "Selected Movie"}
        </p>

        <p>
          Theatre: {booking.theatre || "Selected Theatre"}
        </p>

        <p>
          Date: {booking.date || "Selected Date"}
        </p>

        <p>
          Showtime: {booking.showtime || "Selected Showtime"}
        </p>

        <p>
          Seats:{" "}
          {booking.seats
            ? booking.seats.join(", ")
            : "Selected Seats"}
        </p>

        <h2>
          Total: ₹{booking.total || 0}
        </h2>

        <button
          onClick={payNow}
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px",
            background: "#e51bb9",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Confirm Payment →
        </button>
      </div>
    </div>
  );
}

export default Payment;