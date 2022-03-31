# Prueba Sebastian Martínez

## Prueba Front End

En el archivo [index.html](https://github.com/seba5dev/prueba-click-panda/blob/master/paises/index.html) se encuentra la primera prueba donde se muestran los países traídos desde la API [restcountries.eu](https://restcountries.com/) y los muestra en tarjetas.

El botón Random aleatoriza el orden de los países.

En la lista seleccionable se puede escoger cualquier país y al dar click en el botón Search se mostrará solo el país seleccionado.

La página web tiene estilos adaptados según la [imagen adjunta](https://miro.medium.com/max/700/1*MNCKTImyRp3xmnTwFeoYaw.png).

## Prueba Node.js

Se creó una API con Express con un método POST en el puerto 3000 y el path `/weather`. Esta API consulta a otra API de [RapidAPI - OpenWeatherMap](https://rapidapi.com/community/api/open-weather-map) enviando credenciales para acceder y consultar los datos, devolviéndolos en JSON.

### Como recibir datos desde el servidor

1. Abrir la consola.

2. Escribir `npm start`.

3. Ingresar desde Postman o la extensión REST Client y hacer una petición POST a la dirección `http://localhost:3000/weather` con el parámetro `"city": "nombreCiudad"` para recibir los datos como respuesta en JSON.
