import React, { useEffect, useRef, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState(() => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  });
  const InputRef = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const getWeather = async (param) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );
      const data = await res.json();
      if (data.cod && data.cod === "404") {
        setError({ ...data });
      } else {
        setWeatherData(data);
        setError(null);
      }
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  const handleGetWeather = (e) => {
    e.preventDefault();
    getWeather(InputRef.current.value);
  };

  return (
    <section className="w-full min-h-[50vh] p-4 pt-24 flex items-start justify-center">
      <div className="w-full max-w-[500px]  bg-yellow-200 p-4 rounded-xl border border-black ">
        <form
          onSubmit={handleGetWeather}
          className="w-full flex sm:flex-row flex-col gap-4 mb-4 "
        >
          <input
            ref={InputRef}
            type="text"
            placeholder="search..."
            className="w-full sm:min-w-[340px] border border-black rounded-md px-2 py-1"
          />
          <button className="bg-blue-600 px-2 py-1 text-white w-full rounded-md ">
            Search
          </button>
        </form>
        {loading && <p className="text-center">Loading...</p>}
        {error && !loading && (
          <div className="text-center">
            <p>{error.cod}</p>
            <p>{error.message}</p>
          </div>
        )}
        {weatherData && !loading && error === null && (
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className="text-lg font-serif capitalize text-center ">
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </p>
            <div className="text-center flex flex-col gap-1">
              <p className="text-sm capitalize ">{date}</p>
              <p className="text-3xl font-semibold ">
                {weatherData.main?.temp}
              </p>
              <p className="text-sm ">{weatherData.weather[0]?.description}</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 text-center">
              <div>
                <p className="text-lg font-semibold">
                  {weatherData.wind?.speed}
                </p>
                <p className="text-sm">wind speed</p>
              </div>
              <div>
                <p className="text-lg font-semibold">
                  {weatherData.main?.humidity}
                </p>
                <p className="text-sm">humidity</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Weather;
