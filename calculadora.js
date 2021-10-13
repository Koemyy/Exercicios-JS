function calculadora(numero1,operacao,numero2){
    switch(operacao){
        case '+':
            console.log(numero1+numero2)
            break
        case '-':
            console.log(numero1-numero2)
            break
        case '*':
            console.log(numero1*numero2)
            break
        case '/':
            console.log(numero1/numero2)
            break
        default:
            console.log("Digite uma operacao valida")
            break
    }   
}calculadora(4,'/',2)