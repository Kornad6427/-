const API_KEY = "74c21ae1dd0e2104a0d44f764b101835"
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        let temp = data.main.temp
        if (temp <= 6) {
            temp = `${temp}℃(Outside is cold)`
        } else if (temp <= 16) {
            temp = `${temp}℃(Outside is chill)`
        } else if (temp <= 26) {
            temp = `${temp}℃(Outside is warm)`
        }
        weather.innerText = `${data.weather[0].main} / ${temp}`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
