const http = require("http");
const url = require("url");
const paginaAlunos = require("./controller/aluno");
const paginaProfessores = require("./controller/professor");
const paginaCursos = require("./controller/curso");
const paginaMaterias = require("./controller/materia");
const paginaTrabalhos = require("./controller/trabalho");

const requestListener = function (request, response) {
  let pathname = url.parse(request.url).pathname;
  let html = ''
  if (pathname === "/alunos") {
    html = paginaAlunos();
  } else if (pathname === "/professores") {
    html = paginaProfessores();
  } else if (pathname === "/cursos") {
    html = paginaCursos();
  } else if (pathname === "/materias") {
    html = paginaMaterias();
  } else if (pathname === "/trabalhos") {
    html = paginaTrabalhos();
  }
  response.writeHead(200);
  response.end(html);
};

const server = http.createServer(requestListener);
server.listen(80);