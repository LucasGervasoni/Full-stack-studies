const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const num = numeros.filter((nums) => {
  return nums < 10;
});

const num1 = numeros.filter((nums) => nums > 10);

const num2 = numeros.filter(function(nums) {
  return nums % 2 === 0;
});

console.log(num);
console.log(num1);
console.log(num2);
