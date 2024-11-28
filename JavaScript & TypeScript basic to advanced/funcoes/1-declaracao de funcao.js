//declaração de função (function hoisting)

function falaOi(){
  console.log('oi');
};

falaOi();

// Function expression

const souUmDado = function (){
  console.log('sou um dado');
};

souUmDado();

// Arrow function

const funcaoArrow = () => {
  console.log('sou uma arrow function');
};

funcaoArrow();

// dentro de um objeto

const obj = {
  falar: function (){
    console.log('estou falando');
  }
};

const obj2 = {
  falar () {
    console.log('estou falando');
  }
};

obj2.falar();
obj.falar();