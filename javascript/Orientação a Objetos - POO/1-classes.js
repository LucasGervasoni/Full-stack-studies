class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log("Olá");
  }

  comer() {
    console.log("Comendo");
  }
}

function Pessoa2(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log("Olá");
}

const p1 = new Pessoa("Lucas", "Gervasoni");
console.log(p1);
p1.falar();
p1.comer();
