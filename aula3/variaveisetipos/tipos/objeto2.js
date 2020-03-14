const user = {
    name: 'Felipe',
    lastName: 'Bellini'
};

//recupera as chaves do objeto
Console.log('Propriedades: ', Object.keys(user));

//recupera os valores das chaves do objeto
Console.log(' Valores das Propriedades: ', Object.values(user));

// retorna um array de arrays contendo [nome_prop, valor_prop]
Console.log('Lista de propriedades e valores: ', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Felipe de Carvalho'});

Console.log('Retorna um novo objeto mergeando dois ou  mais objetos', Object.assign({}, user, {age:26})); 

//Previne todas as alterações em um objeto
const newObj = {foo:'bar'}; 
Object.freeze(newObj); 