function imparPar(numeros){
    pares=0;
    impares=0;
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]%2==0){
            pares++;
        }else{
            impares++;
        }
    }
    console.log("Numeros impares "+impares)
    console.log("Numeros pares "+pares)
}imparPar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
