from flask import request, jsonify
import os
from application.models import Users, Types
from application import app, db
from application.functions import dbToDict

@app.after_request
def add_header(response):
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    response.headers['Access-Control-Allow-Methods'] = "GET,HEAD,OPTIONS,POST,PUT"
    response.headers['Access-Control-Allow-Origin'] = os.getenv('CURRENT_URL') if os.getenv('CURRENT_URL') else 'http://localhost:3000'
    response.headers['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    return response

@app.route('/create/user', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = Users(
        username=data['username'],
        email=data['email'],
        password=data['password'],
    )
    db.session.add(new_user)
    db.session.flush()
    db.session.commit()
    return {'user_id': new_user.id, 'username': new_user.username, 'email': new_user.email}, 200

@app.route('/verify/user', methods=['POST'])
def verify_user():
    data = request.get_json()
    existing_user = Users.query.filter_by(username=data['username'])
    existing_email = Users.query.filter_by(email=data['email'])
    if existing_user.count() > 0:
        return {'error': 'Username already exists'}, 409
    if existing_email.count() > 0:
        return {'error': 'Email is already is in use'}, 409
    if data['password'] != data['confirm']:
        return {'error': 'Your confirm password does not match your password'}, 409
    return {'success': 'Information Valid'}, 200

@app.route('/login', methods=['GET'])
def login():
    email = request.args.get('email')
    password = request.args.get('password')
    attempted_user = Users.query.filter_by(email=email).first()
    if not attempted_user:
        return {'error': 'Account does not exist'}, 404
    else:
        if attempted_user.check_password_correction(attempted_password=password):
            return {'user_id': attempted_user.id, 'email': attempted_user.email, 'username': attempted_user.username}, 200
        else:
            return {'error': 'Password does not match email'}, 409

@app.route('/edit/user')
def edit_user():
    user_id = request.arsg.get('user_id')
    user = db.session.get(Users, user_id)
    user.username = request.args.get('username')
    db.session.commit()
    return {'response': 200}, 200

@app.route('/delete/user')
def delete_user():
    user_id = request.arsg.get('user_id')
    user = db.session.get(Users, user_id)
    db.session.delete(user)
    db.session.commit()
    return {'response': 200}, 200

@app.route("/types/<int:low>to<int:high>", methods=['GET'])
def types(low, high): 
    high_test = Types.query.filter_by(id=high).first()
    format_data = request.args.get('format')
    if format_data == 'modified':
        original_query = Types.query.order_by(Types.updatedAt.desc())
    elif format_data == 'created':
        original_query = Types.query.order_by(Types.createdAt.desc())
    else:
        original_query = Types.query.order_by(Types.createdAt.asc())
    for k, v in request.args.items():
        if k != 'format':
            v_arr = v.split(',')
            if v_arr[0] != '':
                original_query = original_query.filter(getattr(Types, k).in_(v_arr))
    result_query = original_query.all()
    bounded_query = result_query[low:high] if high_test else result_query[low:]
    all_bounds_arr = []
    for person in bounded_query:
        person_dict = dbToDict(person)
        all_bounds_arr.append(person_dict)
    return jsonify(all_bounds_arr)