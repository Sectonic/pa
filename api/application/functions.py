from application import db
from application.models import Types, Link
import datetime
import json
import os

def new_type(person):
    person['createdAt'] = int(datetime.datetime.timestamp(datetime.datetime.now()))
    person['updatedAt'] = int(datetime.datetime.timestamp(datetime.datetime.now()))
    new_person = Types(**person)
    db.session.add(new_person)
    db.session.commit()
    return new_person.id

def dbToDict(data):
    data_dict = dict((col, getattr(data, col)) for col in data.__table__.columns.keys())
    links = Link.query.filter_by(person=data.id)
    data_dict["links"] = [{'name': link.name, 'url': link.url} for link in links]
    return data_dict

def getTypeData(data):
    options = json.load(open(os.path.join(os.path.dirname(__file__), 'static', 'options.json')))
    template = options['template']
    for name, value in data.items():
        if value:
            current_values = options[name][value]
            for coin in current_values:
                template[coin['name']] = coin['value']
    if data['deModality']:
        DiModality = 'M' if data['deModality'] == 'fDe' else 'F'
        DeModality = 'F' if data['deModality'] == 'fDe' else 'M'
    else:
        DiModality = 'x'
        DeModality = 'x'
    if data['sensoryModality']:
            if template['observerAxis'] == 'Se-Ni':
                OiModality = 'F' if data['sensoryModality'] == 'mS' else 'M'
                OeModality = 'M' if data['sensoryModality'] == 'mS' else 'F'
            elif  template['observerAxis'] == 'Si-Ne':
                OiModality = 'M' if data['sensoryModality'] == 'mS' else 'F'
                OeModality = 'F' if data['sensoryModality'] == 'mS' else 'M'
            else:
                OiModality = 'x'
                OeModality = 'x'
    else:
        OiModality = 'x'
        OeModality = 'x'
    if template['observerAxis'] and template['deciderAxis']:
        template['quadra'] = options['quadra'][template['observerAxis']][template['deciderAxis']]['value']
    template['playModality'] = f'{OeModality}{DeModality}'
    template['blastModality'] = f'{OiModality}{DeModality}'
    template['consumeModality'] = f'{OeModality}{DiModality}'
    template['sleepModality'] = f'{OiModality}{DiModality}'
    if data['animal1'] and data['animal2']:
        combo = f'{data["animal1"][0]}{data["animal2"][0]}'
        if combo in options['combos']:
            template['extrovertIntrovert'] = options['combos'][combo]['value']
    template['type'] = f'{data["sensoryModality"][0].upper() if data["sensoryModality"] else "x"}{data["deModality"][0].upper() if data["deModality"] else "x"} {data["function1"] if data["function1"] else "xx"}/{data["function2"] if data["function2"] else "xx"} {data["animal1"][0] if data["animal1"] else "x"}{data["animal2"][0] if data["animal2"] else "x"}/{data["animal3"][0] if data["animal3"] else "x"}({data["animal4"][0] if data["animal4"] else "x"})'
    return template

def update_type(person_id, person):
    type = Types.query.filter_by(id=person_id).first()
    for key, value in person.items():
        setattr(type, key, value)
    db.session.commit()

def link_update(person_id, unfiltered):
    data = []
    unfiltered_split = unfiltered.split('|*SECTION*|')[1:-1]
    for link in unfiltered_split:
        link_split = link.split('/*LINK*/')
        data.append({'name': link_split[0], 'url': link_split[1]})
    if Link.query.filter_by(person=person_id):
        Link.query.filter_by(person=person_id).delete()
    if data:
        for link in data:
            new_link = Link(
                name=link["name"],
                url=link["url"],
                person=person_id
            )
            db.session.add(new_link)
    db.session.commit()