# Dado uma sequência de números, calcule a soma e média dos números.
# ATENÇÃO: não vale usar a função sum() !

# Dado uma sequência de números, calcule o maior valor da sequência.
# ATENÇÃO: não vale usar a função max() !

# Dado uma lista de palavras, printe todas as palavras
# com pelo menos 5 caracteres.



nums = [2,5,3,10,8,6,4,7,9,1]
soma = 0
media = 0

for num in nums:
  soma += num
  
media = soma / len(nums)
print(f'A soma dos números é: {soma}')
print(f'A média dos números é: {media}')
print(f'O maior número é: {max(nums)}')
print(f'O menor número é: {min(nums)}')


  