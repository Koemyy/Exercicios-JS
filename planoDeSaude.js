function convenio(idade){
    if(idade<=10){
        return 100+80
    }
    if(idade>11 && idade<=30){
        return 100+50
    }
    if(idade>31 && idade<60){
        return 100+95
    }
    else{
        return 100+130
    }
}console.log(convenio(30))
