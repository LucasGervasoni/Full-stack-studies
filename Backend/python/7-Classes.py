####################################################
## 5. Classes
####################################################


# Nós usamos o operador "class" para ter uma classe
class Human:

    # Um atributo de classe. Ele é compartilhado por todas as instâncias dessa
    # classe.
    species = "H. sapiens"

    # Construtor básico, é chamado quando esta classe é instanciada.
    # Note que dois sublinhados no início e no final de uma identificados
    # significa objetos ou atributos que são usados pelo python mas vivem em
    # um namespace controlado pelo usuário. Métodos (ou objetos ou atributos)
    # como: __init__, __str__, __repr__, etc. são chamados métodos mágicos (ou
    # algumas vezes chamados métodos dunder - "double underscore")
    # Você não deve usar nomes assim por sua vontade.
    def __init__(self, name):
        @ Atribui o argumento ao atributo da  instância
        self.name = name

    # Um método de instância. Todos os métodos tem "self" como primeiro
    # argumento
    def say(self, msg):
        return "{name}: {message}".format(name=self.name, message=msg)

    # Um método de classe é compartilhado por todas as instâncias
    # Eles são chamados com a classe requisitante como primeiro argumento
    @classmethod
    def get_species(cls):
        return cls.species

    # Um método estático é chamado sem uma referência a classe ou instância
    @staticmethod
    def grunt():
        return "*grunt*"


# Instancie uma classe
i = Human(name="Ian")
print(i.say("oi"))     # imprime "Ian: oi"

j = Human("Joel")
print(j.say("olá"))  # imprime "Joel: olá"

# Chama nosso método de classe
i.get_species()  # => "H. sapiens"

# Altera um atributo compartilhado
Human.species = "H. neanderthalensis"
i.get_species()  # => "H. neanderthalensis"
j.get_species()  # => "H. neanderthalensis"

# Chama o método estático
Human.grunt()    # => "*grunt*"


####################################################
## 6. Módulos
####################################################

# Você pode importar módulos
import math
print(math.sqrt(16))  # => 4.0

# Você pode importar apenas funções específicas de um módulo
from math import ceil, floor
print(ceil(3.7))   # => 4.0
print(floor(3.7))  # => 3.0

# Você pode importar todas as funções de um módulo para o namespace atual
# Atenção: isso não é recomendado
from math import *

# Você pode encurtar o nome dos módulos
import math as m
math.sqrt(16) == m.sqrt(16)  # => True

# Módulos python são apenas arquivos python comuns. Você
# pode escrever os seus, e importá-los. O nome do
# módulo é o mesmo nome do arquivo.

# Você pode procurar que atributos e funções definem um módulo.
import math
dir(math)


####################################################
## 7. Avançado
####################################################

# Geradores podem ajudar você a escrever código "preguiçoso"
def double_numbers(iterable):
    for i in iterable:
        yield i + i

# Um gerador cria valores conforme necessário.
# Ao invés de gerar e retornar todos os valores de uma só vez ele cria um em
# cada interação. Isto significa que valores maiores que 15 não serão
# processados em double_numbers.
# Nós usamos um sublinhado ao final do nome das variáveis quando queremos usar
# um nome que normalmente colide com uma palavra reservada do python.
range_ = range(1, 900000000)
# Multiplica por 2 todos os números até encontrar um resultado >= 30
for i in double_numbers(range_):
    print(i)
    if i >= 30:
        break


# Decoradores
# Neste exemplo beg encapsula say
# beg irá chamar say. Se say_please é verdade então ele irá mudar a mensagem
# retornada
from functools import wraps


def beg(target_function):
    @wraps(target_function)
    def wrapper(*args, **kwargs):
        msg, say_please = target_function(*args, **kwargs)
        if say_please:
            return "{} {}".format(msg, "Por favor! Eu sou pobre :(")
        return msg

    return wrapper


@beg
def say(say_please=False):
    msg = "Você me paga uma cerveja?"
    return msg, say_please


print(say())                # Você me paga uma cerveja?
print(say(say_please=True)) # Você me paga uma cerveja? Por favor! Eu sou pobre :(