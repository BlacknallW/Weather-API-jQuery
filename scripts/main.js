$(document).ready(function() {
    const myForm = document.querySelector("#myForm")
    
    myForm.addEventListener('submit', onSubmit);

    function onSubmit(e) {
        e.preventDefault();
        let cityName = $("#getLocation").val()
        console.log(cityName)
        apiWeather(cityName)
    }
    
    const apiWeather = (cityName) => {$.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},US&units=imperial&appid=2f4580c1da2a1471787ee4c356181fd1`, function(data){
    console.log(data,);

    
    
    let mapCoords = `http://maps.google.com/maps?q=${data.coord.lat},${data.coord.lon}&output=embed`;
    let icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    let temp =  Math.round(data.main.temp);
    let weather = data.weather[0].main;
    let city = data.name;
    let windSpeed = data.wind.speed;
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;
    

    const dateConverter = (timestamp) => {
        let date = new Date (timestamp * 1000);
        let normalTime = `${date}`;
        return normalTime
    }
    
    $(".weather-container").append(`<p>City: ${city}</p>`)
    $('.weather-container').append(`<img src="${icon}">`);
    $('.weather-container').append(`<p>Sky Conditions: ${weather}</p>`);
    $(".weather-container").append(`<p>Current Temperature: ${temp}</p>`);
    $(".weather-container").append(`<p>Wind Speed(mph): ${windSpeed}</p>`);
    $(".weather-container").append(`<p>Sunrise Time: ${dateConverter(sunrise)}</p>`)
    $(".weather-container").append(`<p>Sunset Time: ${dateConverter(sunset)}</p>`)
    $('.weather-container').append(`<iframe src=${mapCoords}/>`);
    });
}
});