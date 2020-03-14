// função de primeira classe: pode ser atribuida a uma variavel, objeto como array e pode ser passada como argumento 
/*function getName() {
    return 'Felipe!'; 
}

function logFn(fn) {
    console.log(fn()); 
}

const resultado = logFn;

resultado(getName); */


//Closure: capacidade de uma função lembrar do ambiente que ela foi criada 
// temos 3 tipos de escopo, global, de função e de bloco

function init() {
    const exemplo = 'Essa variável';

    return function() {
        console.log(`1 - O valor da varaiável exemplo é: ${exemplo}`); 

        return function() {
            console.log(`2 - O valor da varaiável exemplo é: ${exemplo}`); 

            return function() {
                console.log(`3 - O valor da varaiável exemplo é: ${exemplo}`); 
            }
        }
    }
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3(); 


