# Strings são criadas com " ou '
"Isto é uma string."
'Isto também é uma string.'

# Strings também podem ser somadas! Mas tente não fazer isso.
"Olá " + "mundo!"  # => "Olá mundo!"
# Strings podem ser somadas sem usar o '+'
"Olá " "mundo!"    # => "Olá mundo!"

# Uma string pode ser manipulada como se fosse uma lista de caracteres
"Isso é uma string"[0]  # => 'I'

# .format pode ser usado para formatar strings, dessa forma:
"{} podem ser {}".format("Strings", "interpoladas")  # => "Strings podem ser interpoladas"

# Você pode repetir os argumentos para digitar menos.
"Seja ágil {0}, seja rápido {0}, salte sobre o {1} {0}".format("Jack", "castiçal")
# => "Seja ágil Jack, seja rápido Jack, salte sobre o castiçal Jack."

# Você pode usar palavras-chave se quiser contar.
"{nome} quer comer {comida}".format(nome="Beto", comida="lasanha")  # => "Beto quer comer lasanha"

# Se você precisa executar seu código Python3 com um interpretador Python 2.5 ou acima, você pode usar a velha forma para formatação de texto:
"%s podem ser %s da forma %s" % ("Strings", "interpoladas", "antiga")  # => "Strings podem ser interpoladas da forma antiga"
