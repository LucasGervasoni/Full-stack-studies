const objA = {
  chaveA: "A",
};

const objB = {
  chaveB: "B",
};

const objC = new Object();
objC.chaveC = "C";

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveB);
console.log(objC.chaveA);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percent) {
  this.preco = this.preco - this.preco * (percent / 100);
};

Produto.prototype.aumento = function (percent) {
  this.preco = this.preco + this.preco * (percent / 100);
};

const p1 = new Produto('camiseta', 50);
// p1.desconto(100);
p1.aumento(100);
console.log(p1)

const p2 = {
  nome: 'Caneca',
  preco: 15,
};

Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(10)
console.log(p2);