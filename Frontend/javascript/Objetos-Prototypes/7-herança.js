function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
  this.preco += quantia;
}

Produto.prototype.desconto = function(quantia){
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(percent){
  this.preco = this.preco + (this.preco * (percent / 100));
}

function Caneca(nome, preco, material){
  Produto.call(this, nome , preco);
  this.material = material;
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;
Caneca.prototype.desconto = function(percent){
  this.preco = this.preco - (this.preco * (percent / 100));
}

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(10);
console.log(camiseta)