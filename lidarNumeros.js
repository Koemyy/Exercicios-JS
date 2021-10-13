function lidandoNumeros(n1=0.1, n2=0.2){
    return(n1+n2).toFixed(2).toString().replace(".", ",")
}

let x= lidandoNumeros()
console.log("R$",x)