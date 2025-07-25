type TemperatureDisplayProps = {
  tempC?: number; // Optional, karena bisa "--"
  tempF?: number; // Optional, karena bisa "--"
}

const TemperatureDisplay = ({tempC, tempF}: TemperatureDisplayProps) => {
  return (
    <>
        <div className="flex justify-center items-center">
            <span className="text-6xl font-light">
                {tempC ?? "--"}°C
            </span>
        </div>
        <p className="text-lg">{tempF ?? "--"}°F</p>
    </>
  )
}

export default TemperatureDisplay