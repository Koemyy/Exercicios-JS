function notas(nota){
    if(nota>=38){
        for(let i = 1; i<4; i++){
            if ((nota+i)%5==0){
                nota += i
                break;
            }
        }
    }
    console.log(nota)

    if(nota>=40){
        console.log("Aprovado")
    }else{
        console.log("Reprovado")
    }
}notas(51)