function alertaErro(){
    swal ({
      title: 'Ops,',
      text: 'Digite um lugar válido',
      icon: 'warning',
      button: true,
      buttonColor: '#3085d6',
      cancelButtonColor: '#d33',
      buttonText: 'Yes, delete it!'
    })
}


//O codigo usa a biblioteca Axios para realizar uma requisição HTTP a API da OpenWeatherMap para obter a previsao do tempo
//esta linha define uma funcao assincrona, isso significa que a funcao pode esperar por uma resposta da Api.
async function getWeather(){

    var localizacao = document.getElementById("localizacao").value;

    //Em caso de erro
    axios.get('https://api.openweathermap.org/data/2.5/weather?q='+localizacao+'&units=metric&appid=64ed82577ced7f69cb1687f0ce536131',)
    .catch(error => {
        if (error.response.status === 404) {
            //console.log(error.response.data);
            if(error.response.data.cod == 404){
                document.getElementById("localizacao").value=""
                alertaErro()
                return;
            }
        }
    });

    //Nesta linha estamos fazendo uma chamada a AOI usando a biblioteca Axios. A URL inclui informacoes de localizacao (Mogi das Cruzes) e a unidade de medida (Celsios = metric) e a chave da API (API-KEY = appid=...).
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q='+localizacao+'&units=metric&appid=64ed82577ced7f69cb1687f0ce536131');

    //Aqui estamos extraindo a temperatira atual (Celsius) da resposta de API e armazenando na variavel tempCelsius
    const tempCelsius = response.data.main.temp;
    const sensacaoTermica = response.data.main.feels_like;
    const tempMax = response.data.main.temp_max
    const tempMin = response.data.main.temp_min
    const humidade = response.data.main.humidity

    document.getElementById("temperatura").innerHTML = `<p>A temperatura atual de ${response.data.name} é de ${tempCelsius}°C.</p><p>Sensação térmica: ${sensacaoTermica}°C.</p><p>Temperatura Maxima: ${tempMax}°C.</p><p>Temperatura Minima: ${tempMin}°C.</p><p>Humidade: ${humidade}%</p>`;

    console.log(response)
}

//${/*`*/}

//buscar pais
function buscarNoMapa(){
    var localizacao = document.getElementById("localizacao").value;

    /*'https://www.google.com/maps/place/' // link para o google maps*/
    window.open('https://earth.google.com/web/search/'+localizacao);
}