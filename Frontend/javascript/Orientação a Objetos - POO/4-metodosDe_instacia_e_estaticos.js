class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //metodo instancia
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  //metodo estatico
  static trocaPilha() {
    console.log('Vou trocar')
  }
}

const c1 = new ControleRemoto("LG");
c1.aumentarVolume()
c1.aumentarVolume()
c1.aumentarVolume()
c1.diminuirVolume()
console.log(c1)
ControleRemoto.trocaPilha()
