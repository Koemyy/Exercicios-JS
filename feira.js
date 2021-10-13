function feiraFrutas(frutas){
    switch(frutas){
        case "maca":
            console.log("Nao vendemos esta fruta aqui")
            break
        case "kiwi":
            console.log("Estamos com escassez de kiwi")
            break
        case "melancia":
            console.log("Aqui esta, sao 3 reais o quilo")
            break
        default:
            console.log("Nao temos essa fruta")
            break
    }
}feiraFrutas("kiwi")