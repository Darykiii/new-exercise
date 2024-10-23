alert("slv, cahorro!");
let numerosecreto = 0;
let chute;
let tentativas = 1;

while ( chute!= numerosecreto){
 chute = prompt("Escolha um número de -1000 a 1000");


 
if(chute == numerosecreto){

break

    
}
else{
    if(numerosecreto>chute){
    alert(`O número secreto é maior que ${chute}`)

    }else{
        alert(`O número secreto é menor que ${chute}`)
    }
} tentativas++;

if (tentativas>1){
    alert(`Isso aí!!! Você descobriu o número secreto!!! ${numerosecreto} com ${tentativa}`);
}   else{
    alert(`Isso aí!!! Você descobriu o número secreto!!! ${numerosecreto} com ${tentativas}`);
}
}   tentativas++;

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso aí!!! Você descobriu o número secreto!!! ${numerosecreto} com ${tentativas} ${palavraTentativa}`);
