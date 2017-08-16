# Message Service

import jwt
import yaml
from datetime import datetime, timedelta
from flask import Flask, make_response, g, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
api = Api(app)


def process_token(token):
    try:
        user_info = jwt.decode(token, 'changeme')
        g.user_info = user_info
    except jwt.ExpiredSignatureError as e:
        response = make_response('Your JWT has expired')
        response.status_code = 401
        return response
    except jwt.DecodeError as e:
        response = make_response('Your JWT is invalid')
        response.status_code = 401
        return response

class Message(Resource):
    def get(self):
        process_token(request.headers.get('Authorization'))
        try:
            if not g.user_info:
                return 'asdf'
        except AttributeError as e:
            return 'AttributeError'

        with open("messages.yaml", 'r') as stream:
            try:
                return yaml.load(stream)
            except yaml.YAMLError as exc:
                response = make_response('Server Error')
                response.status_code = 500
                return response

    def post(self):
        process_token(request.headers.get('Authorization'))
        data = request.get_json()

        with open("messages.yaml", 'r') as stream:
            try:
                old_data = yaml.load(stream)
            except yaml.YAMLError as exc:
                response = make_response('Server Error')
                response.status_code = 500
                return response

        old_data['messages'] += [data]
        # return old_data

        with open("messages.yaml", "w") as yaml_file:
            yaml_file.write(yaml.dump(old_data, default_flow_style=False))

        return data

api.add_resource(Message, '/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
