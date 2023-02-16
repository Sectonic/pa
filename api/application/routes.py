from flask import request, session, jsonify
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
    session['user_id'] = new_user.id
    db.session.commit()
    return {'success': 'New Account Created'}, 200

@app.route('/verify/user', methods=['POST'])
def verify_user():
    if session.get('user_id'):
        return {'error': 'Already Logged In'}, 500
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

@app.route('/get/user', methods=['GET'])
def get_user():
    user_id = session.get('user_id')
    username = db.session.get(Users, user_id).username if user_id else None
    return jsonify({'username': username}), 200 if username else 409

@app.route('/login', methods=['GET'])
def login():
    if session.get('user_id'):
        return {'error': 'Already Logged In'}, 500
    email = request.args.get('email')
    password = request.args.get('password')
    attempted_user = Users.query.filter_by(email=email).first()
    if not attempted_user:
        return {'error': 'Account does not exist'}, 404
    else:
        if attempted_user.check_password_correction(attempted_password=password):
            session['user_id'] = attempted_user.id
            return {'success': 'Successfully Logged In'}, 200
        else:
            return {'error': 'Password does not match email'}, 409
            

@app.route('/logout', methods=['GET'])
def logout():
    session.pop('user_id', default=None)
    return {'success': 'Logged Out'}, 200

@app.route('/get/user/all', methods=['GET'])
def get_user_all():
    user_id = session.get('user_id')
    user = db.session.get(Users, user_id)
    return {'username': user.username, 'email': user.email}, 200

@app.route('/edit/user')
def edit_user():
    user_id = session.get('user_id')
    user = db.session.get(Users, user_id)
    user.username = request.args.get('username')
    db.session.commit()
    return {'response': 200}, 200

@app.route('/delete/user')
def delete_user():
    user_id = session.get('user_id')
    user = db.session.get(Users, user_id)
    db.session.delete(user)
    session.pop('user_id', default=None)
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