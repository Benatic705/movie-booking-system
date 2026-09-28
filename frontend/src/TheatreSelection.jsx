import { useNavigate, useLocation } from "react-router-dom";
import "./TheatreSelection.css";

const theatres = [
  {
    name: "PVR Cinemas",
    location: "VR Chennai, Anna Nagar",
    screens: "4 Screens",
    price: "₹180",
  },
  {
    name: "INOX",
    location: "Luxe Cinemas, Phoenix Mall",
    screens: "6 Screens",
    price: "₹200",
  },
  {
    name: "AGS Cinemas",
    location: "T Nagar, Chennai",
    screens: "5 Screens",
    price: "₹160",
  },
  {
    name: "Rohini Silver Screens",
    location: "Koyambedu, Chennai",
    screens: "3 Screens",
    price: "₹150",
  },
];

function TheatreSelection() {
  const navigate = useNavigate();
  const location = useLocation();

  const movie = location.state?.movie || "Selected Movie";
  const poster = location.state?.poster || "";

  const selectTheatre = (theatre) => {
    navigate("/date", {
      state: {
        movie,
        poster,
        theatre: theatre.name,
        theatreLocation: theatre.location,
        price: theatre.price,
      },
    });
  };

  return (
    <div className="theatre-page">

      {/* HEADER */}
      <header className="theatre-header">

        <button
          className="back-btn"
          onClick={() => navigate("/movies")}
        >
          ← Back
        </button>

        <div>
          <span>BOOKEASY</span>
          <h1>Select Theatre</h1>
          <p>
            Choose where you want to watch{" "}
            <strong>{movie}</strong>
          </p>
        </div>

      </header>

      {/* MOVIE INFO */}
      <div className="selected-movie">

        {poster && (
          <img
            src={poster}
            alt={movie}
          />
        )}

        <div>
          <small>SELECTED MOVIE</small>
          <h2>{movie}</h2>
          <p>📍 Chennai</p>
        </div>

      </div>

      {/* THEATRES */}
      <main className="theatre-container">

        <div className="section-title">
          <div>
            <span>AVAILABLE THEATRES</span>
            <h2>Choose your theatre</h2>
          </div>

          <div className="theatre-count">
            {theatres.length} Theatres
          </div>
        </div>

        <div className="theatre-list">

          {theatres.map((theatre, index) => (

            <div
              className="theatre-card"
              key={index}
            >

              <div className="theatre-icon">
                🎬
              </div>

              <div className="theatre-info">

                <h3>{theatre.name}</h3>

                <p>
                  📍 {theatre.location}
                </p>

                <div className="theatre-meta">

                  <span>
                    🖥 {theatre.screens}
                  </span>

                  <span>
                    🎟 From {theatre.price}
                  </span>

                </div>

              </div>

              <button
                className="select-theatre-btn"
                onClick={() => selectTheatre(theatre)}
              >
                Select
                <span>→</span>
              </button>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default TheatreSelection;