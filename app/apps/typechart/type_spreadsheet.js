import TypeInfo from '@public/json/typeInfo.json';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const all_functions = ['Te', 'Ti', 'Fe', 'Fi', 'Ne', 'Ni', 'Se', 'Si'];

const allTypes = [
    "Fi/Ni SC/B(P)",
    "Fi/Si SC/B(P)",
    "Ni/Fi SC/B(P)",
    "Ni/Ti SC/B(P)",
    "Si/Fi SC/B(P)",
    "Si/Ti SC/B(P)",
    "Ti/Ni SC/B(P)",
    "Ti/Si SC/B(P)",
    "Fi/Ni SC/P(B)",
    "Fi/Si SC/P(B)",
    "Ni/Fi SC/P(B)",
    "Ni/Ti SC/P(B)",
    "Si/Fi SC/P(B)",
    "Si/Ti SC/P(B)",
    "Ti/Ni SC/P(B)",
    "Ti/Si SC/P(B)",
    "Fi/Ni SB/C(P)",
    "Fi/Si SB/C(P)",
    "Ni/Fi SB/C(P)",
    "Ni/Ti SB/C(P)",
    "Si/Fi SB/C(P)",
    "Si/Ti SB/C(P)",
    "Ti/Ni SB/C(P)",
    "Ti/Si SB/C(P)",
    "Fi/Ni SB/P(C)",
    "Fi/Si SB/P(C)",
    "Ni/Fi SB/P(C)",
    "Ni/Ti SB/P(C)",
    "Si/Fi SB/P(C)",
    "Si/Ti SB/P(C)",
    "Ti/Ni SB/P(C)",
    "Ti/Si SB/P(C)",
    "Fi/Ne CS/B(P)",
    "Fi/Se CS/B(P)",
    "Ti/Ne CS/B(P)",
    "Ti/Se CS/B(P)",
    "Ne/Fi CS/B(P)",
    "Ne/Ti CS/B(P)",
    "Se/Fi CS/B(P)",
    "Se/Ti CS/B(P)",
    "Fi/Ne CS/P(B)",
    "Fi/Se CS/P(B)",
    "Ti/Ne CS/P(B)",
    "Ti/Se CS/P(B)",
    "Ne/Fi CS/P(B)",
    "Ne/Ti CS/P(B)",
    "Se/Fi CS/P(B)",
    "Se/Ti CS/P(B)",
    "Fi/Ne CP/S(B)",
    "Fi/Se CP/S(B)",
    "Ti/Ne CP/S(B)",
    "Ti/Se CP/S(B)",
    "Ne/Fi CP/S(B)",
    "Ne/Ti CP/S(B)",
    "Se/Fi CP/S(B)",
    "Se/Ti CP/S(B)",
    "Fi/Ne CP/B(S)",
    "Fi/Se CP/B(S)",
    "Ti/Ne CP/B(S)",
    "Ti/Se CP/B(S)",
    "Ne/Fi CP/B(S)",
    "Ne/Ti CP/B(S)",
    "Se/Fi CP/B(S)",
    "Se/Ti CP/B(S)",
    "Ni/Fe BS/C(P)",
    "Ni/Te BS/C(P)",
    "Si/Fe BS/C(P)",
    "Si/Te BS/C(P)",
    "Fe/Ni BS/C(P)",
    "Fe/Si BS/C(P)",
    "Te/Ni BS/C(P)",
    "Te/Si BS/C(P)",
    "Ni/Fe BS/P(C)",
    "Ni/Te BS/P(C)",
    "Si/Fe BS/P(C)",
    "Si/Te BS/P(C)",
    "Fe/Ni BS/P(C)",
    "Fe/Si BS/P(C)",
    "Te/Ni BS/P(C)",
    "Te/Si BS/P(C)",
    "Ni/Fe BP/S(C)",
    "Ni/Te BP/S(C)",
    "Si/Fe BP/S(C)",
    "Si/Te BP/S(C)",
    "Fe/Ni BP/S(C)",
    "Fe/Si BP/S(C)",
    "Te/Ni BP/S(C)",
    "Te/Si BP/S(C)",
    "Ni/Fe BP/C(S)",
    "Ni/Te BP/C(S)",
    "Si/Fe BP/C(S)",
    "Si/Te BP/C(S)",
    "Fe/Ni BP/C(S)",
    "Fe/Si BP/C(S)",
    "Te/Ni BP/C(S)",
    "Te/Si BP/C(S)",
    "Fe/Ne PC/S(B)",
    "Fe/Se PC/S(B)",
    "Ne/Fe PC/S(B)",
    "Ne/Te PC/S(B)",
    "Se/Fe PC/S(B)",
    "Se/Te PC/S(B)",
    "Te/Ne PC/S(B)",
    "Te/Se PC/S(B)",
    "Fe/Ne PC/B(S)",
    "Fe/Se PC/B(S)",
    "Ne/Fe PC/B(S)",
    "Ne/Te PC/B(S)",
    "Se/Fe PC/B(S)",
    "Se/Te PC/B(S)",
    "Te/Ne PC/B(S)",
    "Te/Se PC/B(S)",
    "Fe/Ne PB/S(C)",
    "Fe/Se PB/S(C)",
    "Ne/Fe PB/S(C)",
    "Ne/Te PB/S(C)",
    "Se/Fe PB/S(C)",
    "Se/Te PB/S(C)",
    "Te/Ne PB/S(C)",
    "Te/Se PB/S(C)",
    "Fe/Ne PB/C(S)",
    "Fe/Se PB/C(S)",
    "Ne/Fe PB/C(S)",
    "Ne/Te PB/C(S)",
    "Se/Fe PB/C(S)",
    "Se/Te PB/C(S)",
    "Te/Ne PB/C(S)",
    "Te/Se PB/C(S)"
]

const everyType = [];
allTypes.forEach(type => {
    const modalities = ["FF", "FM", "MF", "MM"];   
    modalities.forEach(modality => {
        everyType.push(modality + " " + type)
    })
})
export { everyType };

function sortType (string) {
    let animal_options = {
        'P': 'Play',
        'B': 'Blast',
        'C': 'Consume',
        'S': 'Sleep'
    }
    let parts = string.split(' ')
    let functions = parts[0].split('/')
    let animals = parts[1]
    let data = {
        'function1': capitalizeFirstLetter(functions[0].toLowerCase()),
        'function2': capitalizeFirstLetter(functions[1].toLowerCase()),
        'animal1': animal_options[animals[0].toUpperCase()],
        'animal2': animal_options[animals[1].toUpperCase()],
        'animal3': animal_options[animals[3].toUpperCase()],
        'animal4': animal_options[animals[5].toUpperCase()],
    }
    if (all_functions.includes(data.function1) && all_functions.includes(data.function2)) {
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
    temp.functions = temp.function1 + '/' + temp.function2;
    return temp;
}

class TypeSpreadSheet {
    typeList = [];
    constructor(types) {
        this.typeList = types.map(type => sortType(type));
    }
    matchFilters(filters) {
        return this.typeList.map(type => {
            for (const [key, value] of Object.entries(filters)) {
                if (type[key] !== value) {
                    return {invisible: true, ...type}
                }
            }
            return type;
        });
    }
}

const sheet = new TypeSpreadSheet(allTypes);
export default sheet;
