function bissextos(ano){
    retorno=false;
    if(ano%4==0){
        retorno=true;
    }if(ano%100==0){
        retorno=false;
    }if(ano%400==0){
        retorno=true;
    }return retorno;
}variavel = bissextos(2000)
console.log(variavel)