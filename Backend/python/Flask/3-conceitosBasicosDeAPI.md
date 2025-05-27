## O que é uma API?
API significa Interface de Programação de Aplicações. Parece complicado, mas vamos simplificar:

Imagine que você está em um restaurante. Você (o cliente) olha o cardápio e escolhe o que quer comer. Então, você chama o garçom (a API) e faz seu pedido. O garçom leva seu pedido até a cozinha (o servidor), que prepara a comida. Quando a comida está pronta, o garçom traz o prato até você.

No mundo da tecnologia, funciona parecido:

- O cliente pode ser um aplicativo ou site.

- A API é como o garçom — ela leva seu pedido até o servidor.

- O servidor é quem faz o trabalho (como acessar um banco de dados ou processar algo).

- A resposta volta pela API até o cliente, que mostra o resultado para o usuário.

## Como essa comunicação funciona?
Para que tudo funcione direitinho, a comunicação precisa seguir algumas regras, como:

- Protocolo HTTP: É o mesmo protocolo usado para acessar sites. Ele define como as mensagens devem ser enviadas e recebidas.

- Métodos HTTP: São como "tipos de pedidos" que o cliente pode fazer. Os mais comuns são:

  - GET – para buscar dados (ex: ver um perfil).

  - POST – para criar algo novo (ex: criar uma conta).

  - PUT – para atualizar algo totalmente (ex: editar todo o perfil).

  - PATCH – para atualizar parcialmente (ex: mudar só o nome).

  - DELETE – para apagar algo (ex: excluir uma conta).

## O que é REST e RESTful?
REST é um estilo de arquitetura, ou seja, um conjunto de boas práticas para construir APIs usando o protocolo HTTP.

Quando uma API segue todas essas boas práticas, dizemos que ela é uma API RESTful.

Por exemplo, em uma API RESTful:

- Os dados são acessados por URLs organizadas (ex: /usuarios/123 para ver o usuário com ID 123).

- As operações usam os métodos HTTP corretos (GET, POST, etc.).

- A comunicação é feita em formato padrão, geralmente JSON.