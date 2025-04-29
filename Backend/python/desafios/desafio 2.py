user = "Lucas"
password = "123456"

name = input("Qual o seu nome? ")
senha = input("Qual a sua senha? ")

if user == name and password == senha:
    print("Acesso permitido")
else:
    print("Acesso negado")
    print("Tente novamente")