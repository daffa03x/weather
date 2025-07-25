
type weatherDetailProps = {
    title?: string,
    value?: number
}

const WeatherDetail = ({title, value}: weatherDetailProps) => {
    return (
        <div className="flex flex-col items-center">
            <p className="text-sm opacity-80">{title}</p>
            <p className="text-lg font-semibold">{value}°</p>
        </div>
    )
}

export default WeatherDetail