const numeros = [2, 10, 24, 25, 85, 74, 92, 35];

const total = numeros.reduce(function (i, num) {
  i += num;
  return i;
});

const par = numeros.reduce(function (i, num) {
  if (num % 2 === 0) i += num;
  return i;
});

console.log(total);
console.log(par);

const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Pedro", idade: 19 },
  { nome: "Renan", idade: 18 },
  { nome: "Renata", idade: 44 },
];

const maisVelha = pessoas.reduce(function (i, obj) {
  if (i.idade > obj.idade) return i;
  return obj;
});

console.log(maisVelha);
