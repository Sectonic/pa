from flask import Flask, jsonify, request, render_template, session, url_for, redirect, flash, get_flashed_messages
from flask_sqlalchemy import SQLAlchemy
import datetime
import json
from discord.ext.ipc import Client

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
app.config['SECRET_KEY'] = 'key'
ipc = Client(secret_key="test")

db = SQLAlchemy(app)
app.app_context().push()

class Link(db.Model):
    __tablename__ = 'links'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100))
    url = db.Column(db.String(100))
    person = db.Column(db.Integer(), db.ForeignKey('types.id'))

class Types(db.Model):
    __tablename__ = 'types'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100))
    sex = db.Column(db.String(100))
    type = db.Column(db.String(100))
    mbti = db.Column(db.String(100))
    extrovertIntrovert = db.Column(db.String(100))
    temperment = db.Column(db.String(100))
    quadra = db.Column(db.String(100))
    sensoryModality = db.Column(db.String(100))
    deModality = db.Column(db.String(100))
    oD = db.Column(db.String(100))
    energyInfo = db.Column(db.String(100))
    function1 = db.Column(db.String(100))
    function2 = db.Column(db.String(100))
    deciderNeed = db.Column(db.String(100))
    deciderLetter = db.Column(db.String(100))
    observerNeed = db.Column(db.String(100))
    observerLetter = db.Column(db.String(100))
    animal1 = db.Column(db.String(100))
    animal2 = db.Column(db.String(100))
    animal3 = db.Column(db.String(100))
    animal4 = db.Column(db.String(100))
    playModality = db.Column(db.String(100))
    sleepModality = db.Column(db.String(100))
    blastModality = db.Column(db.String(100))
    consumeModality = db.Column(db.String(100))
    observerAxis = db.Column(db.String(100))
    deciderAxis = db.Column(db.String(100))
    createdAt = db.Column(db.Integer())
    updatedAt = db.Column(db.Integer())
    image = db.Column(db.String(500))
    tag = db.Column(db.String(100))
    links = db.relationship('Link', backref='related_links', lazy=True)

def new_type(person):
    new_type = Types(
        name=person['Name'],
        sex=person['Sex'],
        type=person['Type'],
        mbti=person['MBTI'],
        extrovertIntrovert=person['Extrovert/Introvert'],
        temperment=person['Temperament'],
        quadra=person['Quadra'],
        sensoryModality=person['Sensory Modality'],
        deModality=person['De Modality'],
        oD=person['O/D'],
        energyInfo=person['Energy/Info'],
        function1=person['1st Function'],
        function2=person['2nd Function'],
        deciderNeed=person['Decider Need'],
        deciderLetter=person['Decider Letter'],
        observerNeed=person['Observer Need'],
        observerLetter=person['Observer Letter'],
        animal1=person['1st Animal'],
        animal2=person['2nd Animal'],
        animal3=person['3rd Animal'],
        animal4=person['4th Animal'],
        playModality=person['Play Modality'],
        sleepModality=person['Sleep Modality'],
        blastModality=person['Blast Modality'],
        consumeModality=person['Consume Modality'],
        observerAxis=person['Observer Axis'],
        deciderAxis=person['Decider Axis'],
        createdAt= person['Created At'],
        updatedAt= person['Updated At'],
        tag=person['Tag'],
        image=person['Image'],
    )
    db.session.add(new_type)
    new_type_id = Types.query.filter_by(name=person['Name'], createdAt=person['Created At']).first().id
    if "Links" in person.keys():
        if person["Links"]:
            for link in person["Links"]:
                new_link = Link(
                    name=link["name"],
                    url=link["url"],
                    person=new_type_id
                )
                db.session.add(new_link)
    db.session.commit()

def dbToDict(data):
    data_dict = dict((col, getattr(data, col)) for col in data.__table__.columns.keys())
    links = Link.query.filter_by(person=data.id)
    data_dict["links"] = [{'name': link.name, 'url': link.url} for link in links]
    return data_dict

def getTypeData(data):
    external_data = json.load(open('static/options.json'))
    options = external_data
    template = external_data['template']
    for name, value in data.items():
        current_values = options[name][value]
        for coin in current_values:
            template[coin['name']] = coin['value']
    if 'deModality' in data:
        DiModality = 'M' if data['deModality'] == 'fDe' else 'F'
        DeModality = 'F' if data['deModality'] == 'fDe' else 'M'
    else:
        DiModality = 'x'
        DeModality = 'x'
    if 'sensoryModality' in data:
            if template['Observer Axis'] == 'Se-Ni':
                OiModality = 'F' if data['sensoryModality'] == 'mS' else 'M'
                OeModality = 'M' if data['sensoryModality'] == 'mS' else 'F'
            elif  template['Observer Axis'] == 'Si-Ne':
                OiModality = 'M' if data['sensoryModality'] == 'mS' else 'F'
                OeModality = 'F' if data['sensoryModality'] == 'mS' else 'M'
            else:
                OiModality = 'x'
                OeModality = 'x'
    else:
        OiModality = 'x'
        OeModality = 'x'
    if template['Observer Axis'] and template['Decider Axis']:
        template['Quadra'] = options['quadra'][template['Observer Axis']][template['Decider Axis']]['value']
    template['Play Modality'] = f'{OeModality}{DeModality}'
    template['Blast Modality'] = f'{OiModality}{DeModality}'
    template['Consume Modality'] = f'{OeModality}{DiModality}'
    template['Sleep Modality'] = f'{OiModality}{DiModality}'
    if 'animal1' in data and 'animal2' in data:
        combo = f'{data["animal1"][0]}{data["animal2"][0]}'
        if combo in options['combos']:
            template['Extrovert/Introvert'] = options['combos'][combo]['value']
    template['Type'] = f'{data["sensoryModality"][0].upper() if "sensoryModality" in data else "x"}{data["deModality"][0].upper() if "deModality" in data else "x"} {data["function1"] if "function1" in data else "xx"}/{data["function2"] if "function2" in data else "xx"} {data["animal1"][0] if "animal1" in data else "x"}{data["animal2"][0] if "animal2" in data else "x"}/{data["animal3"][0] if "animal3" in data else "x"}({data["animal4"][0] if "animal4" in data else "x"})'
    return template

def update_type(person_id, person):
    type = Types.query.filter_by(id=person_id).first()
    type.name=person['Name']
    type.sex=person['Sex']
    type.type=person['Type']
    type.mbti=person['MBTI']
    type.extrovertIntrovert=person['Extrovert/Introvert']
    type.temperment=person['Temperament']
    type.quadra=person['Quadra']
    type.sensoryModality=person['Sensory Modality']
    type.deModality=person['De Modality']
    type.oD=person['O/D']
    type.energyInfo=person['Energy/Info']
    type.function1=person['1st Function']
    type.function2=person['2nd Function']
    type.deciderNeed=person['Decider Need']
    type.deciderLetter=person['Decider Letter']
    type.observerNeed=person['Observer Need']
    type.observerLetter=person['Observer Letter']
    type.animal1=person['1st Animal']
    type.animal2=person['2nd Animal']
    type.animal3=person['3rd Animal']
    type.animal4=person['4th Animal']
    type.playModality=person['Play Modality']
    type.sleepModality=person['Sleep Modality']
    type.blastModality=person['Blast Modality']
    type.consumeModality=person['Consume Modality']
    type.observerAxis=person['Observer Axis']
    type.deciderAxis=person['Decider Axis']
    type.image=person['Image']
    type.tag=person['Tag']
    db.session.commit()

@app.after_request
def add_header(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

@app.route('/discord')
async def discord():
    resp = await ipc.request("get_pa_member", user_id=460601227806244866)
    return str(resp.response)

@app.route("/", methods=['GET', 'POST'])
def index():
    if 'authentication' in session:
        authentication = session['authentication']
    else:
        authentication = False
    if request.method == 'POST':
        if request.form.get('authentication') == 'password':
            session['authentication'] = True
        if request.form.get('logout') == 'true':
            session['authentication'] = False
        return redirect(url_for('index'))
    return render_template('admin.html', authentication=authentication)

@app.template_filter('ctime')
def timectime(s):
    return datetime.datetime.utcfromtimestamp(int(s)).strftime('%Y-%m-%d %I:%M %p')

@app.route("/view", methods=['GET', 'POST'])
def view():
    if 'authentication' in session:
        authentication = session['authentication']
    else:
        authentication = False
    if authentication:
        page = request.args.get('page', 1, type=int)
        nameStart = request.args.get('nameStart')
        if nameStart:
            try:
                id_start = int(nameStart)
                types = Types.query.filter_by(id=id_start).order_by(Types.updatedAt.desc()).paginate(page=page, per_page=50)
            except:
                types = Types.query.filter(Types.name.contains(nameStart)).order_by(Types.updatedAt.desc()).paginate(page=page, per_page=50)
        else:
            types = Types.query.order_by(Types.updatedAt.desc()).paginate(page=page, per_page=50)
        return render_template('view.html', types=types, namestart=nameStart, authentication=authentication)
    else:
        return redirect(url_for('index'))

@app.route("/link_update", methods=['POST', 'GET'])
def link_update():
    if request.method == "POST":
        data = request.get_json()
        if Link.query.filter_by(person=int(data['id'])):
            Link.query.filter_by(person=int(data['id'])).delete()
        if "links" in data.keys():
            if data["links"]:
                for link in data["links"]:
                    new_link = Link(
                        name=link["name"],
                        url=link["url"],
                        person=int(data['id'])
                    )
                    db.session.add(new_link)
        db.session.commit()
    return jsonify({'response': 200})

@app.route("/edit/<type_id>", methods=['GET', 'POST'])
def edit(type_id):
    if 'authentication' in session:
        authentication = session['authentication']
    else:
        authentication = False
    if authentication:
        current_person = Types.query.filter_by(id=type_id).first()
        person_links = Link.query.filter_by(person=type_id)
        current_links = [{'name': link.name, 'url': link.url} for link in person_links]
        type_entries = {
            'gender': ['Male', 'Female'],
            'sM': ['mS', 'fS'],
            'deM': ['mDe', 'fDe'],
            'func': ['Fi', 'Ni', 'Si', 'Ti', 'Fe', 'Ne', 'Se', 'Te', 'Dx', 'Ox', 'De', 'Oe', 'Di', 'Oi', 'Fx', 'Tx', 'Sx', 'Nx'],
            'anim': ['Play', 'Blast', 'Consume', 'Sleep']
        }
        tag_options = ['Community Member', 'Class Typing', 'Speculation']
        post_loop = ['sensoryModality', 'deModality', 'function1', 'function2', 'animal1', 'animal2', 'animal3', 'animal4']
        all_functions = ['Te', 'Ti', 'Fe', 'Fi', 'Ne', 'Ni', 'Se', 'Si']
        if request.method == 'POST':
            if request.form.get('delete'):
                db.session.delete(current_person)
                db.session.commit()
            else:
                data = {}
                for post in post_loop:
                    new_post = request.form.get(post)
                    if not new_post == '':
                        data[post] = new_post
                if request.form.get('function1') != '' and request.form.get('function2') != '':
                    if request.form.get('function1') in all_functions and request.form.get('function2') in all_functions:
                        data['mbti'] = f'{request.form.get("function1")}/{request.form.get("function2")}'
                type_data = getTypeData(data)
                type_data['Name'] = request.form.get('person_name')
                type_data['Sex'] = request.form.get('sex') if request.form.get('sex') != "" else None
                type_data['Image'] = request.form.get('image') if request.form.get('image') != "None" else None
                for tag in tag_options:
                    new_tag = request.form.get(tag)
                    if new_tag == 'on':
                        type_data['Tag'] = tag
                flash(f'Successfully changed {type_data["Name"]}',
                  category='success')
                update_type(type_id, type_data)
            return redirect(url_for('view'))
        return render_template('edit.html', current_person=current_person, type_entries=type_entries, authentication=authentication, tag=current_person.tag, links=current_links)
    else:
        return redirect(url_for('index'))

@app.route("/add", methods=['GET', 'POST'])
def add():
    if 'authentication' in session:
        authentication = session['authentication']
    else:
        authentication = False
    if authentication:
        type_entries = {
            'gender': ['Male', 'Female'],
            'sM': ['mS', 'fS'],
            'deM': ['mDe', 'fDe'],
            'func': ['Fi', 'Ni', 'Si', 'Ti', 'Fe', 'Ne', 'Se', 'Te', 'Dx', 'Ox', 'De', 'Oe', 'Di', 'Oi', 'Fx', 'Tx', 'Sx', 'Nx'],
            'anim': ['Play', 'Blast', 'Consume', 'Sleep']
        }
        next_id = Types.query.order_by(Types.id.desc()).first().id + 1
        post_loop = ['sensoryModality', 'deModality', 'function1', 'function2', 'animal1', 'animal2', 'animal3', 'animal4']
        all_functions = ['Te', 'Ti', 'Fe', 'Fi', 'Ne', 'Ni', 'Se', 'Si']
        tag_options = ['Community Member', 'Class Typing', 'Speculation']
        if request.method == 'POST':
            data = {}
            for post in post_loop:
                new_post = request.form.get(post)
                if not new_post == '':
                    data[post] = new_post
            if request.form.get('function1') != '' and request.form.get('function2') != '':
                if request.form.get('function1') in all_functions and request.form.get('function2') in all_functions:
                    data['mbti'] = f'{request.form.get("function1")}/{request.form.get("function2")}'
            type_data = getTypeData(data)
            type_data['Name'] = request.form.get('person_name')
            type_data['Sex'] = request.form.get('sex') if request.form.get('sex') != "" else None
            type_data['Image'] = request.form.get('image') if request.form.get('image') != "None" else None
            for tag in tag_options:
                new_tag = request.form.get(tag)
                if new_tag == 'on':
                    type_data['Tag'] = new_tag
            similar_types = Types.query.filter_by(type=type_data['Type']).all()
            add_type = True
            if similar_types:
                for similar_type in similar_types:
                    if similar_type.name == type_data['Name']:
                        add_type = False
            if add_type:
                new_type(type_data)
                flash(f'Successfully added {type_data["Name"]} as {type_data["Type"]}',
                  category='success')
            else:
                flash('This entry has already been created',
                  category='danger')
            return redirect(url_for('view'))
        return render_template('add.html', type_entries=type_entries, authentication=authentication, next_id=next_id)
    else:
        return redirect(url_for('index'))

@app.route("/type/<id>", methods=['GET'])
def type(id):
    person = Types.query.filter_by(id=id).first()
    if person: 
        person_dict = dbToDict(person)
        return jsonify(person_dict)
    else:
        return jsonify({'response': 500, 'error': 'Invalid ID Number. The range is from 1-1309'})

@app.route("/types/<int:low>to<int:high>", methods=['GET'])
def types(low, high): 
    if request.method == "GET":
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

if __name__ == '__main__':
    app.run(debug=True)