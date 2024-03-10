from flask import Flask, request, jsonify
from resolution import resolution


app = Flask(__name__)



@app.route('/Resolution', methods=['POST'])
def Resolution():
    expression = request.json["expression"]
    result = resolution(expression)
    return jsonify(result)

if __name__ == '__main__':
	app.run(debug=True)