function Pessoa(nome, sobrenome) {
  const id = 12;

  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Lucas', 'Gervasoni');
console.log(p1.nome + p1.sobrenome)