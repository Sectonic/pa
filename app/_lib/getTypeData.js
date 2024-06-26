import TypeInfo from '@public/json/typeInfo.json';

export const getTypeData = (typeString, includeNull = true) => {
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
        'function1': functions[0] === 'xx' ? null : functions[0],
        'function2': functions[1] === 'xx' ? null : functions[1],
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
            if (current && (includeNull || !['sensoryModality', 'deModality'].includes(name))) {
                current.forEach(coin => {
                    temp[coin.name] = coin.value;
                });
            }
        }
    }
    if (temp.observerAxis && temp.deciderAxis) {
        temp.quadra = TypeInfo.quadra[temp.observerAxis][temp.deciderAxis].value;
    }
    if (data.animal1 && data.animal2) {
        let combo = data.animal1.charAt(0) + data.animal2.charAt(0);
        if (combo in TypeInfo.combos) {
            temp.extrovertIntrovert = TypeInfo.combos[combo].value;
        }
    }
    var diModality = 'x', deModality = 'x', oiModality = 'x', oeModality = 'x';
    if (includeNull) {
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
        temp.type = typeString;
    }
    if (data.animal1 && data.animal2) {
        const combo = animals[0] + animals[1];
        if (combo in TypeInfo.combos) {
            temp.extrovertIntrovert = TypeInfo.combos[combo].value
        }
    }
    return temp;
}

export const checkCorrectType = (typeData) => {

    const acceptableTypes = {
        modalities: ['MM', 'MF', 'FM', 'FF', 'Mx', 'Fx', 'xM', 'xF', 'xx'],
        functions: ['Te', 'Fe', 'Fi', 'Ti', 'Ne', 'Se', 'Ni', 'Si', 'De', 'Di', 'Oe', 'Oi', 'Tx', 'Fx', 'Nx', 'Sx', 'Dx', 'Ox', 'xx'],
        animals: ['P', 'B', 'C', 'S', 'x']
    }

    if (!acceptableTypes.modalities.includes(typeData.modalities)) {
        return 'Modality input is not acceptable';
    }
    if (!acceptableTypes.functions.includes(typeData.function1) || !acceptableTypes.functions.includes(typeData.function2)) {
        return 'Function input(s) are not acceptable';
    }
    const animalString = typeData.animals.replace(/[^A-Za-z]/g, '');
    for (var i = 0; i < animalString.length; i++) {
        const animalChr = animalString.charAt(i);
        if (!acceptableTypes.animals.includes(animalChr)) {
            return 'Animal input(s) are not acceptable';
        }
    }

    return;
}

export const formatType = (input) => {
    const template = "xx xx/xx xx/x(x)";
    var formattedInput = '';
    for (let i = 0; i < template.length; i++) {
        const inputPart = input[i];
        if (inputPart) {
            formattedInput += inputPart
        } else {
            formattedInput += template[i];
        }
    }
    
    return formattedInput;
}

export const combineToFunctions = (need, letter, oD = null) => {

    if (!need && !letter) {

        if (oD) {
            return oD === 'decider' ? 'Dx' : 'Ox';
        }

        return 'Xx';
    }

    if (!letter) {
        return need;
    }

    if (!need) {
        return letter + 'x';
    }

    return letter[0] + need[1];
};

export const changeAnimals = (anim1, energyAnim, infoAnim, energyInfo) => {

    const animalType = {
        'Consume': 'Info',
        'Blast': 'Info',
        'Sleep': 'Energy',
        'Play': 'Energy'
    }

    const oppositeAnimals = {
        'Consume': 'Blast',
        'Blast': 'Consume',
        'Sleep': 'Play',
        'Play': 'Sleep',  
        'None': 'x' 
    }

    const anim2 = anim1 ? (animalType[anim1] === 'Energy' ? infoAnim : energyAnim) : null;
    const demons = [oppositeAnimals[anim1 || 'None'], oppositeAnimals[anim2 || 'None']];
    var anim3, anim4;

    if (animalType[demons[0]] !== energyInfo) {
        anim4 = demons[0];
        anim3 = demons[1];
    } else {
        anim4 = demons[1];
        anim3 = demons[0];
    }
    
    return `${anim1[0]}${anim2 ? anim2[0] : 'x'}/${anim3[0]}(${anim4[0]})`

}