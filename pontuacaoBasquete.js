function basquete (jogos){
    pontuacao=jogos.split(" ")
    recorde = parseInt(pontuacao[0])
    menor = parseInt(pontuacao[0])
    quantidade = 0;
    piorRecorde = 0;
    for (let i = 1; i < pontuacao.length; i++) {
        if(parseInt(pontuacao[i])>recorde){
            quantidade++;
            recorde=pontuacao[i]
        }
        if(parseInt(pontuacao[i])<menor){
            menor=pontuacao[i]
            piorRecorde=[i+1]
        }
    }
    return([quantidade,piorRecorde])
}
basquete("10 20 20 8 25 3 0 30 1")
console.log(quantidade,piorRecorde)