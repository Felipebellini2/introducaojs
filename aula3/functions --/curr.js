// currying transforma uma função com N parametros em apenas uma função, que vai receber um parâmetro
// para cada parâmetro retorna uma função 

function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2); // atribuido 2 como parâmetro da função soma 

console.log(soma2(3)); // como já tenho um parâmetro memorizado, é só atribuir o outro
console.log(soma2(4)); 

 