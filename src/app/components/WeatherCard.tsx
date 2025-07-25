// WeatherCard.tsx
import Image from "next/image"; // Pastikan Image dari Next.js diimpor
import TemperatureDisplay from "./TemperatureDisplay";

type Weather = {
  city?: string;
  temp_c?: number;
  temp_f?: number;
}

type WeatherCardProps = {
  weather?: Weather | null;
}

const WeatherCard = ({weather}: WeatherCardProps) => {
  return (
        <div className="text-center mb-10">
            <div className="flex justify-center items-center">
                {/* Lingkaran sebagai bungkusan */}
                <div className="relative flex justify-center items-center w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full shadow-lg">
                <Image
                    src="/image/cloud.png"
                    alt="Weather Icon"
                    width={80}
                    height={80}
                    className="absolute"
                />
                </div>
            </div>
            <h2 className="text-xl mb-1 mt-4 font-semibold">
                {weather?.city || "Unknown City"}
            </h2>
            <TemperatureDisplay tempC={weather?.temp_c} tempF={weather?.temp_f}/>
        </div>
  )
}

export default WeatherCard