//palavras:
//  1:numero total de palavras na frase (split(" ") e palavras.length),
//  2:palavra mais longa (for de todas as palavras, checkar length de cada e comparar ao atual maior),
//  3:palavra mais curta(for de todas as palavras, checkar length comparado ao menor)

function butao(){
    let texto=document.querySelector("#texto").value
    texto=texto.split(" ")
    let menor=9999999
    let menorindex
    let maiorindex
    let maior=0
    let quantpalavras=texto.length
    for(i=0;i<texto.length;i++){
        if(texto[i].length>maior){
            maior=texto[i].length
            maiorindex=i
        }if(texto[i].length<menor){
            menor=texto[i].length
            menorindex=i
        }
    }
    let exibir=document.querySelector("#resultado")
    exibir.innerHTML=`Número total de palavras:${quantpalavras} <br> Palavra mais longa:${texto[maiorindex]} <br> Palavra mais curta:${texto[menorindex]}`  
}