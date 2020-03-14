// Imutabilidade: os dados não mudam, se precisa alterar uma variável, cria um novo
// no exemplo, não altera o user direto na referência, cria um novo objeto 

const user = {
    name: 'Felipe',
    lastname: 'Bellini'
}; 

function get(user) {
    return {
        ...user, // cada propriedade que receber o user, ele vai colocar dentro do novo objeto
        fullname: `${user.name} ${user.lastname}`
    }
}

const r = get(user);

console.log(r); 