/*function soma (n1, n2) {
    return n1 + n2; 
}

alert (soma(5,10)); */
 

var validar = 0; // se deixo só esse, ele usa o escopo global 

function valida(idade) {
    var validar; // quando coloco esse var, estou falando para ele usar o var no escopo local
    if (idade >= 18) {
        validar = true; 
    } else{
        validar = false; 
    }
    return validar; 
}

var idade = prompt("Qual é sua idade?");
valida(idade); 
console.log(validar); 

