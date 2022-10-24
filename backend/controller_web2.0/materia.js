const Materia = require("../classes/materia");
const tabelaMateria = require("../banco_de_dados/materia");

function paginaMaterias() {
  let listaMaterias = [];
  for (let x = 0; x < tabelaMateria.length; x++) {
    let nome = tabelaMateria[x][0];
    let cargaHoraria = tabelaMateria[x][1];
    let cursos = tabelaMateria[x][2];
    let professor = tabelaMateria[x][3];
    let alunos = tabelaMateria[x][4];
    let trabalhos = tabelaMateria[x][5];
    let materiaAtual = new Materia(nome, cargaHoraria, cursos, professor, alunos, trabalhos);
    listaMaterias.push(materiaAtual);
  }
  let htmlLista = "";
  for (let x = 0; x < listaMaterias.length; x++) {
    let objetoAtual = listaMaterias[x];
    htmlLista += `
<tr>
    <td>${objetoAtual.nome}</td>
    <td>${objetoAtual.cargaHoraria}</td>
    <td>${objetoAtual.cursos}</td>
    <td>${objetoAtual.professor}</td>
    <td>${objetoAtual.alunos}</td>
    <td>${objetoAtual.trabalhos}</td>
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
                <title>Materias</title>
            </head>
            <body>
                <div class="container__alunos">
                    <h1>Matérias</h1>

                    <table class="lista_informacoes">
                        <tr>
                            <td>Nome</td>
                            <td>Carga Horária</td>
                            <td>Cursos</td>
                            <td>Professor</td>
                            <td>Alunos</td>
                            <td>Trabalhos</td>
                        </tr>
                        ${htmlLista}
                    </table>
            </body>
        </html>
        `;
}

module.exports = paginaMaterias;
