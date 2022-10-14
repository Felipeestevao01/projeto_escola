const http = require('http')
const url = require('url')
const Aluno = require("./classes/aluno")
const tabelaAluno = require("./banco_de_dados/aluno")



const requestListener = function (request, response) {

    let pathname = url.parse(request.url).pathname

    if (pathname === '/alunos') {
        let listaAlunos = []
        for (let x = 0; x < tabelaAluno.length; x++) {
            let nome = tabelaAluno[x][0]
            let sobrenome = tabelaAluno[x][1]
            let datanascimento = tabelaAluno[x][2]
            let telefone = tabelaAluno[x][3]
            let cpf = tabelaAluno[x][4]
            let numeroFaltas = tabelaAluno[x][5]
            let listaTrabalhos = tabelaAluno[x][6]
            let email = tabelaAluno[x][7]
            let materias = tabelaAluno[x][8]
            let alunoAtual = new Aluno(nome, sobrenome, datanascimento, telefone, cpf, numeroFaltas, listaTrabalhos, email, materias)
            listaAlunos.push(alunoAtual)
        }
        let htmlLista = ''
        for (let x = 0; x < listaAlunos.length; x++) {
            let objetoAtual = listaAlunos[x]
            htmlLista += `
        <tr>
            <td>${objetoAtual.nome}</td>
            <td>${objetoAtual.sobrenome}</td>
            <td>${objetoAtual.calculaAniversario()} anos</td>
            <td>${objetoAtual.telefone}</td>
            <td>${objetoAtual.cpf}</td>
            <td>${objetoAtual.numeroFaltas}</td>
            <td>${objetoAtual.listaTrabalhos}</td>
            <td>${objetoAtual.email}</td>
            <td>${objetoAtual.materias}</td>
        </tr>
    `
        }
        response.writeHead(200);
        response.end(`
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="Stylesheet" href="C:\Users\Felipe\Desktop\projeto_escola\frontend\css\style.css">
    <title>Alunos</title>
</head>
<body>
    <div class="container__alunos">
        <h1>Alunos</h1>

        <table class="lista_informacoes">
            <tr>
                <td>Nome</td>
                <td>Sobrenome</td>
                <td>Data Nascimento</td>
                <td>Telefone</td>
                <td>CPF</td>
                <td>Quantidade Faltas</td>
                <td>Trabalhos</td>
                <td>E-mail</td>
                <td>Materias</td>
            </tr>
            ${htmlLista}
        </table>
</body>
</html>
    `);
    } else if (pathname === '/professores') {
        response.writeHead(200);
        response.end('Falta implementar os professores');
    }
}

const server = http.createServer(requestListener);
server.listen(80);