var idade = prompt("Qual sua idade? ");
if (idade >= 18) {
    alert("Maior de idade.");
} else {
    alert("Menor de idade."); 
} 

// while
var c = 0;
while(c <= 5 ) {
    console.log(c);
    c++;
}

// For
var c;
for ( c = 0; c <= 5; c++) {
    console.log(c);
}

// data 
var d = new Date(); // data atual
console.log(d.getMonth()); // somente o mês 