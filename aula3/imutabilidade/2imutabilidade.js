const alunos = [
    {
        name: 'Felipe',
        grade: 6
    },
    {
        name:'Sidney',
        grade:8
    },
    {
        name:'Mariana',
        grade: 9
    },
    {
        name:'Ana',
        grade: 5
    }
];

function alunosaprovados (listalunos) {
    return listalunos.filter(alunos => alunos.grade >= 7);
}

console.log(alunosaprovados(alunos)); 