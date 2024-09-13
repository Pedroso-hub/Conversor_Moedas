
const country_code = [
    { value: "AR", label: "ARS" },
    { value: "BO", label: "BOB" },
    { value: "BR", label: "BRL" },
    { value: "CL", label: "CLP" },
    { value: "CO", label: "COP" },
    { value: "EC", label: "USD" },
    { value: "GY", label: "GYD" },
    { value: "PY", label: "PYG" },
    { value: "PE", label: "PEN" },
    { value: "SR", label: "SUR" },
    { value: "UY", label: "UYU" },
    { value: "VE", label: "VEB" },
    { value: "US", label: "USD" },
    { value: "SV", label: "USD" },
    { value: "PA", label: "PAB" },
    { value: "DE", label: "EUR" },
    { value: "FR", label: "EUR" },
    { value: "ES", label: "EUR" },
    { value: "IT", label: "EUR" },
    { value: "PT", label: "EUR" },
    { value: "IE", label: "EUR" },
    { value: "AT", label: "EUR" },//FIZ ATE AQUI
    { value: "GR", label: "GRC" },
    { value: "BE", label: "BEL" },
    { value: "FI", label: "FIN" },
    { value: "JP", label: "JPN" },
    { value: "GB", label: "GBR" },
    { value: "FK", label: "FLK" },
    { value: "GI", label: "GIB" },
    { value: "AU", label: "AUS" },
    { value: "KI", label: "KIR" },
    { value: "NR", label: "NRU" },
    { value: "CA", label: "CAN" },
    { value: "CH", label: "CHE" },
    { value: "LI", label: "LIE" },
    { value: "CN", label: "CHN" },
    { value: "NZ", label: "NZL" },
    { value: "CK", label: "COK" },
    { value: "NU", label: "NIU" },
    { value: "HK", label: "HKG" }
];





let opcoes = document.querySelectorAll(".opcao");
let select = document.querySelector("#select-pais");
let select2 = document.querySelector("#select-ps");
let img = document.querySelector("#imagem1");

let img2 = document.querySelector("#imagem2");

let botaoTrocar = document.querySelector(".botton-swap");
let botaoConversao = document.querySelector(".button");
let moedaDe = pegarCodigoDaMoeda(select.value);
let moedaPara = pegarCodigoDaMoeda(select.value);
taxaConversão = null;


select.addEventListener("change", ()=> {
    img.src = `https://flagsapi.com/${select.value}/flat/64.png`;
    moedaDe = pegarCodigoDaMoeda(select.value);
    taxaConversao = pegarTaxaConversao(moedaDe, moedaPara)

    


});
select2.addEventListener("change", ()=> {
    img2.src = `https://flagsapi.com/${select2.value}/flat/64.png`;
    moedaPara = pegarCodigoDaMoeda(select.value);


});



botaoTrocar.addEventListener("click", ()=>{
    let selectTemp = select.value;
    select.value = select2.value;
    select2.value = selectTemp;
    let imgTemp = img.src;
    img.src = img2.src;
    img2.src = imgTemp;
})


async function pegarTaxaConversao (moedaDe, moedaPara) {
    let moedasRequest = moedaDe+"-"+moedaPara;
    let url = "https://economia.awesomeapi.com.br/last/"+moedasRequest;
    console.log(url);
    let moedasJson = moedaDe+moedaPara;
    console.log(moedasJson);
    const request = new Request(url) ;
    let taxaConversao;
    const result = await fetch(request)
    console.log(result);
    dados = await result.json()
    console.log(dados);
    taxaConversao = dados[moedasJson].ask;
    

    return taxaConversao;
}





for (let i = 0; i<country_code.length; i++){
    console.log(country_code[i].value);
}


function pegarCodigoDaMoeda(SiglaPais){
    for (let i = 0; i<country_code.length; i++){
        if(country_code[i].value === SiglaPais){
            return country_code[i].value;
        }

    }
    return undefined;

}



console.log(pegarTaxaConversao("USD", "BRL"));



//desafio: fazer com que, com base na sigla do pais que está escolhido, eu obtenha o codigo de moeda dele
//para isso acho que tenho que criar um grande objeto












