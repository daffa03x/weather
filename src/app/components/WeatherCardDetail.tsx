import WeatherDetail from "./WeatherDetail"

type WeatherDetailProps = {
    feel_like?: number,
    humidity?: number,
    wind_kph?: number
}

const WeatherCardDetail = ({feel_like, humidity, wind_kph}: WeatherDetailProps) => {
    return (
        <div className="bg-white/20 rounded-3xl p-5 mb-8">
            <div className="grid grid-cols-3 gap-4">
                <WeatherDetail title="Feels Like" value={feel_like}/>
                <WeatherDetail title="Humidity" value={humidity}/>
                <WeatherDetail title="Wind" value={wind_kph}/>
            </div>
        </div>
    )
}

export default WeatherCardDetail