
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
    calculaAniversario() {
        let anoMesDia = this.dataNascimento.split('-')
        let ano = anoMesDia[0]
        let mes = anoMesDia[1]
        let dia = anoMesDia[2]
        let nascimentoObject = new Date(ano, mes, dia)
        let dataAtual = new Date()
        return dataAtual.getFullYear() - nascimentoObject.getFullYear()
    }
}

module.exports = Aluno;
