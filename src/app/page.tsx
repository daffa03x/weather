import Image from "next/image";
import Link from "next/link";

export default function WeatherApp() {
  // Mock weather data - in a real app, you would fetch this from an API
  const weatherData = {
    location: "Jakarta",
    temperature: 29,
    condition: "Partly Cloudy",
    feelsLike: 32,
    humidity: 76,
    windSpeed: 12,
    forecast: [
      { day: "Today", temp: 29, icon: "☁️" },
      { day: "Wed", temp: 30, icon: "🌤️" },
      { day: "Thu", temp: 28, icon: "🌧️" },
      { day: "Fri", temp: 29, icon: "⛅" },
      { day: "Sat", temp: 31, icon: "☀️" },
    ],
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Mobile container with fixed width */}
      <div className="w-full max-w-sm h-screen relative flex flex-col bg-gradient-to-b from-blue-400 to-blue-600 text-white font-[family-name:var(--font-geist-sans)] shadow-lg">
        {/* Header with search */}
        <header className="flex items-center justify-between p-5 pt-4 mb-2">
          <h1 className="text-2xl font-bold">DapWeather</h1>
          <div className="flex items-center bg-white/20 rounded-full px-3 py-2">
            <Image src="/image/search.png" alt="Search" width={16} height={16} className="mr-2" />
            <input type="text" placeholder="Search location" className="bg-transparent outline-none text-sm w-28" />
          </div>
        </header>

        {/* Scrollable content area */}
        <main className="flex-1 overflow-y-auto px-5 pb-24">
          {/* Current weather */}
          <div className="text-center mb-10">
            <h2 className="text-xl mb-1">{weatherData.location}</h2>
            <div className="flex justify-center items-center">
              <span className="text-6xl font-light">{weatherData.temperature}°</span>
              <Image src="/image/cloud.png" alt="Weather Icon" width={80} height={80} />
            </div>
            <p className="text-lg">{weatherData.condition}</p>
          </div>

          {/* Weather details */}
          <div className="bg-white/20 rounded-3xl p-5 mb-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <p className="text-sm opacity-80">Feels Like</p>
                <p className="text-lg font-semibold">{weatherData.feelsLike}°</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm opacity-80">Humidity</p>
                <p className="text-lg font-semibold">{weatherData.humidity}%</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm opacity-80">Wind</p>
                <p className="text-lg font-semibold">{weatherData.windSpeed} km/h</p>
              </div>
            </div>
          </div>

          {/* Forecast */}
          <div className="bg-white/20 rounded-3xl p-5">
            <h3 className="text-lg font-medium mb-4">5-Day Forecast</h3>
            <div className="space-y-4">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{day.day}</span>
                  <span className="text-xl">{day.icon}</span>
                  <span className="text-sm font-medium">{day.temp}°</span>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Fixed Navigation Footer */}
        <footer className="absolute bottom-0 left-0 right-0 px-5 pt-4 pb-2 bg-gradient-to-t from-blue-600 to-transparent">
          <div className="flex justify-around items-center bg-white/20 rounded-full py-3">
            <Link href="/" className="flex flex-col items-center">
              <Image src="/image/home.png" alt="Home" width={20} height={20} style={{ filter: "invert(1)" }} />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link href="/map" className="flex flex-col items-center">
              <Image src="/image/map.png" alt="Map" width={20} height={20} style={{ filter: "invert(1)" }} />
              <span className="text-xs mt-1">Map</span>
            </Link>
            <Link href="/forecast" className="flex flex-col items-center">
              <Image src="/image/forecasting.png" alt="Forecast" width={20} height={20} style={{ filter: "invert(1)" }} />
              <span className="text-xs mt-1">Forecast</span>
            </Link>
            <Link href="/settings" className="flex flex-col items-center">
              <Image src="/image/settings.png" alt="Settings" width={20} height={20} style={{ filter: "invert(1)" }} />
              <span className="text-xs mt-1">Settings</span>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
