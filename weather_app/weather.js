const apiKey = "PASTE_YOUR_API_KEY_HERE";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

let searchBtn = document.querySelector(".search button");
let searchBox = document.querySelector(".search input");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if(data.weather[0].main == "Snow") {
            weatherIcon.src == "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        if(searchBox.value.trim() === "") {
            return;
        }
        checkWeather(searchBox.value);
    }
});