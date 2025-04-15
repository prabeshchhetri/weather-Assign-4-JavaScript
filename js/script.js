

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("student-info").textContent =
    "Student ID: 200603366 | Name: Prabesh Chhetri";
});

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Please enter a city name");

  const apiKey = "d9277bbcaccef88644196beff6900cad"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const weatherDiv = document.getElementById("weatherResult");
      weatherDiv.innerHTML = `
        <h2>🌍 Weather in ${data.name}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      `;
    })
    .catch(err => {
      document.getElementById("weatherResult").innerHTML = `<p style="color: red;">${err.message}</p>`;
    });
}
