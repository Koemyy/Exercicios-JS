function pilhaVetor(){
    vetorPilha=[1,2,3,4,5]
    vetorAdiciona=[6,7,8,9,10]
    Array.prototype.push.apply(vetorPilha,vetorAdiciona)
    console.log(vetorPilha)
}pilhaVetor()