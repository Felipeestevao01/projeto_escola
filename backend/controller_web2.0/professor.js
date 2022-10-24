const Professor = require("../classes/professor");
const tabelaProfessor = require("../banco_de_dados/professor");

function paginaProfessores() {
  let listaProfessores = [];
  for (let x = 0; x < tabelaProfessor.length; x++) {
    let nome = tabelaProfessor[x][0];
    let sobrenome = tabelaProfessor[x][1];
    let dataNascimento = tabelaProfessor[x][2];
    let telefone = tabelaProfessor[x][3];
    let cpf = tabelaProfessor[x][4];
    let salario = tabelaProfessor[x][5];
    let email = tabelaProfessor[x][6];
    let materia = tabelaProfessor[x][7];
    let professorAtual = new Professor(nome, sobrenome, dataNascimento, telefone, cpf, salario, email, materia);
    listaProfessores.push(professorAtual);
  }
  let htmlLista = "";
  for (let x = 0; x < listaProfessores.length; x++) {
    let objetoAtual = listaProfessores[x];
    htmlLista += `
        <tr>
            <td>${objetoAtual.nome}</td>
            <td>${objetoAtual.sobrenome}</td>
            <td>${objetoAtual.dataNascimento}</td>
            <td>${objetoAtual.telefone}</td>
            <td>${objetoAtual.cpf}</td>
            <td>${objetoAtual.salario}</td>
            <td>${objetoAtual.email}</td>
            <td>${objetoAtual.materia}</td>
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
                    <title>Professores</title>
                </head>
                <body>
                    <div class="container__alunos">
                    <h1>Professores</h1>

                    <table class="lista_informacoes">
                        <tr>
                            <td>Nome</td>
                            <td>Sobrenome</td>
                            <td>Data Nascimento</td>
                            <td>Telefone</td>
                            <td>CPF</td>
                            <td>Salario</td>
                            <td>E-mail</td>
                            <td>Materias</td>
                        </tr>
                            ${htmlLista}
                    </table>
                </body>
            </html>
        `;
}

module.exports = paginaProfessores;
