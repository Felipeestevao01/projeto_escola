
const Aluno = class {
    constructor(nome, sobrenome, dataNascimento, telefone, cpf, numeroFaltas, listaTrabalhos, email, materias) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.dataNascimento = dataNascimento
        this.telefone = telefone
        this.cpf = cpf
        this.numeroFaltas = numeroFaltas
        this.listaTrabalhos = listaTrabalhos
        this.email = email
        this.materias = materias
    }
}

module.exports = Aluno;
