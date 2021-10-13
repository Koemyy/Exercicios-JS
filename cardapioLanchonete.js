function lancheZe(codigoItem,quantidade){
    switch(codigoItem){
        case 100:
            console.log(3*quantidade)
            break
        case 200:
            console.log(4*quantidade)
            break
        case 300:
            console.log(5.50*quantidade)
            break
        case 400:
            console.log(7.50*quantidade)
            break
        case 500:
            console.log(3.50*quantidade)
            break
        case 600:
            console.log(2.80*quantidade)
            break
        default:
            console.log("Codigo Invalido")
    }
}lancheZe(200,3)