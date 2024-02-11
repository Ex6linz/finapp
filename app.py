from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/process-data', methods=['POST'])
def process_data():
    # Extract variables from POST request
    data = request.json
    a = data.get('variable1', 0)
    b = data.get('variable2', 0)
    c = data.get('variable3', 0)

    # Generate points for the quadratic function
    x_values = range(-10, 11)  # Generate points from -10 to 10
    y_values = [a*x**2 + b*x + c for x in x_values]

    return jsonify({'x_values': list(x_values), 'y_values': y_values})

if __name__ == '__main__':
    app.run()
