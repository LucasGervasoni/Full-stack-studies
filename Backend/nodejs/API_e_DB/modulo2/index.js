import express from 'express';
import { cadastraLead } from './servico/cadastra_servico.js';
import { validaUsuario } from './validacao/valida.js';

const app = new express();

app.use(express.json());

app.post('/usuarios', async (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;

  const usuarioValido = validaUsuario(nome, email);

  if(usuarioValido.status) {
      await cadastraLead(nome, email);
      res.status(204).end();
  } else {
      res.status(400).send({mensagem: usuarioValido.mensagem});
  }
});

app.listen(9000, async () => {
    console.log("Servidor Iniciado");
});
