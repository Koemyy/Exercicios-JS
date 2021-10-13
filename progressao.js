function progressaoArit(n,a1,r){
    //an =a1+(n-1)*r
    sequencia=[a1]
    soma=a1

    for(i=2;i<=n;i++){
        sequencia=sequencia.concat(a1+(i-1)*r)
        soma+=a1+(i-1)*r
    }
    console.log(sequencia)
    console.log(soma)
}

function progressaoGeom(n,a1,r){
    an=a1*r**(n-1)
    sequencia=[a1]
    soma=a1

    for(i=2;i<=n;i++){
        sequencia=sequencia.concat(a1*r**(i-1))
        soma+=a1*r**(i-1)
    }
    console.log(sequencia)
    console.log(soma)
}progressaoArit(100,1,100)
progressaoGeom(5,4,3)