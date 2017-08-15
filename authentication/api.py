# Product Service

import jwt
import json
from datetime import datetime, timedelta
from flask import Flask, make_response, g, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin

from users import UserTable, User

app = Flask(__name__)
CORS(app)
Api(app)


@app.route('/', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username', None)
    password = data.get('password', None)

    if not username or not password:
        return jsonify({
            'error': 'credentials incomplete'
        })

    db_user = UserTable()
    user = db_user.first('username', username)

    if not user:
        return jsonify({
            'error': 'credentials incorrect'
        })

    user = User(user=user)

    if user.password == password:
        token = jwt.encode({
            'username': user.username,
            'role': user.role,
            'exp': datetime.utcnow() + timedelta(minutes=app.config.get('JWT_LIFETIME', 3600)),
            'iat': datetime.utcnow(),
        }, app.config.get('JWT_KEY', 'changeme'))

        response_data = {
            'token': token.decode('utf-8'),
            'user': user.serialize(),
        }

        return jsonify(response_data)

    else:
        return jsonify({
            'error': 'credentials incorrect'
        })


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
