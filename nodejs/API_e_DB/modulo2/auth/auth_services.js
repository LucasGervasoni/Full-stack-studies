app.post('/login', (req, res) => {
  const usuario = req.body.usuario;
  const senha = req.body.senha;

  const autenticacaoValida = ValidaDadosAutenticacao(usuario, senha);

  if(!autenticacaoValida) {
      res.status(401).send({message: "Usuário não autorizado"});
      return;
  }

  const token = GeraToken();

  res.status(200).send({token: token});
});

export function validaToken(token) {
  let status;
  let codigo;

  jwt.verify(token, JWT_SECRET, function(erro, dadosToken) {
      if(erro == null && dadosToken.idUsuario == 1)
      {
          status = true;
          codigo = 200;
      }
      else
      {
          status = false;
          codigo = 401;
      }
  });

  return {status: status, codigo: codigo};
}