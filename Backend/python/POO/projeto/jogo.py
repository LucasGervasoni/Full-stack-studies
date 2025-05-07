#Personagem: classe mae
#Heroi: controlado pelo jogador
#Inimigo: adversario do jogador

import random

class Personagem:
  def __init__(self, nome, vida, nivel):
    self.__nome = nome
    self.__vida = vida
    self.__nivel = nivel
  
  def get_nome(self):
    return self.__nome

  def get_vida(self):
    return self.__vida
  
  def get_nivel(self):
    return self.__nivel
  
  def exibir_informacoes(self):
    return f'Nome: {self.__nome}\n Vida: {self.__vida}\n Nivel: {self.__nivel}\n'
  
  def receber_ataque(self, dano):
      self.__vida -= dano
      if self.__vida < 0:
        self.__vida = 0
  
  def atacar(self, alvo):
    dano = random.randint(self.get_nivel() * 2, self.get_nivel() * 4)
    alvo.receber_ataque(dano)
    print(f'{self.get_nome()} atacou {alvo.get_nome()} e causou {dano} de dano!')
    
class Heroi(Personagem):
  
  def __init__(self, nome, vida, nivel, habilidade):
    super().__init__(nome, vida, nivel)
    self.__habilidade = habilidade
  
  def get_habilidade(self):
    return self.__habilidade
  
  def exibir_informacoes(self):
    return f'{super().exibir_informacoes()} Habilidade: {self.__habilidade}\n'
  
  def ataque_especial(self, alvo):
    dano = random.randint(self.get_nivel() * 5, self.get_nivel() * 8)
    alvo.receber_ataque(dano)
    print(f'{self.get_nome()} usou ataque especial em {alvo.get_nome()} e causou {dano} de dano!')

class Inimigo(Personagem):
  def __init__(self, nome, vida, nivel, tipo):
    super().__init__(nome, vida, nivel)
    self.__tipo = tipo

  def get_tipo(self):
    return self.__tipo
  
  def exibir_informacoes(self):
    return f'{super().exibir_informacoes()} Habilidade: {self.__tipo}\n'
  
class Jogo:
  """Classe principal do jogo."""
  def __init__(self) -> None:
    self.heroi = Heroi("Heroi", 100, 5, "Super Força")
    self.inimigo = Inimigo("Inimigo", 80, 4, "Berserker")

  def iniciar_batalha(self):
    print('Iniciando batalha!')
    
    while self.heroi.get_vida() > 0 and self.inimigo.get_vida() > 0:
      print("\nDetalhes dos personagens:")
      print(self.heroi.exibir_informacoes())
      print(self.inimigo.exibir_informacoes())
      
      input("Pressione Enter para atacar!")
      escolha = input("Escolha: 1 - Ataque normal, 2 - Ataque Especial\n")
      
      if escolha == "1":
        self.heroi.atacar(self.inimigo)
      elif escolha == "2":
        self.heroi.ataque_especial(self.inimigo)
      else:
        print("Escolha inválida!")
        
      if self.inimigo.get_vida() > 0:
        self.inimigo.atacar(self.heroi)
        
    if self.heroi.get_vida() > 0:
      print("Você venceu!")
    else:
      print("Você perdeu!")

#Criar instancia do jogo
jogo = Jogo()
jogo.iniciar_batalha()

