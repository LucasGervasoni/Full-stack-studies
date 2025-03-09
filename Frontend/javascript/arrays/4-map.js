const numeros = [1, 2, 3];

const newNumeros = numeros.map((nums) => nums * 2);

const newNumeros1 = numeros.map(function (nums) {
  if (nums % 2 !== 0) {
    return `${nums} é impar`;
  } else {
    return `${nums} é par`;
  }
});

const newNumeros2 = numeros.map((nums) => {
  return `Olá ${nums}`;
});

console.log(numeros);
console.log(newNumeros);
console.log(newNumeros1);
console.log(newNumeros2);

const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Pedro", idade: 19 },
  { nome: "Renan", idade: 18 },
];

// const nomes = pessoas.map(function (obj) {
//   return obj.nome;
// });

// const nomes = pessoas.map( (obj) => {
//   return obj.nome;
// });

const nomes = pessoas.map( (obj) => obj.nome);
const idades = pessoas.map( (obj) => obj.idade);

console.log(nomes);
console.log(idades);
