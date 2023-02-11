from application import db
from application.models import Types, Link
import datetime
from application.options import external_data

def new_type(person):
    new_person = Types(
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
        createdAt= int(datetime.datetime.timestamp(datetime.datetime.now())),
        updatedAt= int(datetime.datetime.timestamp(datetime.datetime.now())),
        tag=person['Tag'],
        image=person['Image'],
    )
    db.session.add(new_person)
    db.session.flush()
    if "Links" in person.keys():
        if person["Links"]:
            for link in person["Links"]:
                new_link = Link(
                    name=link["name"],
                    url=link["url"],
                    person=new_person.id
                )
                db.session.add(new_link)
    db.session.commit()
    return new_person.id

def dbToDict(data):
    data_dict = dict((col, getattr(data, col)) for col in data.__table__.columns.keys())
    links = Link.query.filter_by(person=data.id)
    data_dict["links"] = [{'name': link.name, 'url': link.url} for link in links]
    return data_dict

def getTypeData(data):
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

def link_update(person_id, unfiltered):
    data = []
    unfiltered_split = unfiltered.split('|')[1:-1]
    for link in unfiltered_split:
        link_split = link.split('/')
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