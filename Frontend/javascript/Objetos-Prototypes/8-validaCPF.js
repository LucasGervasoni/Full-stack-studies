function limparCPF(cpf) {
  // Remove todos os caracteres não numéricos
  return cpf.replace(/\D/g, '');
}

function calcularDigitoVerificador(base, multiplicadores) {
  // Multiplica cada número da base pelo multiplicador correspondente e soma os resultados
  const soma = base.reduce((acc, digit, index) => acc + digit * multiplicadores[index], 0);

  // Multiplica a soma por 10 e pega o resto da divisão por 11
  const resto = (soma * 10) % 11;

  // Se o resto for 10 ou 11, retorna 0. Caso contrário, retorna o resto
  return resto === 10 || resto === 11 ? 0 : resto;
}

function validarCPF(cpf) {
  const cpfLimpo = limparCPF(cpf);

  // Verifica se o CPF tem exatamente 11 dígitos
  if (cpfLimpo.length !== 11) return false;

  // Converte o CPF para um array de números
  const numeros = cpfLimpo.split('').map(Number);

  // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
  if (/^(\d)\1{10}$/.test(cpfLimpo)) return false;

  // Cálculo do primeiro dígito verificador
  const multiplicadoresPrimeiroDigito = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  const basePrimeiroDigito = numeros.slice(0, 9);
  const primeiroDigito = calcularDigitoVerificador(basePrimeiroDigito, multiplicadoresPrimeiroDigito);

  // Verifica se o primeiro dígito calculado é igual ao fornecido
  if (primeiroDigito !== numeros[9]) return false;

  // Cálculo do segundo dígito verificador
  const multiplicadoresSegundoDigito = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  const baseSegundoDigito = numeros.slice(0, 10); // Inclui o primeiro dígito verificador
  const segundoDigito = calcularDigitoVerificador(baseSegundoDigito, multiplicadoresSegundoDigito);

  // Verifica se o segundo dígito calculado é igual ao fornecido
  return segundoDigito === numeros[10];
}

// Exemplo de uso
const cpfTeste = "167.968.037-44"; 
if (validarCPF(cpfTeste)) {
  console.log("CPF válido!");
} else {
  console.log("CPF inválido!");
}
