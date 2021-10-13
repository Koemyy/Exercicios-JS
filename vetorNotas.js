function vetorNotas(notas){
    console.log(notas)
    for(i=0;i<notas.length;i++){
        if(notas[i]<5){
            notas.splice(i,1,"D")
        }
        else if(notas[i]<7){
            notas.splice(i,1,"C")
        }
        else if(notas[i]<9){
            notas.splice(i,1,"B")
        }
        else{
            notas.splice(i,1,"A")
        }
    }console.log(notas)
}vetorNotas([1,2,3,4,5,6,7,8,9,10])