# Desafio - crie um programa que:
# - Pede pelo seu nome e idade
# - Dá oi para você
# - Conta quantas letras seu nome possui
# - Fala quantos anos você terá daqui a 5 anos



name = input("Qual o seu nome? ")
idade = int(input("Qual a sua idade? "))

print(f"Olá {name}, você tem {idade} anos.")

qtdLetras = len(name.replace(" ", ""))
print(f"Seu nome tem {qtdLetras} letras.")

print("Daqui a 5 anos você terá", idade + 5, "anos.")