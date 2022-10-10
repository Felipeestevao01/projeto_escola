const Materia = class{
    constructor(nome, cargaHoraria, cursos, professor, alunos, trabalhos){
        this.nome = nome
        this.cargaHoraria = cargaHoraria
        this.cursos = cursos
        this.professor = professor
        this.alunos = alunos
        this.trabalhos = trabalhos
    }
}

module.exports = Materia