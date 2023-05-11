var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

const apiKey = "6a675a69d5cb56ad2994d1356bb0dbe5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbutton = document.getElementById("search-button");
const icon = document.getElementById("icon");

async function fetchh(namee){
    const response = await fetch(apiUrl + namee + `&appid=${apiKey}`);

        if (response.status == 404) {
            document.getElementById("error").style.display = "block";
            document.getElementById("card").style.display = "none";
        } else {
            const data = await response.json();
            const cname = document.getElementById("cname");
            cname.innerHTML = data.name;
            const temp = document.getElementById("temp");
            temp.innerHTML = Math.round(data.main.temp) + "°C";
            const text = document.getElementById("condition");
            text.innerHTML = data.weather[0].description;
            console.log(data.weather[0].description);
            const windspeed = document.getElementById("wind");
            windspeed.innerHTML = data.wind.speed + " km/h";
            const humid = document.getElementById("humid");
            humid.innerHTML = data.main.humidity;
            const pressure = document.getElementById("press");
            pressure.innerHTML = data.main.pressure;

            if (data.weather[0].main == "Clouds") {
                icon.src = "cloudy.png";
            } else if (data.weather[0].main == "Clear") {
                icon.src = "clear.png";
            } else if (data.weather[0].main == "Rain") {
                icon.src = "rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                icon.src = "drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                icon.src = "mist.png";
            } else if (data.weather[0].main == "Snow") {
                icon.src = "snow.png";
            }
        }
}
fetchh("Fort Smith");

searchbutton.addEventListener("click", async function(e) {
    e.preventDefault();
    const searchfield = document.getElementById("search-bar").value;
    console.log(searchfield)
    const response = await fetch(apiUrl + searchfield + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.getElementById("error").style.display = "block";
        document.getElementById("card").style.display = "none";
    } else {
        const data = await response.json();
        const cname = document.getElementById("cname");
        cname.innerHTML = data.name;
        const temp = document.getElementById("temp");
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        const text = document.getElementById("condition");
        text.innerHTML = data.weather[0].description;
        console.log(data.weather[0].description);
        const windspeed = document.getElementById("wind");
        windspeed.innerHTML = data.wind.speed + " km/h";
        const humid = document.getElementById("humid");
        humid.innerHTML = data.main.humidity;
        const pressure = document.getElementById("press");
        pressure.innerHTML = data.main.pressure;

        if (data.weather[0].main == "Clouds") {
            icon.src = "cloudy.png";
        } else if (data.weather[0].main == "Clear") {
            icon.src = "clear.png";
        } else if (data.weather[0].main == "Rain") {
            icon.src = "rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            icon.src = "drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            icon.src = "mist.png";
        } else if (data.weather[0].main == "Snow") {
            icon.src = "snow.png";
        }
    }
});
d