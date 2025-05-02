def adicionar_contato(agenda, nome, telefone):
  contato = {"nome": nome, "telefone": telefone, "favorito": False}
  agenda.append(contato)
  print(f"Contato '{nome}' adicionado com sucesso!")
  
def listar_contatos(agenda):
  if not agenda:
    print("Nenhum contato encontrado.")
    return
  
  print(f"\nLista de contatos ({len(agenda)}):")
  
  for i, contato in enumerate(agenda, start=1):
    favorito = "Favorito" if contato["favorito"] else "Não Favorito"
    contato_nome = contato["nome"]
    contato_telefone = contato["telefone"]
    print(f"{i}. {contato_nome} - {contato_telefone} - {favorito}")

def atualizar_contato(agenda, indice, novo_nome, novo_telefone):
  if indice < 0 or indice >= len(agenda):
    print("Índice inválido.")
    return
  
  agenda[indice]["nome"] = novo_nome
  agenda[indice]["telefone"] = novo_telefone
  print(f"Contato atualizado para '{novo_nome}' com sucesso!")

def adicionar_favorito(agenda, indice):
  if indice < 0 or indice >= len(agenda):
    print("Índice inválido.")
    return
  
  agenda[indice]["favorito"] = True
  print(f"Contato '{agenda[indice]['nome']}' adicionado aos favoritos com sucesso!")
  
def listar_favoritos(agenda):
  favoritos = [contato for contato in agenda if contato["favorito"]]
  
  if not favoritos:
    print("Nenhum contato favorito encontrado.")
    return
  
  print(f"\nLista de contatos favoritos ({len(favoritos)}):")
  
  for i, contato in enumerate(favoritos, start=1):
    contato_nome = contato["nome"]
    contato_telefone = contato["telefone"]
    print(f"{i}. {contato_nome} - {contato_telefone}")

def remover_contato(agenda, indice):
  if indice < 0 or indice >= len(agenda):
    print("Índice inválido.")
    return
  
  contato_removido = agenda.pop(indice)
  contato_nome = contato_removido["nome"]
  print(f"Contato '{contato_nome}' removido com sucesso!")
    
agenda = []

while True:
  print("\nMenu da Agenda")
  print("1. Adicionar contato")
  print("2. Listar contatos")
  print("3. Atualizar contato")
  print("4. Adicionar contato como favorito")
  print("5. Listar contatos favoritos")
  print("6. Remover contato")
  print("7. Sair")
  
  escolha = input("Escolha uma opção: ")
  
  if escolha == "1":
    nome = input("Digite o nome do contato: ")
    telefone = input("Digite o telefone do contato: ")
    adicionar_contato(agenda, nome, telefone)
  elif escolha == "2":
    listar_contatos(agenda)
  elif escolha == "3":
    listar_contatos(agenda)
    indice = int(input("Digite o índice do contato a ser atualizado: ")) - 1
    novo_nome = input("Digite o novo nome do contato: ")
    novo_telefone = input("Digite o novo telefone do contato: ")
    atualizar_contato(agenda, indice, novo_nome, novo_telefone)
  elif escolha == "4":
    listar_contatos(agenda)
    indice = int(input("Digite o índice do contato a ser adicionado aos favoritos: ")) - 1
    adicionar_favorito(agenda, indice)
  elif escolha == "5":
    listar_favoritos(agenda)
  elif escolha == "6":
    listar_contatos(agenda)
    indice = int(input("Digite o índice do contato a ser removido: ")) - 1
    remover_contato(agenda, indice)
  elif escolha == "7":
    break

print("Fechando a agenda...")