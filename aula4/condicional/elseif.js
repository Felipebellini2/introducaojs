const array = [0,1,2,3,4,5,6,7,8,16,92,63,50]; 

/*array.forEach(item => {
    if(item %2 === 0 ) {
        console.log(`O número: ${item} é divisivel por 2.`);
    } else if (item %3 === 0) {
        console.log(`O número: ${item} é divisivel por 3.`);
    } else if (item %4 === 0 ) {
        console.log(`O número: ${item} é divisivel por 4.`);
    }
}); // aqui vai até a primeira condição e para */

// se eu quero que ele faça para cada item, preciso usar o IF sozinho

array.forEach(item => {
    if(item %2 === 0 ) {
        console.log(`O número: ${item} é divisivel por 2.`);
    }  if (item %3 === 0) {
        console.log(`O número: ${item} é divisivel por 3.`);
    } if (item %4 === 0 ) {
        console.log(`O número: ${item} é divisivel por 4.`);
    }
});