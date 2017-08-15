users = [
    {
        'username': 'kobebacon',
        'password': 'password',
        'role': 'admin',
        'first_name': 'Rory',
        'last_name': 'Shively',
    },
    {
        'username': 'testuser',
        'password': 'secret',
        'role': 'member',
        'first_name': 'Test',
        'last_name': 'User',
    },
]


class UserTable:
    def __init__(self):
        self.data = users

    def first(self, attribute, value):
        for user in self.data:
            if user[attribute] == value:
                return user


class User:
    def __init__(self, user):
        self.username = user['username']
        self.password = user['password']
        self.role = user['role']
        self.first_name = user['first_name']
        self.last_name = user['last_name']

    def serialize(self):
        return {
            'username': self.username,
            'role': self.role,
            'firstName': self.first_name,
            'lastName': self.last_name,
        }
