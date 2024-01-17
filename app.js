alert("Oba oba");
let numSecreto = parseInt(Math.random() * 10 + 1);
let palpite = 0;
let tentativas = 0;
while(palpite != numSecreto){
    palpite = prompt("Diz um número meu consagrado");
    tentativas++;
    if(palpite == numSecreto){
        break
    }else{
        if(palpite > numSecreto){
            alert("É menor que " + palpite);
        }
        else{
            alert("É maior que "+ palpite)
        }
    }
}
palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert("Você adivinhou o número " + numSecreto + ", após " + tentativas + " " + palavraTentativa)


