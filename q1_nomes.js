function solucao(n){
    let vetor=[]
    for(i=1;i<=n;i++){
        //talvez continue
        if(i%3===0){
            if(i%5===0){
                vetor.push("FizzBuzz")
            }else{
                vetor.push("Fizz")
            }
            
        }else
        if(i%5===0){
            vetor.push("Buzz")
            
        }else
        if(i%7===0){
            vetor.push("Boom")
            
        }else
        vetor.push(i)
    }
    console.log(vetor)
}

// Sua solução aqui

let resultado = "Olá, mundo!";
document.getElementById("saida").innerHTML = resultado;