$(document).ready(function() {
    

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&units=imperial&appid=2f4580c1da2a1471787ee4c356181fd1", function(data){
    console.log(data);

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

    $(".city").append(city)
    $('.icon').attr("src", icon);
    $('.weather').append(weather);
    $(".temp").append(temp);
    $(".wind_Speed").append(windSpeed);
    
    $(".sunrise").append(dateConverter(sunrise))
    $(".sunset").append(dateConverter(sunset))

    $('.weather-container').append(`<iframe src=${mapCoords}/>`);

    console.log(icon)
    console.log(mapCoords)
    });

});