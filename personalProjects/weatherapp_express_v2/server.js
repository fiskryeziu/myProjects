if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const KEY = process.env.KEY;
const axios = require("axios");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/weather", (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${req.body.latitude}&lon=${req.body.longitude}&appid=${KEY}`;
  axios({
    url: url,
    responseType: "json",
  }).then((data) => res.json(data.data));
});

//api for the city name
// app.post('/weather',(req,res) =>{
//    const url =`https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${KEY}`
//     axios({
//         url:url,
//         responseType:'json'
//     }).then(data => res.json(data.data))
// })

app.listen(3000, () => {
  console.log("Hi!");
});
