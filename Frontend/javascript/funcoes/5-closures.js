function retornaFuncao(){
  return function (){
    return nome
  }
}


const funcao = retornaFuncao("lucas");
console.dir(funcao);