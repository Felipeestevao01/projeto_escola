
                                -Descrição: Projeto Escola-


Requisitos:

O sistema deverá ter um cadastro de cursos, matérias, professor, aluno, trabalho.
Sistema online que possibilita cadastro de:

- Curso
    Nome <string>
    Carga horária <integer>
    Professores <Array>
    Matérias <Array>
    Alunos <Array> 

- Matéria
    Nome <string>
    Carga Horária <integer>
    Cursos <Array<Curso>>
    Professor <Professor>
    Alunos <Array<Aluno>>
    Trabalhos <Array<Trabalho>>

-Professor
    Nome <string>
    Sobrenome <string>
    Data de Nascimento <string>
    Telefone <string>
    CPF <string>
    Salário <float>
    E-mail <string>
    Matéria <Matéria>

- Aluno
    Nome <string>
    Sobrenome <string>
    Data de Nascimento <string>
    Telefone <string>
    CPF <string>
    Número de Faltas <integer>
    Lista de Trabalhos <Array<Trabalho>>
    E-mail <string>
    Matérias <Array<Matéria>>

- Trabalho
    Nota <float>
    Matéria <Matéria>
    Aluno <Aluno>

1- No arquivo index.js, criar uma lista de objetos de cada entidade baseado na sua tabela e classe.


Dúvidas

- Nas tabelas professor e materia tem um campo que precisa informa um objeto.

Tela Login:
1º A tela de login deve contemplar:
- Tamanho de 350x450
- 1 campo para usuário.
- 1 campo para senha.
- 1 botão de "login ou entrar".
- 1 1 frase contendo "ainda não possui cadastro?".
- 1 botão de "cadastre-se" ao lado da frase.