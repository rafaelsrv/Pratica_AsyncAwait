fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(response=>{
    return response.json()
}).then(nomes=>{
    return nomes.USDBRL
    
}).then(dados=>{
    document.getElementById("span").innerHTML = dados.name//
    document.getElementById("div").innerHTML = dados.bid//Tipo de moeda
})
//
