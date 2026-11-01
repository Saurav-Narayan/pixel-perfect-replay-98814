import { useState, useEffect } from "react";

export interface WeatherData {
  current: {
    temp: number;
    rainChance: number;
    condition: number;
  };
  daily: {
    date: string;
    maxTemp: number;
    minTemp: number;
    rainProb: number;
    condition: number;
  }[];
}

export function useWeather(city: string) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    async function fetchWeather() {
      setLoading(true);
      setError(null);
      try {
        // 1. Geocoding
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            city
          )}&count=1&language=en&format=json`
        );
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          throw new Error("City not found");
        }

        const { latitude, longitude } = geoData.results[0];

        // 2. Forecast
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`
        );
        const weatherData = await weatherRes.json();

        setData({
          current: {
            temp: weatherData.current.temperature_2m,
            rainChance: weatherData.daily.precipitation_probability_max[0],
            condition: weatherData.daily.weather_code[0],
          },
          daily: weatherData.daily.time.map((time: string, i: number) => ({
            date: time,
            maxTemp: weatherData.daily.temperature_2m_max[i],
            minTemp: weatherData.daily.temperature_2m_min[i],
            rainProb: weatherData.daily.precipitation_probability_max[i],
            condition: weatherData.daily.weather_code[i],
          })),
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch weather");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return { data, loading, error };
}
