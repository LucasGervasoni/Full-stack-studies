#herança & polimorfismo

class Animal:
    def __init__(self, nome):
      self.nome = nome
      
    def andar(self):
        print(f'{self.nome} está andando.')
    
    def emitir_som(self):
        pass

class Cachorro(Animal):
    def emitir_som(self):
        print(f'{self.nome} faz: Au Au!')

class Gato(Animal):
    def emitir_som(self):
        print(f'{self.nome} faz: Miau!')
        
dog = Cachorro('Rex')
dog.emitir_som()
cat = Gato('Mimi')
cat.emitir_som()

#Encapsulamento

class ContaBancaria:
  def __init__(self, saldo):
    self.__saldo = saldo
    
  def depositar(self, valor):
    if valor > 0:
      self.__saldo += valor
      print(f'Depósito de {valor} realizado. Saldo atual: {self.__saldo}')
    else:
      print('Valor inválido para depósito.')
  
  def sacar(self, valor):
    if 0 < valor <= self.__saldo:
      self.__saldo -= valor
      print(f'Saque de {valor} realizado. Saldo atual: {self.__saldo}')
    else:
      print('Valor inválido para saque.')
  
  def consultar_saldo(self):
    print(f'Saldo atual: {self.__saldo}')

conta = ContaBancaria(1000)
conta.consultar_saldo()
conta.depositar(500)
conta.sacar(200)
conta.consultar_saldo()

#Abstração

from abc import ABC, abstractmethod

class Forma:
    @abstractmethod
    def area(self):
        pass
    
class Retangulo(Forma):
    def __init__(self, largura, altura):
        self.largura = largura
        self.altura = altura
        
    def area(self):
        return self.largura * self.altura

class Circulo(Forma):
    def __init__(self, raio):
        self.raio = raio
        
    def area(self):
        return 3.14 * (self.raio ** 2)
      
      
# Exemplo de uso
ret = Retangulo(5, 10)
print(f'Área do retângulo: {ret.area()}')
circule = Circulo(7)
print(f'Área do círculo: {circule.area()}')