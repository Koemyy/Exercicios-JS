function duasStrings(p1, p2){
    a1 = []
    a2 = []

    for(i = 0; i<p1.length; i++){
        aux = true
        for(j = 0; j<=a1.length; j++){
            if(p1[i]==a1[j]){
                aux = false
                break
            } 
        }
        if(aux) a1 = a1.concat(p1[i])
    }

    for(i = 0; i<p2.length; i++){
        aux = true
        for(j = 0; j<=a2.length; j++){
            if(p2[i]==a2[j]){
                aux = false
                break
            } 
        }
        if(aux) a2 = a2.concat(p2[i])
    }

    if(a1.length != a2.length){
        return false
    }else{
        for(i = 0; i<a1.length; i++){
            aux = false
            for(j = 0; i<a2.length; j++){
                if(a1[i]==a2[j]){
                    aux = true
                    break
                }
            }
            if(aux == false){
                return false
            }
        }
        return true
    }
}