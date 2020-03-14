var teste = 'exemplo'; 

(() => {
    console.log(`Valor dentreo da função: ${teste}`);

    if (true) {
        var teste = 'exemplo2'; // var não respeita escopo de bloco 
        console.log(`Valor dentro do if: ${teste}`);
    }

    console.log(`Valor depois da execução do if: ${teste}`); 
})();