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
                // for (var i = 0; i < data.length; i++) {
                //     var mainList = document.createElement("li");
                //     mainList.textContent = data[i].name + " Weather:  " + data[i].weather + "  Wind: " + data[i].wind + " Main:  " + data[i].main;

                //     mainArea.append(mainList)

                let someVar = document.getElementById('someId')
                var mainList1 = document.createElement("li");
                var mainList2 = document.createElement("li");
                var mainList3 = document.createElement("li");
                var mainList4 = document.createElement("li");
                //code to get weather data
                someVar.append(mainList1, mainList2, mainList3, mainList4);



                        






                var cityNameElement = $('<p>')
                cityNameElement.text(city);

                $('.citySearch').append(cityNameElement);

            
            }
        
        
})











