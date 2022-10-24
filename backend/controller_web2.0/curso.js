const Curso = require("../classes/curso");
const tabelaCurso = require("../banco_de_dados/curso");

function paginaCursos() {
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
    let htmlLista = "";
        for (let x = 0; x < listaCursos.length; x++) {
        let objetoAtual = listaCursos[x];
        htmlLista += `
        <tr>
            <td>${objetoAtual.nome}</td>
            <td>${objetoAtual.cargaHoraria}</td>
            <td>${objetoAtual.professores}</td>
            <td>${objetoAtual.materias}</td>
            <td>${objetoAtual.alunos}</td>
        </tr>
        `;
        }
    return `
            <!DOCTYPE html>
            <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="Stylesheet" href="">
                    <title>Cursos</title>
                </head>
                <body>
                    <div class="container__alunos">
                    <h1>Cursos</h1>

                    <table class="lista_informacoes">
                        <tr>
                            <td>Nome</td>
                            <td>Carga Horária</td>
                            <td>Professores</td>
                            <td>Materias</td>
                            <td>Alunos</td>
                        </tr>
                    ${htmlLista}
                    </table>
                </body>
            </html>
            `;
}

module.exports = paginaCursos