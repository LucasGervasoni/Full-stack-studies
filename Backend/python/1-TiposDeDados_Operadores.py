####################################################
## 1. Tipos de dados primitivos e operadores
####################################################

# Você usa números normalmente
3  # => 3

# Matemática é como você espera que seja
1 + 1   # => 2
8 - 1   # => 7
10 * 2  # => 20

# Números são inteiros por padrão, exceto na divisão, que retorna número
# de ponto flutuante (float).
35 / 5  # => 7.0

# O resultado da divisão inteira arredonda para baixo tanto para números
# positivos como para negativos.
5 // 3       # => 1
5.0 // 3.0   # => 1.0 # funciona em float também
-5 // 3      # => -2
-5.0 // 3.0  # => -2.0

# Quando você usa um float, o resultado é float.
3 * 2.0  # => 6.0

# operador módulo
7 % 3  # => 1

# Exponenciação (x**y, x elevado à potência y)
2**4  # => 16

# Determine a precedência usando parênteses
(1 + 3) * 2  # => 8

# Valores lógicos são primitivos (Atenção à primeira letra maiúscula)
True
False

# negação lógica com not
not True   # => False
not False  # => True

# Operadores lógicos
# Observe que "and" e "or" são sensíveis a maiúsculas e minúsculas
True and False  # => False
False or True   # => True

# Observe a utilização de operadores lógicos com números inteiros
0 and 2     # => 0
-5 or 0     # => -5
0 == False  # => True
2 == True   # => False
1 == True   # => True

# Igualdade é ==
1 == 1  # => True
2 == 1  # => False

# Diferença é !=
1 != 1  # => False
2 != 1  # => True

# Mais comparações
1 < 10  # => True
1 > 10  # => False
2 <= 2  # => True
2 >= 2  # => True

# Comparações podem ser agrupadas
1 < 2 < 3  # => True
2 < 3 < 2  # => False

# 'is' verifica se duas variáveis representam o mesmo endereço
# na memória; '==' verifica se duas variáveis têm o mesmo valor
a = [1, 2, 3, 4]  # Referência a uma nova lista, [1, 2, 3, 4]
b = a             # b referencia o que está referenciado por a
b is a            # => True, a e b referenciam o mesmo objeto
b == a            # => True, objetos a e b tem o mesmo conteúdo
b = [1, 2, 3, 4]  # Referência a uma nova lista, [1, 2, 3, 4]
b is a            # => False, a e b não referenciam o mesmo objeto
b == a            # => True, objetos a e b tem o mesmo conteúdo