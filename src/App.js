import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const api = {
  key: "cc4405275034c9897169b56f68c90451",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=imperial&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">

        {/* header */}
        <h1>Weather app</h1>

        {/* search box */}
        <div>
          <input type="text" className="search-box" placeholder="Enter city/town"
           onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={searchPressed}>Search</button>
        </div>

        {typeof weather.main != 'undefined' ? (
        <div>
          {/* location */}
          <p>{weather.name}</p>

          {/* teperature */}
          <p>{weather.main.temp.toFixed(0)}°F</p>

          {/* condition/weather */}

          <p>{weather.weather[0].main}</p>
          <p>({weather.weather[0].description})</p>
        </div>
         ) : (
          ""
        )}

      </header>
    </div>
  );
}

export default App;
