const axios = require("axios");
const express = require("express");
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
// Recibe una peticion y devuelve una respuesta
app.post("/weather", (req, res) => {
  //Recibe city de los parametros
  const { city } = req.body;
  // Si city existe
  if (city) {
    // Datos de la peticion a la api de openweather
    const options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/find",
      // parametro de la ciudad
      params: {
        q: city,
      },
      // credenciales de la api
      headers: {
        "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
        "X-RapidAPI-Key": "db1d13ee8emsh8de4da56c3ae7e6p138cadjsn876a4b63140e",
      },
    };
    // Hace la peticion
    axios
      .request(options)
      // Si la peticion es correcta devuelve la respuesta
      .then(function (response) {
        res.send(response.data);
      })
      // Si la peticion falla devuelve un error
      .catch(function (error) {
        console.error(error);
      });
  } else {
    // Si city no existe devuelve un error 400
    res.status(400).json({
      error: "Missing city",
    });
  }
});

// Server
app.listen(app.get("port"), () => {
  console.log("Server open in port " + app.get("port"));
});
