$(document).ready(function () {
  //Submit button for city search
  $(".submitBtn").on("click", function (event) {
    event.preventDefault();
    var text = $(".newWeather")
    console.log(text);
    weatherInput(text);
  });
});

// Store API Key Weather
function weatherInput(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=eaa146ecc747767afdb5b95a5561b7e4")
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }
        
