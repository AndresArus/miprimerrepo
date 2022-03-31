const axios =  require('axios');
const kelvinToCelsius = require('kelvin-to-celsius');
let urlApiIP = `https://api.ipify.org/?format=json`;
let urlApiClima = `https://api.openweathermap.org/data/2.5/weather?lon=LONGITUD&lat=LATITUD&appid=6966d6b283a10ad3c2ac309a9ec4e348`;

axios.get(urlApiIP)

  .then(function (response) {
    const {data:{ip}} = response;
    //console.log(ip);
    let urlApiInfo = `https://ipinfo.io/${ip}/geo`;
    // handle success
    axios.get(urlApiInfo).then(function ({data:{loc}}) {
            //console.log(loc.split(','));
            let [longitud, latitud] = loc.split(',')
            console.log(longitud, latitud);

    urlApiClima = urlApiClima.replace("LONGITUD",longitud);
    urlApiClima = urlApiClima.replace("LATITUD",latitud);

    console.log(urlApiClima)
    axios.get(urlApiClima).then(function ({data}) {
        console.log(data)
        const {main: {temp}} = data;
        console.log("temp",temp);
      const convert = kelvinToCelsius(temp);
        })})

        .catch(function (error) {
        // handle error
        console.log(error);
        });
  })
  .catch(function (error) {
      //handle error
      console.log(error);
  })