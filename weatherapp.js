const apiKey = "08d5be9acdb690b384b75638f470ea6e";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric\
// &q=Davis&appid=08d5be9acdb690b384b75638f470ea6e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial\
&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // const response = await fetch(apiUrl);
    var data = await response.json();

    // console.log(data);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " mph";
    
        const realWeather = data.weather[0].main.toLowerCase();
        // need a 'Haze' image
        weatherIcon.src = "images/" + realWeather + ".png";
    
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

});

// checkWeather("Davis");


// async, fetch()
// https://api.openweathermap.org/data/2.5/weather?q=Davis&appid=08d5be9acdb690b384b75638f470ea6e&units=metric