const button = document.getElementById("button");
const input = document.getElementById("input");
const form = document.getElementById("form");
const tableData = document.getElementById('tbody');
const myWeatherData = document.getElementById('myWeatherInfo');
const myWeatherButton = document.getElementById('myWeatherButton');
let streets, map;
let activeData = [];
if (localStorage.getItem("WeatherTable") != null) {
    activeData = JSON.parse(localStorage.getItem("WeatherTable"));
    for (let i = 0; i < activeData.length; i++) {
        fetchWeather(activeData[i].city)//updating temperature for localSotrage
            .then(info => {
                activeData[i] = {
                    city: info.location.name,
                    country: info.location.country,
                    temperature: info.current.temperature,
                    temperatureF: (info.current.temperature * 1.8) + 32
                }
                const row = `<tr>
            <td>${activeData[i].city}</td>
            <td>${activeData[i].country}</td>
            <td>${activeData[i].temperature}</td>
            <td>${activeData[i].temperatureF}</td>
        </tr>`
                tableData.innerHTML = tableData.innerHTML + row

            })
    }
}


function showPosition(position) {
    // console.log("Latitude: " + position.coords.latitude +
    //     " Longitude: " + position.coords.longitude
    // )
    return fetch(`http://api.weatherstack.com/current?access_key=0d7fc2d94bc4c64b3a88c7695755934c&query=${position.coords.latitude},${position.coords.longitude}`)
        .then(response => response.json()).then(info => {
            myWeatherData.innerHTML = ''
            const [city, country, temperature, temperatureF] = [info.location.name, info.location.country, info.current.temperature, (info.current.temperature * 1.8) + 32]
            myWeatherData.innerHTML = `
    <p>Местонахождение: ${city} Температура по Цельсию: ${temperature}  Температура по Фаренгейту: ${temperatureF}</p>`
        })
}

function fetchWeather(query) {
    return fetch(`http://api.weatherstack.com/current?access_key=0d7fc2d94bc4c64b3a88c7695755934c&query=${query}`)
        .then(response => response.json())
}

function fetchMap(lat, lon) {
    return fetch(`https://eu1.locationiq.com/v1/reverse.php?key=2abdae3e44d36b&lat=${lat}&lon=${lon}&format=json`)
        .then(response => response.json())
}
function mySubmit(e) {
    e.preventDefault();
}
form.onsubmit = mySubmit;
const clear = document.getElementById("clear");
button.addEventListener("click", () => {

    fetchWeather(input.value)
        .then(info => {
            let existingCity = activeData.find(
                (element) => element.city == info.location.name
            );
            if (existingCity == null) {
                activeData.push({
                    city: info.location.name,
                    country: info.location.country,
                    temperature: info.current.temperature,
                    temperatureF: (info.current.temperature * 1.8) + 32
                }
                )
            }
            localStorage.setItem("WeatherTable", JSON.stringify(activeData));
            tableData.innerHTML = ''
            activeData.forEach((value) => {
                const [city, country, temperature, temperatureF] = [value.city, value.country, value.temperature, value.temperatureF];
                const row = `<tr>
            <td>${city}</td>
            <td>${country}</td>
            <td>${temperature}</td>
            <td>${temperatureF}</td>
        </tr>`
                tableData.innerHTML = tableData.innerHTML + row
            })
            fetchMap(info.location.lat, info.location.lon)
                .then(info => {
                    if (map && streets) {
                        map.remove()
                    }

                    streets = L.tileLayer.Unwired({ key: '2abdae3e44d36b', scheme: "streets" });
                    map = L.map('map', {
                        center: [info.lat, info.lon],
                        zoom: 14,
                        scrollWheelZoom: false,
                        layers: [streets]
                    });

                    L.control.scale().addTo(map);
                    L.control.layers({
                        "Streets": streets
                    }).addTo(map);
                    L.marker([info.lat, info.lon]).addTo(map);
                });

        })

});


myWeatherButton.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(showPosition)

})






//locationiq : 2abdae3e44d36b
//weatherapp: 0d7fc2d94bc4c64b3a88c7695755934c
