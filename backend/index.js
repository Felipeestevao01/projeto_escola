const Aluno = require("./classes/aluno")
const tabelaAluno = require("./banco_de_dados/aluno")

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

console.log(listaAlunos)