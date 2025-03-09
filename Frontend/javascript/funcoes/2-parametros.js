//1

// function funcao() {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total);
// }

// funcao(1, 2, 3, 4, 5, 6, 7);

//2

// function funcao(a, b, c, d, e, f) {
//   console.log(a, b, c, d, e, f);
// }

// funcao(1, 2, 3);

//3

// function soma(a, b = 2) {
//   console.log(a + b);
// };

// soma(2, undefined);

//4

// function info({nome, sobrenome, idade}){
//   console.log(nome, sobrenome, idade);
// };

// const person = {
//   nome: "Lucas",
//   sobrenome: "Gervasoni",
//   idade: 20
// };

// info({nome: "Lucas", sobrenome: "Gervasoni", idade: 20});
// info(person);

//5

// function arr([valor1, valor2, valor3]){
//   console.log(valor1,valor2,valor3);
// };

// arr(["Lucas",2,3]);

//6

function conta(operador, acumulador, ...numeros){
  for(let numero of numeros){
    if(operador == "+"){acumulador += numero};
    if(operador == "-"){acumulador -= numero};
    if(operador == "/"){acumulador /= numero};
    if(operador == "*"){acumulador *= numero};
  }
  console.log(acumulador);
};

// conta("+", 0, [2,3,4,5,5]);
conta("+", 0, 2, 3, 4, 5, 5);