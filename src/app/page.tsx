"use client";

import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import AppLayout from "./layouts/AppLayout";
import WeatherCard from "./components/WeatherCard";
import WeatherCardDetail from "./components/WeatherCardDetail";
import toast, { Toaster } from 'react-hot-toast';

type IpApiResponse = {
  latitude: string;
  longitude: string;
  city: string;
  ip: string;
  error?: any;
};

type WeatherApiResponse = {
  location: { name: string };
  current: {
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    wind_kph: number;
    humidity: number;
  };
  error?: { message: string };
};

type Weather = {
  temp_c: number;
  temp_f: number;
  city: string;
  feel_like: number;
  wind_kph: number;
  humidity: number;
};

export default function WeatherApp() {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Mulai dengan true

  // Fungsi untuk mengambil data kota
  const fetchCity = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data: IpApiResponse = await response.json();

      if (!data || data.error || !data.latitude || !data.longitude) {
        toast.error("Gagal mengambil data lokasi dari IP.");
        throw new Error("Gagal mengambil data lokasi dari IP.");
      }

      await fetchCurrentWeather(data.city);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Gagal mengambil data lokasi dari IP.");
      setLoading(false);
    }
  };

  // Fungsi untuk mengambil data cuaca
  const fetchCurrentWeather = async (city: string) => {
    if (!city) {
      setLoading(false);
      toast.error("Nama kota tidak valid.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${encodeURIComponent(city)}&aqi=no`
      );
      if(response.status){
        setLoading(false);
        return toast.error(response.statusText);
      }
      const weatherData: WeatherApiResponse = await response.json();

      if (!weatherData || weatherData.error || !weatherData.current) {
        setLoading(false);
        return toast.error(weatherData.error?.message || "Gagal mengambil data cuaca.");
      }

      setWeather({
        temp_c: weatherData.current.temp_c,
        temp_f: weatherData.current.temp_f,
        city: weatherData.location.name,
        feel_like: weatherData.current.feelslike_c,
        wind_kph: weatherData.current.wind_kph,
        humidity: weatherData.current.humidity,
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error instanceof Error ? error.message : "Gagal mengambil data cuaca.");
    }
  };

  useEffect(() => {
    // Validasi API key
    if (!key) {
      setLoading(false);
      toast.error("API key tidak ditemukan.");
      return;
    }

    fetchCity();
  }, [key]);

  if (loading) {
    return (
      <Loading/>
    );
  }

  return (
    <AppLayout>
      <Toaster position="top-right"/>
      <WeatherCard weather={weather}/>
      <WeatherCardDetail feel_like={weather?.feel_like} humidity={weather?.humidity} wind_kph={weather?.wind_kph}/>
      {/* Forecast */}
      <div className="bg-white/20 rounded-3xl p-5">
        <h3 className="text-lg font-medium mb-4">5-Day Forecast</h3>
        <div className="space-y-4">
          <p className="text-sm opacity-80">No forecast data available</p>
        </div>
      </div>
    </AppLayout>
  );
}