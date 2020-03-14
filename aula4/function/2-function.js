// diferença entre arrowfunction e função normal 
(() => {
    this.name = 'Felipe';
    const getNameArrow = () => this.name; // esse this referencia o contesto que ela foi criada 
    // como foi criada dentro de uma variável, sempre vai referenciar ao this  na onde ela foi executada 

    function getName() {
        return this.name; // nessa função o this só vai referenciar no contesto que ela foi executada 
        // se ela for executada dentro de um objeto, o this vai referenciar o objeto
    }

    const user = {
        name: 'Name',
        getNameArrow,
        getName
    }

    console.log(user.getNameArrow());
    console.log(user.getName());
})(); 