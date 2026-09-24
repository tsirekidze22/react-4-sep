import { Sun } from "lucide-react";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import TbilisiImage from "./assets/tbilisi.jpg";
function App() {
  const [currentCity, setCurrentCity] = useState("Tbilisi");
  const [weather, setWeather] = useState(null);

  const inputRef = useRef();

  useEffect(() => {
    const fetchWeather = async () => {
      const { VITE_WEATHER_API_KEY } = import.meta.env;
      try {
        // კოორდინატების წამოღება
        const geoResponse = await axios.get(
          "https://api.openweathermap.org/geo/1.0/direct",
          {
            params: {
              q: currentCity,
              limit: 1,
              appid: VITE_WEATHER_API_KEY,
            },
          },
        );
        const data = geoResponse.data[0];
        const { lat, lon } = data;

        // ამინდის ინფრომაციის წამოღება
        const weatherData = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              lat: lat,
              lon: lon,
              units: "metric",
              appid: VITE_WEATHER_API_KEY,
            },
          },
        );
        console.log(weatherData.data, "weatherData");
        setWeather(weatherData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  }, [currentCity]);

  const handleSearch = () => {
    console.log(inputRef.current.value);
    setCurrentCity(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${TbilisiImage})` }}
    >
      <div className="absolute inset-0 bg-black/30  backdrop-blur-[2px]" />

      <div className="relative z-10 bg-stone-800/70 text-white p-4 w-250 rounded-md">
        <div className="flex items-center gap-x-3">
          <input
            type="text"
            placeholder="Search city..."
            ref={inputRef}
            className="border flex-1  rounded-md p-3"
          />
          <button
            className="px-4 py-3 text-stone-950 bg-white rounded-md cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {weather && (
          <>
            <div className="flex justify-between my-20">
              <div>
                {/* CITY AND TEMP */}
                <h2 className="text-5xl">{currentCity}</h2>
                <h2 className="text-7xl font-semibold mt-3">
                  {weather.weather[0].main} {weather.main.temp}°
                </h2>

                <p className="text-xl mt-3 text-stone-400">
                  {weather.weather[0].description}
                </p>
              </div>
              <div>
                <img
                  src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
                  alt="Clouds"
                  className="w-36 h-36"
                />
              </div>
            </div>
            feels like, humidity - wind speed, visibility
          </>
        )}
      </div>
    </section>
  );
}

export default App;
