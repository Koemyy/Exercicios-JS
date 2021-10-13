function negativosVetor(numeros){
    total=0
    for(let i=0; i<numeros.length;i++){
        total+=numeros[i]
    }
    total/=numeros.length
    console.log("Media do vetor: " + total)
}negativosVetor([1,2,3,4,5,6,7,8,9,10])