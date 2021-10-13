function notaMedia(cod, n1,n2,n3){
    if(n1>n2 && n1>n3){
        media=((n1*4+n2*3+n3*3)/10)
    }else if(n2>n1 && n2>n3){
        media=((n2*4+n1*3+n3*3)/10)
    }else{
        media=((n3*4+n1*3+n2*3)/10)
    }
    console.log("Seu codigo"+cod)
    console.log("1 Nota: "+n1, "2 Nota: "+n2, "3 Nota: "+n3)
    console.log("Media: "+media)
    if(media>=5){
    console.log("Aprovado!")
    }else{
    console.log("Reprovado")
    }   
}console.log(notaMedia(1,7,5,6))