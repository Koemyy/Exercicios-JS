function bhaskara (ax2,bx,c){
    delta=bx**2-4*ax2*c
    if(delta<0){
        return("Delta e negativo")
    }else{
        x1=(-bx+delta**(1/2))/(2*ax2)
        x2=(-bx-delta**(1/2))/(2*ax2)
        return([x1,x2])
    }
}
let resultado= bhaskara(3,0,-27)
console.log(resultado)

    
