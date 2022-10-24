const Trabalho = require("../classes/trabalho");
const tabelaTrabalho = require("../banco_de_dados/trabalho");

function paginaTrabalhos() {
  let listaTrabalhos = [];
  for (let x = 0; x < tabelaTrabalho.length; x++) {
    let nota = tabelaTrabalho[x][0];
    let materia = tabelaTrabalho[x][1];
    let aluno = tabelaTrabalho[x][2];
    let trabalhoAtual = new Trabalho(nota, materia, aluno);
    listaTrabalhos.push(trabalhoAtual);
  }
  let htmlLista = "";
  for (let x = 0; x < listaTrabalhos.length; x++) {
    let objetoAtual = listaTrabalhos[x];
    htmlLista += `
    <tr>
        <td>${objetoAtual.nota}</td>
        <td>${objetoAtual.materia}</td>
        <td>${objetoAtual.aluno}</td>
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
                <title>Trabalhos</title>
            </head>
            <body>
                <div class="container__alunos">
                    <h1>Trabalhos</h1>
    
                    <table class="lista_informacoes">
                        <tr>
                            <td>Nota</td>
                            <td>Materia</td>
                            <td>Aluno</td>
                        </tr>
                        ${htmlLista}
                    </table>
            </body>
        </html>
    `;
}

module.exports = paginaTrabalhos;
