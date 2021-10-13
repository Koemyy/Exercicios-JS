function cedulas(valor){
    print = ""
    if(Math.trunc(valor/100)>0){
        print += (Math.trunc(valor/100) + " nota(s) de R$100 ")
        valor -= Math.trunc(valor/100) * 100
    }
    if(Math.trunc(valor/50)>0){
        print += (Math.trunc(valor/50) + " nota(s) de R$100 ")
        valor -= Math.trunc(valor/50) * 50
    }
    if(Math.trunc(valor/100)>0){
        print += (Math.trunc(valor/10) + " nota(s) de R$100 ")
        valor -= Math.trunc(valor/10) * 10
    }
    if(Math.trunc(valor/100)>0){
        print += (Math.trunc(valor/5) + " nota(s) de R$100 ")
        valor -= Math.trunc(valor/5) * 5
    }
    if(valor>0){
        print += (valor + " nota(s) de R$1")
    }
    console.log(print)
}
cedulas(18)