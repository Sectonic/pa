import TypeInfo from '@public/json/typeInfo.json';

export const getTypeData = (typeString) => {
    const all_functions = ['Te', 'Ti', 'Fe', 'Fi', 'Ne', 'Ni', 'Se', 'Si'];
    const animal_options = {
        'P': 'Play',
        'B': 'Blast',
        'C': 'Consume',
        'S': 'Sleep'
    }
    const parts = typeString.split(' ');
    const modalities = parts[0];
    const functions = parts[1].split('/');
    const animals = parts[2];
    const data = {
        'sensoryModality': modalities[0] === 'x' ? null : modalities[0].toLowerCase() + 'S',
        'deModality':  modalities[1] === 'x' ? null : modalities[1].toLowerCase() + 'De',
        'function1': functions[0] === 'x' ? null : functions[0],
        'function2': functions[1] === 'x' ? null : functions[1],
        'animal1': animals[0] === 'x' ? null : animal_options[animals[0]],
        'animal2': animals[1] === 'x' ? null : animal_options[animals[1]],
        'animal3': animals[3] === 'x' ? null : animal_options[animals[3]],
        'animal4': animals[5] === 'x' ? null : animal_options[animals[5]],
    }
    if ((functions !== 'xx/xx') && all_functions.includes(data.function1) && all_functions.includes(data.function2)) {
        data.mbti = data.function1 + '/' + data.function2;
    }
    let temp = {...TypeInfo.template};
    for (const [name, value] of Object.entries(data)) {
        if (value) {
            let current = TypeInfo[name][value];
            current.forEach(coin => {
                temp[coin.name] = coin.value;
            })
        }
    }
    if (temp.observerAxis && temp.observerAxis) {
        temp.quadra = TypeInfo.quadra[temp.observerAxis][temp.deciderAxis].value;
    }
    if (data.animal1 && data.animal2) {
        let combo = data.animal1.charAt(0) + data.animal2.charAt(0);
        if (combo in TypeInfo.combos) {
            temp.extrovertIntrovert = TypeInfo.combos[combo].value;
        }
    }
    var diModality = 'x', deModality = 'x', oiModality = 'x', oeModality = 'x';
    if (data.deModality) {
        diModality = data.deModality === 'fDe' ? 'M' : 'F'
        deModality = data.deModality === 'fDe' ? 'F' : 'M'
    }
    if (data.sensoryModality) {
        if (temp.observerAxis === 'Se-Ni') {
            oiModality = data.sensoryModality === 'mS' ? 'F' : 'M'
            oeModality = data.sensoryModality === 'mS' ? 'M' : 'F'
        } else if (temp.observerAxis === 'Si-Ne') {
            oiModality = data.sensoryModality === 'mS' ? 'M' : 'F'
            oeModality = data.sensoryModality === 'mS' ? 'F' : 'M' 
        }
    }
    if (temp.observerAxis && temp.deciderAxis) {
        temp.quadra = TypeInfo.quadra[temp.observerAxis][temp.deciderAxis].value
    }
    temp.playModality = oeModality + deModality;
    temp.blastModality = oiModality + deModality;
    temp.consumeModality = oeModality + diModality;
    temp.sleepModality = oiModality + diModality;
    if (data.animal1 && data.animal2) {
        const combo = animals[0] + animals[1];
        if (combo in TypeInfo.combos) {
            temp.extrovertIntrovert = TypeInfo.combos[combo].value
        }
    }
    temp.type = typeString;
    return temp;
}