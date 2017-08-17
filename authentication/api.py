# Product Service

import os
import jwt
from datetime import datetime, timedelta
from flask import Flask, request, jsonify
from flask_restful import Api
from flask_cors import CORS

from users import UserTable, User

app = Flask(__name__)
app.config['JWT_KEY'] = os.environ['JWT_KEY']

CORS(app)
Api(app)


@app.route('/', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username', None)
    password = data.get('password', None)

    if not username or not password:
        response = jsonify({ 'error': 'credentials incomplete' })
        response.status_code = 401
        return response

    db_user = UserTable()
    user = db_user.first('username', username)

    if not user:
        response = jsonify({ 'error': 'credentials incorrect' })
        response.status_code = 401
        return response

    user = User(user=user)

    if user.password == password:
        token = jwt.encode({
            'username': user.username,
            'role': user.role,
            'exp': datetime.utcnow() + timedelta(minutes=app.config.get('JWT_LIFETIME', 3600)),
            'iat': datetime.utcnow(),
        }, app.config.get('JWT_KEY', None))

        response = jsonify({
            'token': token.decode('utf-8'),
            'user': user.serialize(),
        })
        response.status_code = 200
        return response

    else:
        response = jsonify({ 'error': 'credentials incorrect' })
        response.status_code = 401
        return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
