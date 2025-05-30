from flask import Flask # type: ignore

# __name__ = "__main__" quando o arquivo é executado diretamente
app = Flask(__name__)

@app.route("/")  # Decorador para definir a rota
def hello_world():
    return "<h1>Hello World!</h1>"

@app.route("/sobre")  # Outra rota
def sobre():
    return "<h1>Sobre</h1><p>Esta é a minha primeira aplicação Flask!</p>"

if __name__ == "__main__":
    # Executa o servidor Flask na porta 5000
    
    app.run(debug=True)  # Executa o servidor Flask em modo de depuração