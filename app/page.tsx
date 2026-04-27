"use client";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState(false);

  async function checkWeather() {
    console.log("CLICK OK");
    if (!city) return;

    const response = await fetch(`/api/weather?city=${city}`);

    if (response.status === 404) {
      setError(true);
      setWeather(null);
      return;
    }

    const data = await response.json();
    setWeather(data);
    console.log("DATA:", data);

    setError(false);
  }

  return (
    <div className="card">
      <footer style={{ marginTop: "30px" }}>
        <a 
          href="https://sun-89.github.io/PortfolioPro/" 
          target="_blank" 
          style={{ color: "#fff", textDecoration: "underline", fontSize: "14px" }}
          >
          Voir mon portfolio
        </a>
      </footer>
      <div className="search">
        <input
          type="text"
          placeholder="Entrer un nom de ville"
          spellCheck="false"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && checkWeather()}
        />
        <button onClick={checkWeather}>
          <img src="/images/search.png" alt="Search" />
        </button>
      </div>

      {error && (
        <div className="error">
          <p>Ville non trouvée</p>
        </div>
      )}

      {weather && (
        <div className="weather">
          <img
            src={`/images/${weather.weather[0].main.toLowerCase()}.png`}
            alt=""
            className="weather-icon"
          />

          <h1 className="temp">{Math.round(weather.main.temp)}°C</h1>
          <h2 className="city">{weather.name}</h2>

          <div className="details">
            <div className="col">
              <img src="/images/humidity.png" alt="Humidity" />
              <div>
                <p className="humidity">{weather.main.humidity}%</p>
                <p>Humidité</p>
              </div>
            </div>

            <div className="col">
              <img src="/images/wind.png" alt="Wind" />
              <div>
                <p className="wind">{Math.round(weather.wind.speed)} km/h</p>
                <p>Vent</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer style={{ marginTop: "30px" }}>
        <a 
        href="https://sun-89.github.io/PortfolioPro/" 
        target="_blank" 
        style={{ color: "#fff", textDecoration: "underline", fontSize: "14px" }}
        >
        Voir mon portfolio
        </a>
</footer>
    </div>
  );
}
