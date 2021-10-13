function negativosVetor(numeros){
    negativos=0
    for(let i=0; i<numeros.length;i++){
        if(numeros[i]<0){
            negativos++
        }
    }
    console.log("Negativos: "+negativos)
}negativosVetor([-5,-4,-3,-2,-1,0,1,2,3,4,5])