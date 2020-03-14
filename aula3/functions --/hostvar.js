// hoisting: declarações de variaveis e funções são elevadas ao escopo
// que ela está, seja de bloco, função ou global

// de variavel: só eleva a variavel
// de função: eleva como um todo 

function fn() {
    console.log(text);// por causa do içamento, ela existe, mas ainda não foi definida

    var text = 'Exemplo'; 

    console.log(text);// retorna exemplo 
}

fn(); 