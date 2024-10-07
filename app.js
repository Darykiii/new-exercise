alert("slv, cahorro!");
let numerosecreto = 0;
let chute;
let tentativas = 1;

while ( chute!= numerosecreto){
 chute = prompt("Escolha um número de -1000 a 1000");


 
if(chute== numerosecreto){
    console.log(`Isso aí!!! Você descobriu o número secreto!!! ${numerosecreto} com ${tentativas}`)
}
else{
    if(numerosecreto>chute){
    alert(`O número secreto é maior que ${chute}`)

    }else{
        alert(`O número secreto é menor que ${chute}`)
    }
} tentativas++;
}