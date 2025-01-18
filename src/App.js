import { useState } from "react";
import Heading from "./components/Heading";
import "./styles.css";
function App() {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);

  const handelSearch = async () => {
    const key = "d053ef092487783839a25baff0872858";
    const baseurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    try {
      const response = await fetch(baseurl);
      const data = await response.json();
      if (response.ok) {
        setWeather(data); // Store weather data in state
      } else {
        // Handle errors like city not found
        alert("City not found! Please try again.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="App">
      <Heading />
      <input
        type="text"
        placeholder="Enter City name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => handelSearch()}>Search</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}
export default App;
