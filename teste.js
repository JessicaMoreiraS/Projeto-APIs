const request = require('request')

//https://docs.awesomeapi.com.br/api-de-moedas
const moedas = 'USD-BRL,EUR-BRL,BTC-BRL'

// request(options, callback)
const options ={
    url: `https://economia.awesomeapi.com.br/last/${moedas}`,
    method:'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
}
const callback_todas_cotacoes = function(erro,res, body){
    let json = JSON.parse(body)
    console.log(json)
}

const callback_dolar = function(erro, res, body){
    let json = JSON.parse(body)
    cotacao = json.USDBRL['bid']
    dia = json.USDBRL['create_date']
    console.log('DOLAR = R$'+cotacao+'dia: '+dia)
}

request(options, callback_todas_cotacoes)