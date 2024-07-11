from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def hello_world():
    return '{"mensaje":"hola"}'

if __name__ == '__main__':
    app.run(debug=True)
