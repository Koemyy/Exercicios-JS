function vendaCarros(carros){
    switch(carros){
        case "hatch":
            console.log("Compra efetuada com sucesso")
            break
        case "sedans":
        case "motocicletas":
        case "caminhonetes":
            console.log("Tem certeza que nao prefere este modelo?")
            break
        default:
            console.log("Nao trabalhamos com este tipo de automovel aqui")
    }
}vendaCarros("hatch")