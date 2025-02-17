// const produto = { nome: "Caneca", preco: 1.8 };
// const outraCoisa = produto;

// outraCoisa.nome = "camisa";
// produto.nome = "short";
// console.log(produto);
// console.log(outraCoisa);

// const produto = { nome: "Caneca", preco: 1.8 };
// const outraCoisa = { ...produto };

// outraCoisa.nome = "camisa";
// produto.nome = "short";
// console.log(produto);
// console.log(outraCoisa);

// const produto = { nome: "Caneca", preco: 1.8 };
// const outraCoisa = Object.assign({}, produto, { material: "porcelana" });

// outraCoisa.nome = "camisa";
// console.log(produto);
// console.log(outraCoisa);

// const produto = { nome: "Caneca", preco: 1.8 };
// Object.freeze(produto);
// produto.nome = "Camisa";
// delete produto;
// const outraCoisa = { nome: produto.nome, preco: produto.preco };
// console.log(Object.keys(produto));


// const produto = { nome: "Caneca", preco: 1.8 };
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(Object.getOwnPropertyDescriptor(produto, 'preco'));

// const produto = { nome: "Caneca", preco: 1.8 };
// console.log(Object.values(produto));

const produto = { nome: "Caneca", preco: 1.8 };
console.log(Object.entries(produto));

