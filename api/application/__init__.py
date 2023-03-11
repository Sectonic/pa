from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
import os
from cryptography.fernet import Fernet

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL') if os.getenv('DATABASE_URL') else 'sqlite:///database.db'
app.config['SQLALCHEMY_POOL_RECYCLE'] = 299
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY') if os.getenv('SECRET') else 'key'
app.config.update(
    SESSION_COOKIE_SECURE=True,
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="None",
)
admin_password = os.getenv('PASSWORD') if os.getenv('PASSWORD') else 'password'
bcrypt = Bcrypt(app)
db = SQLAlchemy(app)
migrate = Migrate(app, db, command='migrate')
crypt = Fernet(open("crypt.key", "rb").read())

from application import routes
from application import views
