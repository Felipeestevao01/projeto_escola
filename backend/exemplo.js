// Nome, Idade
let tabelaPessoas = [
    ["Felipe", 32],
    ["Mauricio", 32],
    ["Wilson", 63],
    ["Amanda", 26]
]

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

let listaPessoa = []
for (let x = 0; x < tabelaPessoas.length; x++) {
    let nome = tabelaPessoas[x][0]
    let idade = tabelaPessoas[x][1]
    let pessoaAtual = new Pessoa(nome, idade)
    listaPessoa.push(pessoaAtual)
}

console.log(tabelaPessoas)
console.log(listaPessoa)