# Dado duas listas, printe todos os valores que aparecerem
# duplicados nas duas listas.

# Dado duas listas, printe uma mensagem dizendo se existe
# algum elemento em comum entre elas ou não.



list1 = [2, 4, 6]
list2 = [1, 2, 6, 8]

for i in list1:
    for j in list2:
      if i == j:
        print(i, end=" ")
        break
    