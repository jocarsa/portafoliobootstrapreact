from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

conexion = mysql.connector.connect(
    host="localhost",
    user="portafolioreact",
    password="portafolioreact",
    database="portafolioreact"
)

cursor = conexion.cursor(dictionary=True)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/')
def hello_world():
    query = "SELECT * FROM fichas"
    cursor.execute(query)
    rows = cursor.fetchall()
    return jsonify(rows)

if __name__ == '__main__':
    app.run(debug=True)
