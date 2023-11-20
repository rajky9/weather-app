import { TiLocationArrow } from "react-icons/ti";

const kelvinToCelsius = (kelvin) => {
  return (kelvin - 273.15).toFixed(2);
};

const getWindDirection = (deg) => {
  return deg - 45 + 180;
};

const windScale = (deg) => {
  // N
  let wind = "";
  if (345 < deg && deg <= 15) {
    wind = "N";
  } else if (15 < deg && deg <= 35) {
    wind = "NNE";
  } else if (35 < deg && deg <= 55) {
    wind = "NE";
  } else if (55 < deg && deg <= 75) {
    wind = "ENE";
  } else if (75 < deg && deg <= 105) {
    wind = "E";
  } else if (105 < deg && deg <= 125) {
    wind = "ESE";
  } else if (125 < deg && deg <= 145) {
    wind = "SE";
  } else if (145 < deg && deg <= 165) {
    wind = "SSE";
  } else if (165 < deg && deg <= 195) {
    wind = "S";
  } else if (195 < deg && deg <= 215) {
    wind = "SSW";
  } else if (215 < deg && deg <= 235) {
    wind = "SW";
  } else if (235 < deg && deg <= 255) {
    wind = "WSW";
  } else if (255 < deg && deg <= 285) {
    wind = "W";
  } else if (285 < deg && deg <= 305) {
    wind = "WNW";
  } else if (305 < deg && deg <= 325) {
    wind = "NW";
  } else if (325 < deg && deg <= 345) {
    wind = "NNW";
  }
  return wind;
};

const WeatherInfo = ({ data }) => {
  const windDeg = getWindDirection(data?.wind?.deg);
  console.log("asdasd", data)
  return (
    <>
      {data?.cod == 404 && (
        <div className="text-white text-center border-2 shadow-lg shadow-gray-900 bg-black/50 rounded-lg p-4 border-black">
          <p className="text-2xl pb-4">Oooops, {data.message}</p> 
          <p className="text-md">Try to type exact name.</p>
        </div>
      )}
      {data?.cod == 200 && (
        <div className="text-white border-2 shadow-lg shadow-gray-900 bg-black/50 rounded-lg p-4 border-black">
          <div>
            <h2 className="text-2xl">
              {data.name}, {data.sys.country}
            </h2>
            <p className="flex  items-center">
              <img src="https://openweathermap.org/img/wn/10d.png" alt="/" />
              <span className="text-3xl font-bold">
                {kelvinToCelsius(data?.main.temp)} °C
              </span>
            </p>
            <div className="font-medium text-sm text-gray-200">
              Feels like: {kelvinToCelsius(data?.main.feels_like)}°C
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <div>
                <div className="text-xl">Weather: {data?.weather[0].main}</div>
                <div>Description: {data?.weather[0].description}</div>
              </div>
              <div className="flex flex-col justify-end border-orange-600 border-l-2 pl-2">
                <div className="flex items-center">
                  Wind:{" "}
                  <span style={{ transform: `rotate(${windDeg}deg)` }}>
                    <TiLocationArrow size={20} />
                  </span>
                  {data.wind.speed.toFixed(1)}m/s &nbsp;
                  <span>{windScale(data?.wind.deg)}</span>
                </div>
                <div>Humidity: {data?.main.humidity}%</div>
                <div>Visibility: {(data?.visibility / 1000).toFixed(1)}km</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;
