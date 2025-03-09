function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, 
    configurable: true, 
    get: function(){
      return estoquePrivado;
    },
    set: function(valor){
      estoquePrivado = valor;
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 400;
console.log(p1.estoque);
