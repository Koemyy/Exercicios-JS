function menorMaior(numeros){
    menor=numeros[0]
    maior=numeros[0]
    for(let i=0; i<numeros.length;i++){
        if(menor>numeros[i]){
            menor=numeros[i]
        }if(maior<numeros[i]){
            maior=numeros[i]
        }
    }
    console.log("Maior: "+maior)
    console.log("Maior: "+menor)
}menorMaior(10,20)