// for in executa para cada propriedade que o objeto tiver
// for off só executa para as propriedades numeradas

let arr = [3,5,7];
arr.foo = 'OLÁ';

for (let i in arr) {
    console.log(i); 
}

for ( let i of arr ) {
    console.log(i); 
}