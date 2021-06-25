$(document).ready(function () {





    //Submit button for city search
    $('.submitBtn').on('click', function (event) {
        event.preventDefault();
        var text = $('.weatherInput').val()
        console.log(text)
        weatherSearch(text)





    });



    // Store API Key Weather
    function weatherSearch(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=eaa146ecc747767afdb5b95a5561b7e4")
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                for (var i = 0; i < data.data.length; i++) {
                    var mainList = document.createElement("li");
                    mainList.textContent = data.data[i].name + " Wind:  " + data.data[i].wind + " Temp:  " + data.data[i].temp + " Humidity:  " + data.data[i].humidity;

                    mainArea.append(mainList)

                }

            })

                // .then(data => {
                //             console.log(data.data)
                //             for (var i = 0; i < data.data.length; i++) {
                //                 var mainList = document.createElement("li");
                //                 mainList.textContent = data.data[i].name + " Wind:  " + data.data[i].wind + " Temp:  " + data.data[i].temp + " Humidity:  " + data.data[i].humidity;

                //                 mainArea.append(mainList)
                //             }





                var cityNameElement = $('<p>');
                cityNameElement.text(city);

                $('.citySearch').append(cityNameElement);


            }
    // function oneCall(lon, lat) {
    //     fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&appid=eaa146ecc747767afdb5b95a5561b7e4")
    //         .then(response => response.json())
    //         .then(data => console.log(data));

    // };

    //$(".citySearch").append(data)


        })

    






