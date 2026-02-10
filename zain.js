const apiKey = "27bb3da4d56580ebbf20cdb547dc985b";

function getWeather() {
    let city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name");
        return;}
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())// wait for server response, convert it to object
        .then(data => {
            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temp").innerText = "Temperature: " + data.main.temp + " °C";
            document.getElementById("weather").innerText = "Weather: " + data.weather[0].description;
            // alert(JSON.stringify(data));
        })       }
