function funcaoUm(vetor,numero){
    for(i=0;i<vetor.length;i++){
        vetor[i]*=numero
    }
    return vetor
}

function funcaoDois(vetor,numero){
    if(numero>5){
        for(i=0;i<vetor.length;i++){
            vetor[i]*=numero
        }
        return vetor
    }
}console.log(funcaoUm([1,2,3,4,5],2))
