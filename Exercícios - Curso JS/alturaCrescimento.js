function alturaCrescimento(altura1,altura2,crescimento1,crescimento2){
    if(altura1>altura2){
        maior=altura1
        maiorc=crescimento1
        menor=altura2
        menorc=crescimento2
    }else if(altura2>altura1){
        maior=altura2
        maiorc=crescimento2
        menor=altura1
        menorc=crescimento1
    }else{
        console.log("As crianças possuem a mesma altura")
        return ""
    }
    if(menorc>maiorc){
        anos=0
        while(maior>=menor){
            maior*=maiorc
            menor*=menorc
            anos++
        }
        console.log("A criança menor levara "+anos," para ultrapassar a emnor")
    }else{
        console.log("A criança menor nunca ultrapassara a maior")
    }
}alturaCrescimento(100,100,1,2)