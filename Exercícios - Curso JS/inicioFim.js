function inicioFim(inicio,fim){
    if(inicio>fim){
        aux=inicio
        inicio=fim
        fim=aux
    }
    impares=[]
    for(i=inicio;i<=fim;i++){
        if(i%2!=0){
            impares=impares.concat(i)
        }
    }  
    console.log(impares)
}inicioFim(0,100)