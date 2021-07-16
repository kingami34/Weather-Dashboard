$(document).ready(function () {

    // let someVar = document.getElementById('someId')
    // var mainList1 = document.createElement("li");
    // var mainList2 = document.createElement("li");
    // var mainList3 = document.createElement("li");
    // var mainList4 = document.createElement("li");
    // //code to get weather data
    // someVar.append(mainList1, mainList2, mainList3, mainList4)



    //Submit button for city search
    $('.submitBtn').on('click', function (event) {
        event.preventDefault();
        var text = $('.weatherInput').val()
        console.log(text)
        weatherSearch(text)

    })


    // Store API Key Weather
    function weatherSearch(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=eaa146ecc747767afdb5b95a5561b7e4")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                
                var displayMain = document.createElement("li");
                displayMain.textContent = data.main.feels_like + " Humidity: " + data.main.humidity + " Temp: " + data.main.temp;  

                mainArea.append(displayMain)

                var cityNameElement = $('<p>')
                cityNameElement.text(city);

                $('.citySearch').append(cityNameElement);

                var displayDay = document.createElement("card");
                displayDay.textContent = 
            
            
        })   
        // function weatherSearch(city) {
        //     fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=eaa146ecc747767afdb5b95a5561b7e4")
        //         .then(response => response.json())
        //         .then(data => {
        //             console.log(data)

        //         })
        //     }
})











