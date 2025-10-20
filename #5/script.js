const apiKey = 'febc81643e85583295ec851c71a75cf9';

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const weatherDiv = document.getElementById("weatherData");

      const country = data.sys.country;
      const timezoneOffset = data.timezone; // in seconds
      const localTime = new Date(Date.now() + timezoneOffset * 1000).toUTCString().slice(17, 25); // just HH:MM:SS

      weatherDiv.innerHTML = `
        <h2>${data.name}, ${country}</h2>
        <p><strong>Local Time:</strong> ${localTime}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      document.getElementById("weatherData").innerHTML = `<p>${error.message}</p>`;
    });
}
