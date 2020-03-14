const fruta = 'banana';

switch (fruta) {
    case 'banana':
        console.log('R$ 3,00 / kg');
    break; 

    case 'mamão':
    case 'laranja':    
        console.log('R$ 2,00 / kg');
    break; 

    default:
        console.log('Produto não cadastrado.'); 
        break;
}