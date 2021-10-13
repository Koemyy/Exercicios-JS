function aumentoSalario(planoTrabalho,salarioAtual){
    switch(planoTrabalho){
        case 'A':
            console.log(salarioAtual*=1.1)
            break
        case 'B':
            console.log(salarioAtual*=1.15)
            break
        case 'C':
            console.log(salarioAtual*=1.2)
            break
        default:
            console.log("Plano invalido")
            break
    }
}aumentoSalario('A',1000)