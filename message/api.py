# Message Service

import os
import jwt
import yaml
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
app.config['JWT_KEY'] = os.environ['JWT_KEY']

CORS(app)
api = Api(app)


def process_token(token):
    try:
        user_info = jwt.decode(token, app.config.get('JWT_KEY', None))
        authorized = True if user_info is not None else False
        return user_info, authorized
    except jwt.DecodeError as e:
        return None, False
    except jwt.ExpiredSignatureError as e:
        return None, False


class Message(Resource):
    def get(self):
        token = request.headers.get('Authorization')
        user_info, authorized = process_token(token)

        if not authorized:
            response = jsonify({ 'error': 'not authorized' })
            response.status_code = 401
            return response

        with open("messages.yaml", 'r') as stream:
            try:
                response = jsonify(yaml.load(stream))
                response.status_code = 200
                return response
            except yaml.YAMLError as exc:
                response = jsonify({'error': 'server error'})
                response.status_code = 500
                return response

    def post(self):
        token = request.headers.get('Authorization')
        user_info, authorized = process_token(token)
        data = request.get_json()

        if not authorized:
            response = jsonify({ 'error': 'not authorized' })
            response.status_code = 401
            return response

        with open("messages.yaml", 'r') as stream:
            try:
                old_data = yaml.load(stream)
            except yaml.YAMLError as exc:
                response = jsonify({ 'error': 'server error' })
                response.status_code = 500
                return response

        old_data['messages'] += [data]

        with open("messages.yaml", "w") as yaml_file:
            yaml_file.write(yaml.dump(old_data, default_flow_style=False))

        response = jsonify(data)
        response.status_code = 201
        return response

api.add_resource(Message, '/api/message')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
