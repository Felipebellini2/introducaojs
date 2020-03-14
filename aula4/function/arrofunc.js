// função convencional
function fn() {
    return 'algo';
}

// arrow funcition

const arrowfn = () => 'código'; // se tenho só uma expressão, não precisa do return

const arrowfn2 = () => {
    // expressão
    return ' ' ;
}

//funções também são objetos que permitem serem chamados 
fn.prop = 'Propriedade';
Console.log(fn());
Console.log(fn.prop); 

// retornar parâmetros
const logValue = value => console.log(value); 
const logFn = fnParam => console.log(fnParam()); 

logFn(fn);

//receber e retornar funções 
const exec => fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const fnexec = exec(fn);

fnexec(true); //executa a função
fnexec();// não executa 

//fnexec com function normal
function fnexec (fnParam) {
    return function(allowed){
        if(allowed){
            fnParam(); 
        }
    }
}