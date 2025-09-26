let chave = "e1955fcdc6ee1b0a96da5c02d8e550b6";



function clique() {
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade);
    !cidade ? alert("coloque o nome da cidade") :buscarCidade(cidade); 
}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade + 
        "&appid=" +
        chave+
        "&lang=pt_br"+
        "&units=metric"

    ).then(res => res.json())

    console.log(dados);

    colocaNaTela(dados)

}

function colocaNaTela(dados) {
    document.querySelector(".nome-cidade").innerHTML= dados.name
    document.querySelector(".grau").innerHTML= dados.main.temp;
    document.querySelector(".desc").innerHTML = dados.weather[0].description;
    document.querySelector(".umid").innerHTML = dados.main.humidity + "%";


}