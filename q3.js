function solucao(vetor){
    
    let tamanho = vetor.length;

    for(i = tamanho-1; i >= 0; i--){

        vetor.push(vetor[i]);

    }

    vetor.splice(0, tamanho);

    console.log(vetor);

}

solucao([1, 2, 3, 4, 5, 6]);