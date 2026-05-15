function solucao(texto){
    let palavra=texto.toLowerCase()
    palavra=palavra.split("")
    let invertido=[]
    console.log(palavra.length)
    for(i=0;i<palavra.length;i++){
        invertido[i]=palavra[(palavra.length)-(i+1)]
    }
    if(invertido.toString()==palavra.toString()){
        console.log("MARROCOS ALERT")
        console.log(invertido.toString())
        return true
    }else{
        console.log("SOCORRAM ALERT")
        return false
    }
}
solucao("CAAC")
//tem que inverter o vetor da palavra, colocar em caixa baixa, e ver se é igual a o original, acho q tem invertor de vetor mas vou escrever um manual mesmo fodaci