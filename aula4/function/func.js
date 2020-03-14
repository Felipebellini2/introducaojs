function clicou() {
    //alert("Obrigado por clicar!"); 
    document.getElementById("agr").innerHTML = "Obrigado por clicar!"; 
    document.getElementById("ps").innerHTML = "Passe o mouse aqui!"; 
    document.getElementById("ps2").innerHTML = "Passe o mouse aqui!";
    // estou injetando um texto no elemento html 
}

// criar função para redirecionar
function redirecionar() {
    window.open("https://www.uol.com.br/"); 
    // window.location.href = "https://www.uol.com.br/"; -- abre na mesma janela 
}

function trocar(elemento) {
    //document.getElementById("ps").innerHTML = "Deu certo!"; 
    elemento.innerHTML = "Deu certo!";
}

function voltar(elemento) {
    // document.getElementById("ps").innerHTML = "Passe o mouse aqui!"; 
    elemento.innerHTML = "Passe o mouse aqui!";
}

function carregar() {
    alert("Página carregada com sucesso!"); 
}

function change(elemento) {
    console.log(elemento.value); 
}