require('dotenv').config()
const api_key = process.env.KEY
let lat, long;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    dataFetch(lat,long)
  });
}

let dataFetch = async (lat,long) => {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`
  );
  let data = await response.json();
  console.log(data)
  let {name ,main:{temp,temp_min,temp_max},wind:{speed}} = data
  console.log(name);
  let celsius =Math.floor(temp-273.15);
  let minC =Math.floor(temp_min-273.15);
  let maxC =Math.floor(temp_max-273.15);
  
  showData(name,celsius,minC,maxC,speed)
};

let showData = (name,temp,temp_min,temp_max,speed) =>{
    let dataHtml = `<div class="container d-flex justify-content-center align-items-center flex-column wrapper">
    <h4 class="text-light text-center mb-5">Currrent Location Temparature</h4>
    <h1 class="text-light text-center">${name}</h1>
    <h1 class="text-light m-5">${temp}°</h1>
    <div class="container text-light flex-row d-flex justify-content-between">
    <h6>${temp_min}°<sub>min</sub></h6>
    <h6>${speed}<small>m/s</small></h6>
    <h6>${temp_max}°<sub>max</sub></h6>`;
    document.querySelector('body').innerHTML=dataHtml;
}

