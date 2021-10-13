function vetorAB(){
    vetorA=[1,2,3]
    vetorB=[4,5,6]
    tamanh0=vetorA.length

    for(i=0;i<vetorA.length;i++){
        vetorA.splice(0,0,vetorB.pop())
        vetorB.splice(0,0,vetorA.pop())
    }
    console.log(vetorA)
    console.log(vetorB)
}vetorAB()