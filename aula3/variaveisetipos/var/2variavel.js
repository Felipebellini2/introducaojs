// let respeita escopo de bloco

(() => {
    let test = 'Valor';
    console.log(`Valor dentro da função: ${test}`);

    if (true) {
        let test = "Valor com if";
        console.log(`Valor dentro do if: ${test}`);
    }

    console.log(`Valor após a execução ${test}`); 
})();