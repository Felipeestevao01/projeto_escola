import Aluno from "./model/aluno.js"
import tabelaAluno from "./api_connector/aluno.js"

function listaAlunos() {
    let listaAlunos = []
    for (let i = 0; i < tabelaAluno.length; i++) {
        let nome = tabelaAluno[i][0]
        let sobrenome = tabelaAluno[i][1]
        let dataNascimento = tabelaAluno[i][2]
        let telefone = tabelaAluno[i][3]
        let cpf = tabelaAluno[i][4]
        let numeroFaltas = tabelaAluno[i][5]
        let listaTrabalhos = tabelaAluno[i][6]
        let email = tabelaAluno[i][7]
        let materias = tabelaAluno[i][8]
        let alunoAtual = new Aluno(nome, sobrenome, dataNascimento, telefone, cpf, numeroFaltas, listaTrabalhos, email, materias)
        listaAlunos.push(alunoAtual)
    }
    return listaAlunos
}

let alunosObject = listaAlunos()

for (let i = 0; i < alunosObject.length; i++) {

    let tr = document.createElement('tr')

    // Bloco para criar os TDs.
    let tdNome = document.createElement('td')
    let tdSobrenome = document.createElement('td')
    let tdDataNascimento = document.createElement('td')
    let tdTelefone = document.createElement('td')
    let tdCpf = document.createElement('td')
    let tdNumeroFaltas = document.createElement('td')
    let tdListaTrabalhos = document.createElement('td')
    let tdEmail = document.createElement('td')
    let tdMaterias = document.createElement('td')

    // Bloco para adicionar os Valores.
    tdNome.innerHTML = alunosObject[i].nome
    tdSobrenome.innerHTML = alunosObject[i].sobrenome
    tdDataNascimento.innerHTML = alunosObject[i].dataNascimento
    tdTelefone.innerHTML = alunosObject[i].telefone
    tdCpf.innerHTML = alunosObject[i].cpf
    tdNumeroFaltas.innerHTML = alunosObject[i].numeroFaltas
    tdListaTrabalhos.innerHTML = alunosObject[i].listaTrabalhos
    tdEmail.innerHTML = alunosObject[i].email
    tdMaterias.innerHTML = alunosObject[i].materias

    // Bloco para inserir as celulas dentro da linha.
    tr.appendChild(tdNome)
    tr.appendChild(tdSobrenome)
    tr.appendChild(tdDataNascimento)
    tr.appendChild(tdTelefone)
    tr.appendChild(tdCpf)
    tr.appendChild(tdNumeroFaltas)
    tr.appendChild(tdListaTrabalhos)
    tr.appendChild(tdEmail)
    tr.appendChild(tdMaterias)

    // Bloco para inserir a linha dentro da tabela.
    let listaDinamica = document.querySelector('#lista_dinamica')
    listaDinamica.appendChild(tr)
}

