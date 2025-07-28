
//this step editing
const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => (
  <div className="weather-forecast">
    <h2>{day}</h2>
    <img src={img} alt={imgAlt} />
    <p>{conditions} {time}</p>
  </div>
);

export default WeatherForecast;
