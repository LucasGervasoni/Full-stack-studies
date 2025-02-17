const numeros = [2, 10, 24, 25, 85, 74, 92, 35];

numeros.forEach(function (valor) {
  console.log(valor);
});

let total = 0;

numeros.forEach((valor) => {
  total += valor;
});

console.log(total);