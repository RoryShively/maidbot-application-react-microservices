# Product Service

import jwt
from datetime import datetime, timedelta
from flask import Flask, make_response, g, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
api = Api(app)

@app.before_request
def process_token():
    token = request.headers.get(
        'Authorization',
        jwt.encode({'exp': 0}, 'changeme')
    )
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
        return {
            'messages': [
                {
                    'user': 'kobebacon',
                    'message': 'Hey whats up?',
                },
                {
                    'user': 'nara_the_ham',
                    'message': 'Making a new react app with microservices, you?',
                },
            ]
        }

api.add_resource(Message, '/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
