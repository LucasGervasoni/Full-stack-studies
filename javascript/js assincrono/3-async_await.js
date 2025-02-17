function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("BAD VALUE");
      return;
    } else {
      setTimeout(() => {
        resolve(msg);
      }, tempo);
    }
  });
}

async function executa() {
  try {
    const faseOne = await esperaAi("Fase 1", rand());
    console.log(faseOne);
    const faseTwo = await esperaAi("Fase 2", rand());
    console.log(faseTwo);
    const faseThree = await esperaAi("Fase 3", rand());
    console.log(faseThree);
  } catch (e) {
    console.log(e);
  }
}

executa();
