import random

secretNumber = random.randint(1, 10)
print("Adivinhe o número entre 1 e 10")
tentativas = 0

while(tentativas < 3):
    tentativas += 1
    numero = int(input("Digite um número: "))
    
    if numero == secretNumber:
        print("Você acertou!")
        break
    elif numero < secretNumber:
        print("O número é maior")
    else:
        print("O número é menor")
else:
    print("Você perdeu! O número era", secretNumber)

