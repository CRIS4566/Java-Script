const API_KEY ="f71697cfcdb60b8ef8f75525dec4cc73"

function onGeoOk(position){
    const lat =position.coords.latitude;
    const lng =position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) =>response.json())
    .then((data) => {
        const weather =document.querySelector("#weather span:first-child");
        const city =document.querySelector("#weather span:last-child");
        city.innerText = data.name; 
        weather.innerText = `Weather: ${data.weather[0].main} / Temp: ${data.main.temp}℃`;
    });
}


function onGeoError(){
    alert("Can't find you. No Weather information for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
