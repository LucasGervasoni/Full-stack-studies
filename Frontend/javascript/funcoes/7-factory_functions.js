function criarPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala: function (assunto) {
      return `${this.nome} fala ${assunto}`;
    },
    altura: a,
    peso: p,
    imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criarPessoa("Lucas", "Gervasoni", 1.7, 88);
p1.nomeCompleto = "Duda Fuzyiama"
console.log(p1.imc());
console.log(p1.fala("sobre GTA 6"));
console.log(p1.nomeCompleto);
