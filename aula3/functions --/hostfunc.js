// hoisting de função

function fn() {
    log('Função!'); 

    function log(value) {
        console.log(value);
    }
}

fn(); 

// a função é içada como um todo