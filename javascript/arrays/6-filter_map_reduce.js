const numeros = [2, 10, 24, 25, 85, 74, 92, 35];

const par = numeros
  .filter((nums) => nums % 2 === 0)
  .map((nums) => nums * 2)
  .reduce(function (i, total) {
    i += total;
    return i;
  });

console.log(par);
