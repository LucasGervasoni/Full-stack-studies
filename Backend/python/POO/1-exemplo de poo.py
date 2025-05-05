class Pessoa:
  def __init__(self, nome, idade):
    self.nome = nome
    self.idade = idade
 
  def saudacao(self):
    print(f'Olá, meu nome é {self.nome} e tenho {self.idade} anos.')

pessoa1 = Pessoa('Lucas', 20)
pessoa1.saudacao()