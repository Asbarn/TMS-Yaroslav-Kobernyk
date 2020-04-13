const button=document.getElementById("button");
const input=document.getElementById("input");
const form=document.getElementById("form");
const tableData=document.getElementById('tbody');
let streets,map;
const store = new Map() ;

function fetchWeather(query){
    return fetch(`http://api.weatherstack.com/current?access_key=0d7fc2d94bc4c64b3a88c7695755934c&query=${query}`)
    .then(response=>response.json())
}

function fetchMap(lat,lon){
return fetch(`https://eu1.locationiq.com/v1/reverse.php?key=2abdae3e44d36b&lat=${lat}&lon=${lon}&format=json`)
.then(response =>  response.json())
}
function mySubmit(e){
    e.preventDefault();
}
form.onsubmit=mySubmit;
const clear=document.getElementById("clear");
button.addEventListener("click",()=>{
    
    fetchWeather(input.value)
    .then(info => {
        store.set(info.location.name, [info.location.name, info.location.country, info.current.temperature,(info.current.temperature*1.8)+32])
        tableData.innerHTML = ''
    store.forEach((value, key) => {
        const [city, country, temperature, temperatureF] = value
        const row = `<tr>
            <td>${city}</td>
            <td>${country}</td>
            <td>${temperature}</td>
            <td>${temperatureF}</td>
        </tr>`
        tableData.innerHTML = tableData.innerHTML + row
    })
     fetchMap(info.location.lat,info.location.lon)
      .then(info=>{
        if(map && streets){
            map.remove()}
        
           streets = L.tileLayer.Unwired({key: '2abdae3e44d36b', scheme: "streets"});
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
    





//locationiq : 2abdae3e44d36b
//weatherapp: 0d7fc2d94bc4c64b3a88c7695755934c
