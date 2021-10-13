function intervaloDentro(numeros){
    dentro=0;
    fora=0;
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]<=20&&numeros[i]>=10){
            dentro++;
        }else{
            fora++;
        }
    }
    console.log("Numeros dentro do intervalo= "+dentro)
    console.log("Numeros fora do intervalo= "+fora)
}intervaloDentro([5,6,7,8,9,10,11,12,13,14,15])
