from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

portafolio = [
        {
            "titulo":"Portafolio 1",
            "contenido":"Este es el texto",
            "tiempo":1
        },
        {
            "titulo":"Portafolio 2",
            "contenido":"Este es el texto",
            "tiempo":1
        },
        {
            "titulo":"Portafolio 3",
            "contenido":"Este es el texto",
            "tiempo":1
        },
        {
            "titulo":"Portafolio 4",
            "contenido":"Este es el texto",
            "tiempo":1
        },
        {
            "titulo":"Portafolio 5",
            "contenido":"Este es el texto",
            "tiempo":1
        },
        {
            "titulo":"Portafolio 6",
            "contenido":"Este es el texto",
            "tiempo":1
        }
    ]

@app.route('/')
def hello_world():
    return portafolio

if __name__ == '__main__':
    app.run(debug=True)
