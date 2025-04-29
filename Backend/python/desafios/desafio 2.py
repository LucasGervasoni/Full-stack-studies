# Desafio - crie um programa que:
# - Pede por um nome de usuário e uma senha.
# - Se ambos forem corretos, exibe uma mensagem de sucesso.
# - Caso contrário, exibe uma mensagem de erro. A mensagem é diferente
# quando o usuário está incorreto, e quando a senha está incorreta
# - O usuário/senha "corretos" podem ser definidos como
# variávies dentro do próprio código.


user = "Lucas"
password = "123456"

name = input("Qual o seu nome? ")
senha = input("Qual a sua senha? ")

if user == name and password == senha:
    print("Acesso permitido")
else:
    print("Acesso negado")
    print("Tente novamente")