function validaNome(nome) {
  const regexNome = /^[a-zA-ZÀ-ÿ\s\-']+$/;

  const isValid = nome.length >= 2 && regexNome.test(nome);
  return isValid;
}

function validaEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = regexEmail.test(email);

  return isValid;
}

export function validarUsuario(nome,email){
  const nomeValido = validaNome(nome);
  const emailValido = validaEmail(email);

  const usuarioValido = nomeValido && emailValido;

  if (usuarioValido) {
    return {status: true, mensagem: ""};
  }else{
    return {status: false, mensagem: "Nome ou emails inválidos"};
  }
}