def adicionar_tarefa(tarefas, nome_tarefa):
  tarefa = {
    "nome": nome_tarefa,
    "concluida": False
  }
  tarefas.append(tarefa)
  print(f"Tarefa '{nome_tarefa}' adicionada com sucesso!")
  return

def  listar_tarefas(tarefas):
  if not tarefas:
    print("Nenhuma tarefa encontrada.")
    return
  
  print("Tarefas:")
  for i, tarefa in enumerate(tarefas, start=1):
    status = "Concluída" if tarefa["concluida"] else "Pendente"
    nome_tarefa = tarefa["nome"]
    print(f"{i}. {nome_tarefa} - {status}")

def atualizar_tarefa(tarefas, indice, novo_nome):
  if indice < 0 or indice >= len(tarefas):
    print("Índice inválido.")
    return
  
  tarefas[indice]["nome"] = novo_nome
  print(f"Tarefa atualizada para '{novo_nome}' com sucesso!")

def completar_tarefa(tarefas, indice):
  if indice < 0 or indice >= len(tarefas):
    print("Índice inválido.")
    return
  
  tarefas[indice]["concluida"] = True
  print(f"Tarefa '{tarefas[indice]['nome']}' concluída com sucesso!")

def remover_tarefas(tarefas):
  for tarefa in tarefas[:]:
    if tarefa["concluida"]:
      tarefas.remove(tarefa)
  print("Tarefas concluídas removidas com sucesso!")


tarefas = []

while True:
  print("\nMenu do Gerenciador de Tarefas")
  print("1. Adicionar tarefa")
  print("2. Listar tarefas")
  print("3. Atualizar tarefa")
  print("4. Concluir tarefa")
  print("5. Remover tarefas concluídas")
  print("6. Sair")
  
  escolha = input("Escolha uma opção: ")
  
  if escolha == "1":
    nome_tarefa = input("Digite o nome da tarefa: ")
    adicionar_tarefa(tarefas, nome_tarefa)
  elif escolha == "2":
    listar_tarefas(tarefas)
  elif escolha == "3":
    listar_tarefas(tarefas)
    indice = int(input("Digite o índice da tarefa a ser atualizada: ")) - 1
    novo_nome = input("Digite o novo nome da tarefa: ")
    atualizar_tarefa(tarefas, indice, novo_nome)
  elif escolha == "4":
    listar_tarefas(tarefas)
    indice = int(input("Digite o índice da tarefa a ser concluída: ")) - 1
    completar_tarefa(tarefas, indice)
  elif escolha == "5":
    remover_tarefas(tarefas)
  elif escolha == "6":
    break

print("Saindo do gerenciador de tarefas...")