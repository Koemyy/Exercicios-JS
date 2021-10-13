function fatorial(numero){
    for(let i=numero;i>0;i--){
        numero*=i
        return numero
    }
}x = fatorial(5)
console.log(x)