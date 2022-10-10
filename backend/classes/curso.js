
const Curso = class {
    constructor(nome, cargaHoraria, professores, materias, alunos){
        this.nome = nome
        this.cargaHoraria = cargaHoraria
        this.professores = professores
        this.materias = materias
        this.alunos = alunos
    }
}

module.exports = Curso