import os

getENV = lambda key, default: os.environ.get(key, default)


HOST = getENV('HOST', "0.0.0.0")
PORT = getENV('PORT', 5050)
