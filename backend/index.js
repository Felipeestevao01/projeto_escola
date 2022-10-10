const Aluno = require("./classes/aluno")
const Curso = require("./classes/curso")
const Professor = require("./classes/professor")
const Materia = require("./classes/materia")
const Trabalho = require("./classes/trabalho")
const tabelaAluno = require("./banco_de_dados/aluno")
const tabelaCurso = require("./banco_de_dados/curso")
const tabelaProfessor = require("./banco_de_dados/professor")
const tabelaMateria = require("./banco_de_dados/materia")
const tabelaTrabalho = require("./banco_de_dados/trabalho")

let listaAlunos = []
for (let x = 0; x < tabelaAluno.length; x++) {
    let nome = tabelaAluno[x][0]
    let sobrenome = tabelaAluno[x][1]
    let datanascimento = tabelaAluno[x][2]
    let telefone = tabelaAluno[x][3]
    let cpf = tabelaAluno[x][4]
    let numeroFaltas = tabelaAluno[x][5]
    let listaTrabalhos = tabelaAluno[x][6]
    let email = tabelaAluno[x][7]
    let materias = tabelaAluno[x][8]
    let alunoAtual = new Aluno(nome, sobrenome, datanascimento, telefone, cpf, numeroFaltas, listaTrabalhos, email, materias)
    listaAlunos.push(alunoAtual)
}

let listaCursos = []
for(let x = 0; x < tabelaCurso.length; x++){
    let nome = tabelaCurso[x][0]
    let cargaHoraria = tabelaCurso[x][1]
    let professores = tabelaCurso[x][2]
    let materias = tabelaCurso[x][3]
    let alunos = tabelaCurso[x][4]
    let cursoAtual = new Curso(nome, cargaHoraria, professores, materias, alunos)
    listaCursos.push(cursoAtual)
}

let listaProfessores = []
for(let x = 0; x < tabelaProfessor.length; x++){
    let nome = tabelaProfessor[x][0]
    let sobrenome = tabelaProfessor[x][1]
    let dataNascimento = tabelaProfessor[x][2]
    let telefone = tabelaProfessor[x][3]
    let cpf = tabelaProfessor[x][4]
    let salario = tabelaProfessor[x][5]
    let email = tabelaProfessor[x][6]
    let materia = tabelaProfessor[x][7]
    let professorAtual = new Professor(nome, sobrenome, dataNascimento, telefone, cpf, salario, email, materia)
    listaProfessores.push(professorAtual)
}

let listaMaterias = []
for(let x = 0; x < tabelaMateria.length; x++){
    let nome = tabelaMateria[x][0]
    let cargaHoraria = tabelaMateria[x][1]
    let cursos = tabelaMateria[x][2]
    let professor = tabelaMateria[x][3]
    let alunos = tabelaMateria[x][4]
    let trabalhos = tabelaMateria[x][5]
    let materiaAtual = new Materia(nome, cargaHoraria, cursos, professor, alunos, trabalhos)
    listaMaterias.push(materiaAtual)
}

let listaTrabalhos = []
for(let x = 0; x < tabelaTrabalho.length; x++){
    let nota = tabelaTrabalho[x][0]
    let materia = tabelaTrabalho[x][1]
    let aluno = tabelaTrabalho[x][2]
    let trabalhoAtual = new Trabalho(nota, materia, aluno)
    listaTrabalhos.push(trabalhoAtual)
}

console.log(listaCursos)
