
function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, cb) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== "string") {
      reject("BAD VALUE");
      return;
    }else{
      setTimeout(() => {
        resolve(msg);
      }, tempo);

    }
  });
}

function baixaPagina() {
  const emCache = true;

  if(emCache) {
    // return Promise.reject("Página em cache");
    return Promise.resolve("Página em cache");
  }else{
    return esperaAi("Baixei a página", aleatorio(1, 3));
  }
}

// Promise.all

const promises = [
  "Primeiro valor",
  esperaAi("Promise 1", aleatorio(1, 3)),
  esperaAi("Promise 2", aleatorio(1, 3)),
  esperaAi("Promise 3", aleatorio(1, 3)),
  "Outro valor"
];

// Promise.all(promises)
// .then( valor => {
//   console.log(valor);
// })
// .catch( e => {
//   console.log(e);
// });


// Promise.race

const promises2 = [
  esperaAi("Promise 1", aleatorio(1, 3)),
  esperaAi("Promise 2", aleatorio(1, 3)),
  esperaAi("Promise 3", aleatorio(1, 3)),
];

// Promise.race(promises2)
// .then( valor => {
//   console.log(valor);
// })
// .catch( e => {
//   console.log(e);
// });

// Promise.resolve, Promise.reject

baixaPagina()
.then(dadosPagina => {
  console.log(dadosPagina);
})
.catch(e => { console.log("ERROR", e); });