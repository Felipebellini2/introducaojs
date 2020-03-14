 const symbol1 = Symbol();
 const symbol2 = Symbol();

 //symbols são unicos
 Console.log('symbol1 é igual ao symbol2: ', symbol1 === symbol2);

 //Apesar de poderem receber a mesma propriedade, cada um é único, dessa forma não subescreve um no outro
 const nameSymbol1= Symbol('name');
 const nameSymbol2= Symbol('name');

 const user = {
     [nameSymbol1]: 'Felipe',
     [nameSymbol2]: 'Sidney',
     lastName: 'Bellini'
 }

 Console.log(user); 