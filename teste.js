function Produto(nome, preco, cor){
    this.nome = nome 
    this.preco = preco
    this.cor = cor
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco, cor)
};

Produto.prototype.precoComJuros = function (percentual){
    this.preco = this.preco + (this.preco * (percentual) / 100)
};

const primeiraCamisa = new Camiseta('Polo', 50.50, 'Azul')
primeiraCamisa.precoComJuros(10)
console.log(primeiraCamisa)