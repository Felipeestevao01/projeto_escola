const Professor = class{
    constructor(nome, sobrenome, dataNascimento, telefone, cpf, salario, email, materia){
        this.nome =  nome
        this.sobrenome =sobrenome
        this.dataNascimento = dataNascimento
        this.telefone = telefone
        this.cpf = cpf
        this.salario = salario
        this.email = email
        this.materia = materia
    }
}
module.exports = Professor