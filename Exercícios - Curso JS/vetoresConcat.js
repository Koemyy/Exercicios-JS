let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['a', 'b', 'c', 'd']
let vetorDouble = [1.1, 1.2, 1.3, 1.4]

function vetoresConcat (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(vetoresConcat(vetorInteiro, vetorDouble))
console.log(vetoresConcat(vetorDouble, vetorString))