function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave 
    value: estoque, // valor da chave
    writable: false, //Diz se altera ou não altera o valor após a criação do Obj
    configurable: false,  // pode reconfigurar/apagar ou não a chave
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: false,
      value: nome,
    },
    preco: {
      writable: true,
    }
  });
}

const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 40; // testando o writable
 p1.preco = 40; // testando o writable
console.log(p1)
