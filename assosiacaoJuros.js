function juros(mes,preco){
    return preco*(1+0.05)**(mes-1);
}juros(1,100)
console.log(juros(3,100))