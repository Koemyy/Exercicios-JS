function triangulos (lado1,lado2,lado3){

    if(lado1+lado2>lado3 && lado1+lado3>lado2 && lado2+lado3>lado1){
        console.log("E um triangulo")
        if(lado1==lado2&&lado1==lado3){
            console.log("Equilatero")
        }else if(lado1==lado2 || lado2==lado3 || lado1==lado3){
            console.log("Isosceles")
        }else if(lado1!=lado2!=lado3){
            console.log("Escaleno")
        }
    }else{
        console.log("Nao e um triangulo")
    }
}
triangulos(4,6,8)