const KEY_NAME_GEOAUTH = "geoAuth";

function onGeoOk(position) {
   const KEY_WEATHER_API = "10f099193ca026a15b1300ddf24df101";
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const urlWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY_WEATHER_API}&units=metric`;
   let boolGeoAuth;

   fetch(urlWeatherAPI)
      .then(Response => Response.json())
      .then(json => {
         const temp = json.main.temp;
         const weather = json.weather[0].main;
         const humidity = json.main.humidity;
         const city = json.name;

         const spanCity = document.querySelector("#div_weather #city");
         const spanWeather = document.querySelector("#div_weather #weather");
         const spanHumidity = document.querySelector("#div_weather #humidity");

         //console.dir(spanCity, spanHumidity, spanWeather);

         spanCity.innerText = `${city} / `;
         spanWeather.innerText = `${weather} : ${temp}℃ / `;
         spanHumidity.innerText = `humidity : ${humidity}\%`;

      })
}
function onGeoErr() {
   alert("you can't get a weather information..");
}


// argument 1 : 정상시 실행될 함수 <- position 객체를 parameter로 받음
// argument 2 : 오류시 실행될 함수

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

