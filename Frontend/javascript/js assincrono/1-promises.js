//utilizando callbacks

function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// function esperaAi(msg, tempo, cb){
//   setTimeout(() => {
//     console.log(msg);
//     if(cb) cb();
//   }, tempo);
// }

// esperaAi('Frase 1', aleatorio(1, 3), function(){
//   esperaAi('Frase 2', aleatorio(1, 3), function(){
//     esperaAi('Frase 3', aleatorio(1, 3));
//   });
// });

//utilizando promises

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

esperaAi("Conexão com o DB", aleatorio(1, 3))
.then((resposta) => {
  console.log(resposta);
  return esperaAi("Buscando dados da Base", aleatorio(1, 3))
  .then(
    (resposta) => {
      console.log(resposta);
      return esperaAi("Tratando dados da Base", aleatorio(1, 3))
      .then(
        (resposta) => {
          console.log(resposta);
          return esperaAi(2222, aleatorio(1, 3))
          .then(() => {
            console.log("Exibir dados na tela");
          }).catch((e) => {
            console.log("Erro na exibição dos dados", e);
          });
        }
      );
    }
  );
});
