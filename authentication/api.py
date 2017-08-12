# Product Service

import jwt
from datetime import datetime, timedelta
from flask import Flask, make_response, g, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
Api(app)

@app.route('/', methods=['GET'])
def get_jwt():
    token = jwt.encode({
        'username': 'kobebacon',
        'role': 'admin',
        'exp': datetime.utcnow() + timedelta(minutes=app.config.get('JWT_LIFETIME', 60)),
        'iat': datetime.utcnow(),
    }, app.config.get('JWT_KEY', 'changeme'))
    response = make_response(token)
    response.set_cookie('jwt', token, domain='127.0.0.1')
    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
