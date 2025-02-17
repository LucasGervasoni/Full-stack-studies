//construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

const pessoa1 = new Pessoa("Lucas", "Gervasoni");
const pessoa2 = new Pessoa("Duda", "Fuzy");

console.log(pessoa1.nomeCompleto())
console.log(pessoa2.nomeCompleto())