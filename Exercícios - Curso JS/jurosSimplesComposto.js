function jurosSimples (capitalInicial1,taxaJuros1,tempoAplicacao1){
    return(capitalInicial1*taxaJuros1*tempoAplicacao1)
}
function jurosComposto(capitalInicial2,taxaJuros2,tempoAplicacao2){
    return(capitalInicial2*(1+taxaJuros2)**tempoAplicacao2)
} 

let resultado1 = jurosSimples(1200,2,10)
console.log(resultado1)
let resultado2 = jurosComposto(1400,10,100)
console.log(resultado2)