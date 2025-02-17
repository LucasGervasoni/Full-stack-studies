// const pessoa = {
//   nome: "lucas",
//   sobrenome: "Gervasoni",
// };

// // notação de pontos
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// // notação de cochetes
// console.log(pessoa["nome"]);
// console.log(pessoa["sobrenome"]);
// //==========================================
// const pessoa1 = new Object();
// pessoa1.nome = 'duda';
// pessoa1.sobrenome = 'fuzy';
// pessoa1.idade = 18;
// pessoa1.falarNome = function() {
//   console.log(`${this.nome} está falando nome`)
// };

// pessoa1.falarNome();

// delete pessoa1.sobrenome;

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);


// pessoa1.getDataNascimento = function() {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// };

// console.log(pessoa1.getDataNascimento());

//==========================================

// function criarPessoa(nome, sobrenome){
//   return{
//     nome,
//     sobrenome,
//     get nomeCompleto(){
//       return `${this.nome} ${this.sobrenome}`
//     }
//   };
// }

// const p1 = criarPessoa('pedro', 'rickson')
// console.log(p1.nomeCompleto);

//==========================================

function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Renan', 'Athalla');
console.log(p1);