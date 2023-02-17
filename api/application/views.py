from flask import request, render_template, session, url_for, redirect, flash, get_flashed_messages
import datetime
from application import app, admin_password, db
from application.models import Types, Link
from application.functions import getTypeData, update_type, link_update, new_type

type_entries = {
    'gender': ['Male', 'Female'],
    'sM': ['mS', 'fS'],
    'deM': ['mDe', 'fDe'],
    'func': ['Fi', 'Ni', 'Si', 'Ti', 'Fe', 'Ne', 'Se', 'Te', 'Dx', 'Ox', 'De', 'Oe', 'Di', 'Oi', 'Fx', 'Tx', 'Sx', 'Nx'],
    'anim': ['Play', 'Blast', 'Consume', 'Sleep']
}
post_loop = ['sensoryModality', 'deModality', 'function1', 'function2', 'animal1', 'animal2', 'animal3', 'animal4']
all_functions = ['Te', 'Ti', 'Fe', 'Fi', 'Ne', 'Ni', 'Se', 'Si']
tag_options = ['Community Member', 'Class Typing', 'Speculation']
all_functions = ['Te', 'Ti', 'Fe', 'Fi', 'Ne', 'Ni', 'Se', 'Si']

@app.route("/", methods=['GET', 'POST'])
def index():
    if 'authentication' in session:
        authentication = session['authentication']
    else:
        authentication = False
    if request.method == 'POST':
        if request.form.get('authentication') == admin_password:
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
                link_update(type_id, request.form.get('link_form'))
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
        next_id = Types.query.order_by(Types.id.desc()).first().id + 1
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
                    type_data['Tag'] = tag
            similar_types = Types.query.filter_by(type=type_data['Type']).all()
            add_type = True
            if similar_types:
                for similar_type in similar_types:
                    if similar_type.name == type_data['Name']:
                        add_type = False
            if add_type:
                person_id = new_type(type_data)
                link_update(person_id, request.form.get('link_form'))
                flash(f'Successfully added {type_data["Name"]} as {type_data["Type"]}',
                  category='success')
            else:
                flash('This entry has already been created',
                  category='danger')
            return redirect(url_for('view'))
        return render_template('add.html', type_entries=type_entries, authentication=authentication, next_id=next_id)
    else:
        return redirect(url_for('index'))