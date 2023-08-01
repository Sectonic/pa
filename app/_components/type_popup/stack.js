// import Image from "../../_components/image";

export default function Stack({ data }) {

    function checkSavior(animal) {
        return [data.animal1, data.animal2].includes(animal);
    }

    function checkStacking(animal) {
        let checkIndex = animal_stack.indexOf(animal) + 1;
        return checkIndex
    }

    var double_options = {
        'Blast': ['oe', 'di'],
        'Play': ['oi', 'di'],
        'Consume': ['oi', 'de'],
        'Sleep': ['oe', 'de']
    }    

    var modality_options = {
        'm': {
          'ne': false,
          'ni': false,
          'si': true,
          'se': true,
          'fi': false,
          'ti': false,
          'fe': true,
          'te': true
        },
        'f': {
          'ne': true,
          'ni': true,
          'si': false,
          'se': false,
          'fi': true,
          'ti': true,
          'fe': false,
          'te': false
        }
    }

    var animal_stack = [data.animal1, data.animal2, data.animal3, data.animal4]

    var decider_functions = ['fe', 'te', 'fi', 'ti'];

    var function_options = {
        'Se': 'ni',
        'Ni': 'se',
        'Ne': 'si',
        'Si': 'ne',
        'Fi': 'te',
        'Fe': 'ti',
        'Ti': 'fe',
        'Te': 'fi'
    }

    var need_options = {
        'se': 'oe',
        'ni': 'oi',
        'ne': 'oe',
        'si': 'oi',
        'fi': 'di',
        'fe': 'de',
        'ti': 'di',
        'te': 'de'
    }

    var need_opposites = {
        'Oe': 'oi',
        'De': 'di',
        'Oi': 'oe',
        'Di': 'de'
    }

    var animal_options = {
        'oe': {
            'de': 'Play',
            'di': 'Consume'
        },
        'oi': {
            'de': 'Blast',
            'di': 'Sleep'
        },
        'de': {
            'oe': 'Play',
            'oi': 'Blast'
        },
        'di': {
            'oe': 'Consume',
            'oi': 'Sleep'
        }
    }

    var animal_axis = {
        'Blast': {
        'Se-Ni': 'ni',
        'Si-Ne': 'si',
        'Fe-Ti': 'fe',
        'Fi-Te': 'te'
        },
        'Play': {
        'Se-Ni': 'se',
        'Si-Ne': 'ne',
        'Fe-Ti': 'fe',
        'Fi-Te': 'te'
        },
        'Consume': {
        'Se-Ni': 'se',
        'Si-Ne': 'ne',
        'Fe-Ti': 'ti',
        'Fi-Te': 'fi'
        },
        'Sleep': {
        'Se-Ni': 'ni',
        'Si-Ne': 'si',
        'Fe-Ti': 'ti',
        'Fi-Te': 'fi'
        }
    } 

    var function1 = data.function1 ? data.function1.toLowerCase() : null;
    var function2 = data.function2 ? data.function2.toLowerCase() : null;
    var function3 = data.function2 ? function_options[data.function2].toLowerCase() : null;
    var function4 = data.function1 ? function_options[data.function1].toLowerCase() : null;

    var need1, need2, need3, need4;
    if (data.oD) {
        let observer = data.oD == "Observer";
        if (observer) {
        need1 = data.observerNeed ? data.observerNeed.toLowerCase() : null;
        need2 = data.deciderNeed ? data.deciderNeed.toLowerCase() : null;
        need3 = data.deciderNeed ? need_opposites[data.deciderNeed] : null;
        need4 = data.observerNeed ? need_opposites[data.observerNeed] : null;
        } else {
        need1 = data.deciderNeed ? data.deciderNeed.toLowerCase() : null;
        need2 = data.observerNeed ? data.observerNeed.toLowerCase() : null;
        need3 = data.observerNeed ? need_opposites[data.observerNeed] : null;
        need4 = data.deciderNeed ? need_opposites[data.deciderNeed] : null;
        }
    }

    var need_grant = [
        [need1, need2],
        [need2, need4],
        [need1, need3],
        [need3, need4]
    ]

    var jumper = false;

    var functions = [function1, function2, function3, function4];

    // var grant1 = function1 && function2 ? animal_options[need_options[function1]][need_options[function2]] : null;
    // var grant2 = function2 && function4 ? animal_options[need_options[function2]][need_options[function4]] : null;
    // var grant3 = function1 && function3 ? animal_options[need_options[function1]][need_options[function3]] : null;
    // var grant4 = function3 && function4 ? animal_options[need_options[function3]][need_options[function4]] : null;
    // var grant_funcs = {
    //     0: [function1, function2],
    //     1: [function2, function4],
    //     2: [function1, function3],
    //     3: [function3, function4],
    // }
    // var grants = [grant1, grant2, grant3, grant4];

    var decider_functions = ['fe', 'te', 'fi', 'ti'];

    var animal_details = []
    for (let i = 0; i < animal_stack.length; i++) {
        let curr_animal = animal_stack[i];
        if (curr_animal) {
        var anim_functions = []
        let decider_func = data.deciderAxis ? animal_axis[curr_animal][data.deciderAxis] : null;
        let observer_func = data.observerAxis ? animal_axis[curr_animal][data.observerAxis] : null;
        anim_functions.push(observer_func, decider_func);
        animal_details.push({
            modality:data[`${curr_animal.toLowerCase()}Modality`],
            functions: anim_functions
        });
        } else {
        animal_details.push(null);
        }
    }

    var anim_all = [];
    need_grant.forEach((current_grant, i) => {
        if (current_grant[0] && current_grant[1]) {
            let current_animal = animal_options[current_grant[0]][current_grant[1]];
            let current_stack = i + 1;
            if (current_stack != 0) {
                anim_all.push({
                    animal: current_animal,
                    stack: current_stack,
                    savior: checkSavior(current_animal),
                    size: checkStacking(current_animal)
                })
            }
        } else {
            anim_all.push(null);
        }
    })

    var double_funcs = {}
    var doubles = double_options[data.animal4];
    for (let i = 1; i < functions.length + 1; i++) {
        let func = functions[i - 1];
        double_funcs[i] = false;
        if (doubles && doubles.includes(need_options[func])) {
            double_funcs[i] = true;
        }
    }

    var sensory_modality = data.sensoryModality ? data.sensoryModality.substring(0,1) : null;
    var de_modality = data.deModality ? data.deModality.substring(0,1) : null;
    var masc_modality = {}
    for (let i = 1; i < functions.length + 1; i++) {
        let func = functions[i - 1];
        if (func) {
            if (decider_functions.includes(func)) {
                masc_modality[i] = de_modality ? modality_options[de_modality][func] : null;
            }
            else {
                masc_modality[i] = sensory_modality ? modality_options[sensory_modality][func] : null;
            }
        } else {
            masc_modality[i] = null;
        }
    }

    const HandleAnimals = ({anim_num}) => {
        var stack_options = {
            1: 'main_logo',
            2: 'savior_logo',
            3: 'demon_logo',
            4: 'last_logo'
        }
        var bracket_options = {
            1: 'first_bracket',
            2: 'bracket',
            3: 'demon_bracket',
            4: 'last_demon_bracket'
        }
        var bracket_placements = {
            bracket: {
                0: 'top_bracket',
                1: 'second_bracket',
                2: 'third_bracket',
                3: 'last_bracket'
            },
            logo: {
                0: 'top_logo',
                1: 'second_logo',
                2: 'third_logo',
                3: 'fourth_logo'
            }
        }

        const all_nulls = anim_all.flat().every(entry => entry === null);
        var current_anim = !all_nulls ? anim_all.find(anim => anim.stack === anim_num + 1) : null;
        if (current_anim && current_anim.size != 0) {
            let bracket_option = bracket_options[current_anim.size];
            let stack_option = stack_options[current_anim.size];
            let animal_letter = current_anim.animal[0];
            let stack_placement = current_anim.stack;
            let bracket_placement = bracket_placements.bracket[anim_num];
            let logo_placement = bracket_placements.logo[anim_num];
            return (
                <>
                    <div className={`${bracket_option} ${bracket_placement}`}></div>
                    <div className={`bracket-logo ${logo_placement} ${stack_option}`}>
                        <div>
                            {stack_placement == 4 ? (
                                <p>({animal_letter})</p>
                            ) : (
                                <p>{animal_letter}</p>
                            )}
                        </div>
                    </div>
                </>
            )
        } else {
            return(<></>);
        }
    }

    const HandleFunctions = ({func_index}) => {
        var func_placements = ['top', 'second', 'third', 'last'];
        var savior_demons = {
            0: 'border-func',
            1: jumper ? 'demon_func' : 'border-func',
            2: jumper ? 'border-func' : 'demon_func',
            3: 'demon_func'
        }
        var opposites = {
            needs: {
                Oe: 'oi',
                Oi: 'oe',
                De: 'di',
                Di: 'de'
            },
            letters: {
                F: 't',
                T: 'f',
                N: 's',
                S: 'n'
            }
        }
        var double_placements = ['double_top', 'double_2nd', 'double_3rd', 'double_last'];
        var observer;
        if (data.oD == "Observer") {
            observer = [0,3].includes(func_index) ? true : false;
        } else if (data.oD == "Decider") {
            observer = [0,3].includes(func_index) ? false : true;
        }
        let double = double_funcs[func_index + 1] ? true : false;
        let double_placement = double_placements[func_index];
        let func_placement = func_placements[func_index];
        let savior_demon = savior_demons[func_index];
        const FunctionImage = () => {
            if (observer != null) {
                var current_function = functions[func_index];
                var path_location = '/img/icons/Modalities/';
                var masculine_feminine;
                if (observer) {
                    if (data.sensoryModality && current_function) {
                        if (current_function) {
                            masculine_feminine = masc_modality[func_index + 1] ? "Masc/m_" : "Fem/f_";
                        }
                    } else {
                        masculine_feminine = "";
                        if (current_function) {
                            path_location = '/img/icons/Functions/';
                        } else if (data.observerNeed) {
                            current_function = savior_demon == 'border-func' ? data.observerNeed.toLowerCase() : opposites.needs[data.observerNeed];
                            path_location = '/img/icons/partial/needs/';
                            masculine_feminine = data.sensoryModality ? (
                                data.observerAxis ? (
                                    data.observerAxis === 'Se-Ni' ? (
                                        data.sensoryModality === 'mS' ? (
                                            current_function === 'oe' ? 'm_' : 'f_'
                                        ) : (
                                            current_function === 'oe' ? 'f_' : 'm_'
                                        )
                                    ) : (
                                        data.sensoryModality === 'mS' ? (
                                            current_function === 'oe' ? 'f_' : 'm_'
                                        ) : (
                                            current_function === 'oe' ? 'm_' : 'f_'
                                        )
                                    )
                                ) : ""
                            ) : "";
                        } else if (data.observerLetter) {
                            current_function = savior_demon == 'border-func' ? data.observerLetter.toLowerCase() : opposites.letters[data.observerLetter];
                            path_location = '/img/icons/partial/letters/';
                            masculine_feminine = data.sensoryModality ? (
                                data.sensoryModality === 'mS' ? (
                                        current_function === 'n' ? 'f_' : 'm_'
                                    ) : (
                                        current_function === 'n' ? 'm_' : 'f_'
                                    )
                                ) : "";
                        } else {
                            path_location = "/img/icons/partial/";
                            current_function = "blank";
                        }
                    }
                } else {
                    if (data.deModality) {
                        if (current_function) {
                            masculine_feminine = masc_modality[func_index + 1] ? "Masc/m_" : "Fem/f_";
                        }
                        else if (data.deciderNeed) {
                            masculine_feminine = masc_modality[func_index + 1] ? "m_" : "f_";
                            current_function = savior_demon == 'border-func' ? data.deciderNeed.toLowerCase() : opposites.needs[data.deciderNeed];
                            if (data.deModality == "mDe") {
                                masculine_feminine = current_function.substring(1, 2) == "e" ? 'm_' : 'f_';
                            } else {
                                masculine_feminine = current_function.substring(1, 2) == "e" ? 'f_' : 'm_';
                            }
                            path_location = '/img/icons/partial/needs/';
                        } else if (data.deciderLetter) {
                            current_function = savior_demon == 'border-func' ? data.deciderLetter.toLowerCase() : opposites.letters[data.deciderLetter];
                            path_location = '/img/icons/partial/letters/';
                            masculine_feminine = "";
                        } else {
                            path_location = "/img/icons/partial/";
                            current_function = "blank";
                            masculine_feminine = "";
                        }
                    } else {
                        masculine_feminine = "";
                        if (current_function) {
                            path_location = '/img/icons/Functions/';
                        } else if (data.deciderNeed) {
                            current_function = savior_demon == 'border-func' ? data.deciderNeed.toLowerCase() : opposites.needs[data.deciderNeed];
                            path_location = '/img/icons/partial/needs/';
                        } else if (data.deciderLetter) {
                            current_function = savior_demon == 'border-func' ? data.deciderLetter.toLowerCase() : opposites.letters[data.deciderLetter];
                            path_location = '/img/icons/partial/letters/';
                        } else {
                            path_location = "/img/icons/partial/";
                            current_function = "blank";
                        }
                    }
                }

            } else {
                path_location = "/img/icons/partial/";
                current_function = "blank";
                masculine_feminine = "";
            }
            return (
                <img src={`${path_location}${masculine_feminine}${current_function}.png`} />
            )
        }
        return (
            <div className={`${func_placement} ${savior_demon}`}>
                <FunctionImage/>
                { double ? <div className={`double_logo ${double_placement}`}>2x</div> : null}
            </div>
        )
    }

    return (
        <div className="stack">
            <div className="big-axis"></div>
            <div className="small-axis"></div>
            {[...Array(4)].map((e, i) => {
                return (<HandleAnimals anim_num={i} key={i} />)
            })}
            {[...Array(4)].map((e, i) => {
                return (<HandleFunctions func_index={i} key={i} />)
            })}
        </div>
    )
}