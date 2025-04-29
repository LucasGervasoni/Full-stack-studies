name = input("Qual o seu nome? ")
idade = int(input("Qual a sua idade? "))

print(f"Olá {name}, você tem {idade} anos.")

qtdLetras = len(name.replace(" ", ""))
print(f"Seu nome tem {qtdLetras} letras.")

print("Daqui a 5 anos você terá", idade + 5, "anos.")